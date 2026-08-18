import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Check } from "lucide-react";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/nabor")({
  head: () => ({
    meta: [
      { title: "Nábor – přidej se k družině SIGURD" },
      {
        name: "description",
        content:
          "Podmínky pro vstup do bojové družiny SIGURD: muž, 18+, dobrá kondice a zájem o raný středověk. Tréninky dvakrát týdně.",
      },
      { property: "og:title", content: "Nábor do bojové družiny SIGURD" },
      {
        property: "og:description",
        content: "Podmínky, tréninky a vybavení pro nové bojovníky.",
      },
    ],
  }),
  component: Nabor,
});

const pozadavky = [
  "muž",
  "minimální věk 18 let",
  "dobrá fyzická kondice",
  "základní znalosti a hlavně zájem o období, kterým se zabýváme",
];

function Nabor() {
  return (
    <>
      <PageHero
        title="Nábor"
        subtitle="Pokud byste měli zájem přidat se mezi nás, pak je tu několik informací a požadavků."
        image={asset(asset("/img/newbies_small.jpg"))}
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <ul className="space-y-3">
              {pozadavky.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-md border border-border bg-card px-4 py-3"
                >
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Naše tréninky jsou složeny jak z fyzické přípravy, tak z výuky
                boje. Konají se{" "}
                <strong className="text-foreground">dvakrát</strong> do týdne a je
                velice důležité je navštěvovat jak pro svůj vlastní úspěch v boji,
                tak i pro naučení se správné spolupráce v týmu.
              </p>
              <p>
                Vybavení, které je nutné pro tyto tréninky neprodleně pořídit se
                skládá z ochrany rukou, ochrany hlavy, zbraně a štítu. Je
                pochopitelně výhodou, ne však nutností, mít zkušenosti s bojovými
                sporty, nebo uměními.
              </p>
            </div>
            <Link
              to="/kontakt"
              className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ozvi se nám
            </Link>
          </div>
          <div className="grid gap-4">
            <img
              src={asset(asset("/img/newbies_small.jpg"))}
              alt="Vítání nováčků"
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover"
            />
            <img
              src={asset(asset("/img/beated.jpg"))}
              alt="Jiný způsob vítání nováčků na akci"
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}
