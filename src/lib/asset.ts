/**
 * Prefixuje cestu k souboru ve /public základní cestou aplikace.
 * Díky tomu web funguje jak na kořeni domény (sigurd.cz),
 * tak v podadresáři GitHub Pages (/sigurd-site-reborn/).
 * Funkce je idempotentní – dvojí použití cestu nezdvojí.
 */
export function asset(path: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  if (!base || path.startsWith(`${base}/`)) return path;
  return `${base}/${path.replace(/^\//, "")}`;
}
