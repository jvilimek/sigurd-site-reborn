// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// STATIC_EXPORT=1 => čistě statický build pro GitHub Pages (HTML pro každou stránku
// se předgeneruje do dist/client). Bez této proměnné běží standardní Lovable build.
const staticExport = process.env["STATIC_EXPORT"] === "1";

export default defineConfig({
  ...(staticExport ? { nitro: false as const } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(staticExport
      ? {
          prerender: { enabled: true, crawlLinks: true },
          pages: [
            { path: "/" },
            { path: "/druzina" },
            { path: "/galerie" },
            { path: "/nabor" },
            { path: "/svatobor" },
            { path: "/odkazy" },
            { path: "/kontakt" },
          ],
        }
      : {}),
  },
});
