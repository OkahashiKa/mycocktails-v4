import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "mycocktails",
  description: "今ある材料から作れるカクテルが分かる自宅バーのアプリ",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
