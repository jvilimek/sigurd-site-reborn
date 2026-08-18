import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/druzina")({
  head: () => ({
    meta: [
      { title: "Družina – členové skupiny SIGURD" },
      {
        name: "description",
        content:
          "Členové, čekatelé a bojovníci v záloze varjažské bojové družiny SIGURD z Brna.",
      },
      { property: "og:title", content: "Družina – členové skupiny SIGURD" },
      {
        property: "og:description",
        content: "Členové, čekatelé a bojovníci v záloze družiny SIGURD.",
      },
    ],
  }),
  component: Druzina,
});

const clenove = [
  ["jecko", "Ječko"],
  ["tatan", "Tatan"],
  ["dan", "Dan"],
  ["pavel", "Pavel"],
  ["ture", "Ture"],
  ["payout", "Payout"],
  ["aran", "Aran"],
  ["carls", "Carls"],
  ["jacek", "Jacek"],
  ["sfen", "Sfen"],
  ["honza", "Honza"],
  ["petronella", "Petronella"],
];

const clenoveExtra = [
  [asset("/img/martin_cekatel.jpg"), "Martin"],
  [asset("/img/pepa_cekatel.jpg"), "Pepa"],
  [asset("/img/tunel_cekatel.jpg"), "Tunel"],
];

const cekatele = [
  [asset("/img/radek_cekatel.jpg"), "Radek"],
  [asset("/img/novi_clenove_2018__0002_viktor.jpg"), "Viktor"],
  [asset("/img/novi_clenove_2018__0003_filip.jpg"), "Filip"],
  [asset("/img/novi_clenove_2018__0001_jirka.jpg"), "Jirka"],
  [asset("/img/novi_clenove_2018__0005_jena.jpg"), "Jena"],
  [asset("/img/novi_clenove_2018__0004_michal.jpg"), "Michal"],
];

const zaloha = [
  [asset("/img/clenove__0014_marty.jpg"), "Marty"],
  [asset("/img/clenove__0008_taz.jpg"), "Taz"],
  [asset("/img/clenove__0013_rugan.jpg"), "Rugan"],
];

const fileMap: Record<string, string> = {
  jecko: "clenove__0016_jecko",
  tatan: "clenove__0009_tatan",
  dan: "clenove__0006_dan",
  pavel: "clenove__0012_pavel",
  ture: "clenove__0004_ture",
  payout: "clenove__0010_payout",
  aran: "clenove__0011_aran",
  carls: "clenove__0002_carls",
  jacek: "clenove__0005_jacek",
  sfen: "clenove__0017_sfen",
  honza: "clenove__0019_honza",
  petronella: "clenove__0020_petronella",
};

function PersonGrid({ people }: { people: [string, string][] }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {people.map(([src, name]) => (
        <figure
          key={src}
          className="overflow-hidden rounded-lg border border-border bg-card"
        >
          <img
            src={src}
            alt={`Bojovník ${name} ze skupiny Sigurd`}
            loading="lazy"
            className="aspect-3/4 w-full object-cover"
          />
          <figcaption className="px-3 py-2 text-center text-sm font-medium uppercase tracking-wide text-muted-foreground">
            {name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function Druzina() {
  const members: [string, string][] = [
    ...clenove.map(
      ([key, name]) => [`/img/${fileMap[key!]}.jpg`, name!] as [string, string],
    ),
    ...clenoveExtra.map(([src, name]) => [src!, name!] as [string, string]),
  ];

  return (
    <>
      <PageHero
        title="Družina"
        subtitle="Velitel a jeho bojovníci. Historicky věrohodná hierarchie, pravidelný trénink, společné bitvy."
        image={asset(asset("/img/uvodfoto2018-1.jpg"))}
      />
      <div className="mx-auto max-w-6xl space-y-16 px-4 py-16">
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Členové
          </h2>
          <PersonGrid people={members} />
        </section>
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Čekatelé
          </h2>
          <PersonGrid people={cekatele as [string, string][]} />
        </section>
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            V záloze
          </h2>
          <PersonGrid people={zaloha as [string, string][]} />
        </section>
      </div>
    </>
  );
}
