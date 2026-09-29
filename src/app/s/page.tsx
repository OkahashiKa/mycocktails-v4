"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { cocktails } from "@/content/cocktails";
import { materials } from "@/content/materials";
import type { Cocktail } from "@/content/schema";
import { makeable } from "@/lib/makeable";
import { supabase } from "@/lib/supabase";
import { imageUrl } from "@/lib/imageStore";
import { loadNotes, type Notes } from "@/lib/noteStore";
import { CocktailList } from "@/components/CocktailList";
import { CocktailDetail } from "@/components/CocktailDetail";

// 8-4-4-4-12 の hex。大文字小文字は問わない。
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// 取得の 3 状態。error（RPC のエラー・例外）と ok(ids=[])（戻りが空配列）は別の分岐。
// error では件数行を描画しない。「0 件」は ok で ids が空のときだけ出る。
// 4 つ目の invalid（u が無い・UUID 形式でない）はクエリから同期的に決まるので state に持たない。
type FetchState = { kind: "loading" } | { kind: "error" } | { kind: "ok"; ids: ReadonlySet<string> };

function SharedList() {
  const params = useSearchParams();
  const u = params.get("u");
  const invalid = !u || !UUID_RE.test(u);
  const [state, setState] = useState<FetchState>({ kind: "loading" });
  const [selected, setSelected] = useState<Cocktail | null>(null);
  // 持ち主が書いた備考。読めなかったときは空のまま（一覧は出す）。
  const [notes, setNotes] = useState<Notes>({});

  useEffect(() => {
    if (invalid || !u) return;
    let cancelled = false;
    (async () => {
      try {
        const { data, error } = await supabase.rpc("shared_material_ids", { p_user: u });
        if (cancelled) return;
        if (error) {
          setState({ kind: "error" });
          return;
        }
        // 戻りは text[]。null は想定外だが、空配列とは区別して取得失敗に倒す。
        if (!Array.isArray(data)) {
          setState({ kind: "error" });
          return;
        }
        setState({ kind: "ok", ids: new Set(data as string[]) });
      } catch {
        if (cancelled) return;
        setState({ kind: "error" });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [u, invalid]);

  // 備考は材料とは別に読む。失敗しても一覧の取得失敗にはしない（備考が出ないだけ）。
  useEffect(() => {
    if (invalid || !u) return;
    let cancelled = false;
    loadNotes(supabase, u)
      .then((fromStorage) => {
        if (!cancelled) setNotes(fromStorage);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [u, invalid]);

  const noteOf = useCallback((cocktailId: string) => notes[cocktailId] ?? "", [notes]);

  const close = useCallback(() => setSelected(null), []);

  // 来客は Storage の中身を列挙できないので、画像の有無を問い合わせずに URL だけ組み立てる。
  // 登録されていないカクテルの URL は 404 になり、CocktailImage がその枠を出さない。
  const imageUrlOf = useCallback(
    (cocktailId: string) => (u && !invalid ? imageUrl(supabase, u, cocktailId) : null),
    [u, invalid],
  );

  if (invalid) {
    return (
      <p role="alert" className="rounded-md border border-red-300 p-3 text-sm text-red-700 dark:text-red-400">
        共有 URL が正しくありません
      </p>
    );
  }
  if (state.kind === "loading") {
    return <p className="text-sm text-neutral-500">読み込み中…</p>;
  }
  if (state.kind === "error") {
    return (
      <p role="alert" className="rounded-md border border-red-300 p-3 text-sm text-red-700 dark:text-red-400">
        取得できません
      </p>
    );
  }

  const list = makeable(state.ids, cocktails);

  return (
    <>
      <section aria-labelledby="cocktails-heading">
        <h2 id="cocktails-heading" className="mb-3 text-lg font-medium">
          作れるカクテル
        </h2>
        <CocktailList
          cocktails={list}
          onSelect={setSelected}
          emptyMessage="今は作れるカクテルがありません。"
          imageUrlOf={imageUrlOf}
          noteOf={noteOf}
        />
      </section>
      {selected ? (
        <CocktailDetail
          cocktail={selected}
          materials={materials}
          onClose={close}
          imageUrl={imageUrlOf(selected.id)}
          note={noteOf(selected.id)}
        />
      ) : null}
    </>
  );
}

export default function SharedPage() {
  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 p-4 sm:p-8">
      <header>
        <h1 className="text-2xl font-semibold">共有ページ</h1>
        <p className="text-sm text-neutral-500">この一覧は持ち主が登録した材料で作れるカクテルです。</p>
      </header>
      {/* 静的 export では useSearchParams を呼ぶコンポーネントを Suspense で包む。包み忘れは next build で落ちる。 */}
      <Suspense fallback={<p className="text-sm text-neutral-500">読み込み中…</p>}>
        <SharedList />
      </Suspense>
    </main>
  );
}
