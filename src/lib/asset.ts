/**
 * Prefixuje cestu k souboru ve /public základní cestou aplikace.
 * Díky tomu web funguje jak na kořeni domény (sigurd.cz),
 * tak v podadresáři GitHub Pages (/sigurd-site-reborn/).
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  return `${base.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
}
