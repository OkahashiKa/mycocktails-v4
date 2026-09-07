import type { NextConfig } from "next";

const required = ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"];
for (const name of required) {
  if (!process.env[name]) {
    throw new Error(`Missing env: ${name}`);
  }
}

const nextConfig: NextConfig = {
  output: "export",
  // trailingSlash: true,  ← 「初日デプロイ」で /s?u= の直リンクが 200 を返さなかったときだけ有効にする
};

export default nextConfig;
