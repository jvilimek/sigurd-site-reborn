import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/odkazy")({
  head: () => ({
    meta: [
      { title: "Odkazy – spřátelené skupiny družiny SIGURD" },
      {
        name: "description",
        content:
          "Bannery spřátelených raně středověkých skupin a banner bojové družiny SIGURD ke stažení.",
      },
      { property: "og:title", content: "Odkazy – spřátelené skupiny" },
      {
        property: "og:description",
        content: "Spřátelené raně středověké skupiny a náš banner.",
      },
    ],
  }),
  component: Odkazy,
});

const skupiny = [
  ["Valhalla", "/img/valhalla.jpg", "http://www.walhalla.com.pl/"],
  ["Wataha", "/img/szczoteczky.jpg", "http://wataha.com.pl/"],
  ["Nordegard", "/img/nordegard.jpg", "http://www.nordegard.hu/"],
  ["Nordelag", "/img/nordelag_banner.jpg", "http://nordelag.org/"],
  ["Pretorium", "/img/pretorium.jpg", "http://pretorium.pl/"],
  ["Percival", "/img/percival_new_banner.jpg", "http://www.percival.pl/"],
  ["Bielska družina Nordów", "/img/bdn_big-1.jpg", "http://www.svantevit.eu/"],
];

function Odkazy() {
  return (
    <>
      <PageHero
        title="Odkazy"
        subtitle="Skupiny, se kterými trénujeme, bojujeme a slavíme."
        image="/img/obrazekkramy.jpg"
      />
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-16">
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Náš banner
          </h2>
          <img
            src="/img/sigurd.jpg"
            alt="Banner skupiny Sigurd"
            loading="lazy"
            className="rounded-md border border-border"
          />
        </section>
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Spřátelené skupiny
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skupiny.map(([name, img, href]) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary"
              >
                <img
                  src={img}
                  alt={`Banner skupiny ${name}`}
                  loading="lazy"
                  className="max-h-16 w-auto"
                />
                <span className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {name}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
