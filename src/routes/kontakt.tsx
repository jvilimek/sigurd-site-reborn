import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Facebook, MapPin, Swords } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt – bojová družina SIGURD" },
      {
        name: "description",
        content:
          "Kontaktujte bojovou družinu SIGURD z Brna – vystoupení, spolupráce, nábor nových bojovníků.",
      },
      { property: "og:title", content: "Kontakt – bojová družina SIGURD" },
      {
        property: "og:description",
        content: "Napište nám ohledně vystoupení, spolupráce nebo náboru.",
      },
    ],
  }),
  component: Kontakt,
});

function Kontakt() {
  return (
    <>
      <PageHero
        title="Kontakt"
        subtitle="Vystoupení, spolupráce, nábor nebo jen dotaz – ozvěte se nám."
        image="/img/camp2.png"
      />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <a
            href="https://www.facebook.com/sigurdnew/"
            target="_blank"
            rel="noreferrer"
            className="surface-card rounded-xl p-6 transition-colors hover:border-primary"
          >
            <Facebook className="size-6 text-primary" />
            <h2 className="mt-4 font-display text-lg uppercase tracking-[0.15em]">
              Facebook
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nejrychlejší cesta k nám – napište nám zprávu na facebookové
              stránce Sigurd.
            </p>
          </a>

          <div className="surface-card rounded-xl p-6">
            <MapPin className="size-6 text-primary" />
            <h2 className="mt-4 font-display text-lg uppercase tracking-[0.15em]">
              Kde působíme
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Brno a okolí. Tréninky probíhají dvakrát týdně, vystupujeme po celé
              ČR i v zahraničí.
            </p>
          </div>

          <div className="surface-card rounded-xl p-6">
            <Swords className="size-6 text-primary" />
            <h2 className="mt-4 font-display text-lg uppercase tracking-[0.15em]">
              Vystoupení
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Nabízíme program z bojových ukázek a ukázek výcviku bojovníků –
              pro festivaly, města i uzavřené akce.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
