import { createClient } from "@supabase/supabase-js";

// createClient はこのファイルの 1 つだけ。値は公開用（ブラウザに埋まる前提）の 2 変数から読む。
// 未設定なら next.config.ts がビルドを落とすので、ここでは空文字の既定値を置かない。
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

export const supabase = createClient(url, publishableKey, {
  auth: {
    // ログインは 6 桁コード入力（verifyOtp）。マジックリンクの戻り（URL のハッシュ）は扱わない。
    detectSessionInUrl: false,
  },
});
