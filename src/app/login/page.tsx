"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Step = "email" | "code";

const inputClass =
  "w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-base dark:border-neutral-600";
const buttonClass =
  "rounded-md bg-amber-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 1 段目: メールアドレスに 6 桁コードを送る。エラー文言は Supabase のものをそのまま出す（レート制限を隠さない）。
  const sendCode = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    setStep("code");
  };

  // 2 段目: 届いた 6 桁コードを検証し、成功したらマイバー画面へ。
  const verifyCode = async (e: FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setError(null);
    const { error } = await supabase.auth.verifyOtp({ email, token, type: "email" });
    setBusy(false);
    if (error) {
      setError(error.message);
      return;
    }
    router.push("/");
  };

  return (
    <main className="mx-auto flex w-full max-w-sm flex-1 flex-col gap-6 p-4 sm:p-8">
      <header>
        <h1 className="text-2xl font-semibold">ログイン</h1>
        <p className="text-sm text-neutral-500">メールアドレスに 6 桁のコードを送ります。</p>
      </header>

      {step === "email" ? (
        <form onSubmit={sendCode} className="flex flex-col gap-3">
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
            {busy ? "送信中" : "コードを送る"}
          </button>
        </form>
      ) : (
        <form onSubmit={verifyCode} className="flex flex-col gap-3">
          <p className="text-sm">
            <span className="font-medium">{email}</span> に送ったコードを入力してください。
          </p>
          <label className="flex flex-col gap-1 text-sm">
            6 桁のコード
            <input
              type="text"
              name="token"
              inputMode="numeric"
              autoComplete="one-time-code"
              pattern="[0-9]{6}"
              maxLength={6}
              required
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className={inputClass}
            />
          </label>
          <button type="submit" disabled={busy} className={buttonClass}>
            {busy ? "確認中" : "ログイン"}
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => {
              setStep("email");
              setToken("");
              setError(null);
            }}
            className="text-sm text-neutral-500 underline"
          >
            メールアドレスを入れ直す
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
