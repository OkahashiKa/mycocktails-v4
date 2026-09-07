import type { Cocktail } from "@/content/schema";

export const difficultyLabel: Record<Cocktail["difficulty"], string> = {
  easy: "簡単",
  normal: "普通",
  hard: "難しい",
};

export const alcoholLevelLabel: Record<Cocktail["alcoholLevel"], string> = {
  low: "弱め",
  medium: "普通",
  high: "強め",
};
