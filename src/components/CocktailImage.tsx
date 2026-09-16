"use client";

import { useState } from "react";

type Props = {
  /** 画像の URL。null なら何も描画しない。 */
  src: string | null;
  alt: string;
  className: string;
};

/**
 * カクテル画像。src が null のとき、または読み込みに失敗したときは何も描画しない。
 *
 * 「画像があるか」を先に問い合わせないのは、来客（anon）に Storage の列挙を許していないため。
 * 登録されていないカクテルの URL は 404 になるので、その場合に枠ごと消す。
 * 失敗した URL を覚えるので、差し替えで URL が変わればもう一度読みにいく。
 */
export function CocktailImage({ src, alt, className }: Props) {
  const [failedSrc, setFailedSrc] = useState<string | null>(null);

  if (!src || failedSrc === src) return null;

  return (
    // 静的 export なので next/image は使わない（画像を最適化するサーバーが無い）。
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => setFailedSrc(src)}
    />
  );
}
