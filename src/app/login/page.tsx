"use client";

import { useState, type FormEvent } from "react";
import { supabase } from "@/lib/supabase";

const inputClass =
  "w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-base dark:border-neutral-600";
const buttonClass =
  "rounded-md bg-amber-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // メールにログイン用のリンクを送る。リンクを押すとこのアプリの / に戻り、そこでセッションが張られる。
  // 戻り先はハードコードせず、今開いている origin から作る（本番・Preview・ローカルで同じコードが動く）。
  // エラー文言は Supabase のものをそのまま出す（レート制限を隠さない）。
  const sendLink = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    const emailRedirectTo = typeof window !== "undefined" ? `${window.location.origin}/` : undefined;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true, emailRedirectTo },
    });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    setSent(true);
  };

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col gap-6 p-4 sm:p-8">
      <header>
        <h1 className="text-2xl font-semibold">ログイン</h1>
        <p className="text-sm text-neutral-500">メールアドレスにログイン用のリンクを送ります。</p>
      </header>

      {sent ? (
        <div className="flex flex-col gap-3">
          <p className="text-sm">
            <span className="font-medium">{email}</span> にメールを送りました。届いたリンクを押すとログインできます。
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setError(null);
            }}
            className="self-start text-sm text-neutral-500 underline"
          >
            メールアドレスを入れ直す
          </button>
        </div>
      ) : (
        <form onSubmit={sendLink} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm">
            メールアドレス
            <input
              type="email"
              name="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClass}
            />
          </label>
          <button type="submit" disabled={busy} className={buttonClass}>
            {busy ? "送信中" : "ログイン用のリンクを送る"}
          </button>
        </form>
      )}

      {error ? (
        <p role="alert" className="rounded-md border border-red-300 p-3 text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </main>
  );
}
