"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { categories } from "@/content/categories";
import { cocktails } from "@/content/cocktails";
import { materials } from "@/content/materials";
import type { Cocktail } from "@/content/schema";
import { makeable } from "@/lib/makeable";
import { supabase } from "@/lib/supabase";
import { addOwned, countOrphans, loadOwned, removeOwned } from "@/lib/ownedStore";
import { MaterialChips } from "@/components/MaterialChips";
import { CocktailList } from "@/components/CocktailList";
import { CocktailDetail } from "@/components/CocktailDetail";

const knownIds = new Set(materials.map((m) => m.id));

export default function Home() {
  const router = useRouter();
  // null = セッション判定中。判定後は user_material から読んだ手持ちで初期化する。
  const [userId, setUserId] = useState<string | null>(null);
  const [owned, setOwned] = useState<Set<string>>(() => new Set());
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Cocktail | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const { data } = await supabase.auth.getSession();
      if (cancelled) return;
      const session = data.session;
      if (!session) {
        router.replace("/login");
        return;
      }
      setUserId(session.user.id);
      try {
        const fromDb = await loadOwned(supabase, session.user.id);
        if (cancelled) return;
        // DB にあってコンテンツに無い ID は Set に残す（判定には効かない）。件数は 0 でも 1 行出す。
        console.log(`orphan_ids=${countOrphans(fromDb, knownIds)}`);
        setOwned(fromDb);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : String(e));
      }
      setLoaded(true);
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  // 楽観的更新: 先に Set を更新し、保存に失敗したら元に戻してエラー文言を出す。
  const toggle = async (materialId: string) => {
    if (!userId) return;
    const had = owned.has(materialId);
    setError(null);
    setOwned((prev) => {
      const next = new Set(prev);
      if (had) next.delete(materialId);
      else next.add(materialId);
      return next;
    });
    try {
      if (had) await removeOwned(supabase, userId, materialId);
      else await addOwned(supabase, userId, materialId);
    } catch (e) {
      setOwned((prev) => {
        const next = new Set(prev);
        if (had) next.add(materialId);
        else next.delete(materialId);
        return next;
      });
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const logout = async () => {
    await supabase.auth.signOut();
    router.replace("/login");
  };

  const close = useCallback(() => setSelected(null), []);

  if (!userId || !loaded) {
    return (
      <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-4 p-4 sm:p-8">
        <p className="text-sm text-neutral-500">読み込み中</p>
        {error ? (
          <p role="alert" className="rounded-md border border-red-300 p-3 text-sm text-red-700 dark:text-red-400">
            {error}
          </p>
        ) : null}
      </main>
    );
  }

  const list = makeable(owned, cocktails);

  return (
    <main className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-8 p-4 sm:p-8">
      <header className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">マイバー</h1>
          <p className="text-sm text-neutral-500">今ある材料をタップすると、作れるカクテルが分かります。</p>
        </div>
        <button type="button" onClick={logout} className="shrink-0 text-sm text-neutral-500 underline">
          ログアウト
        </button>
      </header>

      {error ? (
        <p role="alert" className="rounded-md border border-red-300 p-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}

      <section aria-labelledby="materials-heading">
        <h2 id="materials-heading" className="mb-3 text-lg font-medium">
          手持ちの材料
        </h2>
        <MaterialChips categories={categories} materials={materials} owned={owned} onToggle={toggle} />
      </section>

      <section aria-labelledby="cocktails-heading">
        <h2 id="cocktails-heading" className="mb-3 text-lg font-medium">
          作れるカクテル
        </h2>
        <CocktailList cocktails={list} onSelect={setSelected} />
      </section>

      {selected ? <CocktailDetail cocktail={selected} materials={materials} onClose={close} /> : null}
    </main>
  );
}
