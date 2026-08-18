import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Gallery, type GalleryImage } from "@/components/site/Gallery";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie – bitvy a souboje skupiny SIGURD" },
      {
        name: "description",
        content:
          "Fotografie z bitev, turnajů a historických festivalů bojové družiny SIGURD.",
      },
      { property: "og:title", content: "Galerie skupiny SIGURD" },
      {
        property: "og:description",
        content: "Fotografie z bitev, turnajů a festivalů družiny SIGURD.",
      },
    ],
  }),
  component: Galerie,
});

const bitvaPolicka: GalleryImage[] = [
  ["21077432_1671875276179150_7091739824918245193_n.jpg", "Skupina Sigurd"],
  ["21078551_1671874819512529_6382838519773002122_n.jpg", "Souboj"],
  ["21082885_1671875049512506_4160231911238591165_o.jpg", "Nakopnutí"],
  ["21077432_1671875276179150_7091739824918245193_n-1.jpg", "Skupina Sigurd"],
  ["21083318_1671875192845825_7225735284315179831_o.jpg", "Duel 1"],
  ["21083373_1671875106179167_3513845146822768749_o.jpg", "Duel 2"],
  ["21083379_1671875242845820_7070503481220445128_o.jpg", "Duel 3"],
  ["21122404_1671874999512511_2338763621093446711_o.jpg", "Duel 4"],
  ["21125680_1671874929512518_2626872500634864242_o.jpg", "Duel 5"],
  ["21167459_1671874866179191_898480209840207556_o.jpg", "Duel 6"],
  ["21167713_1671875156179162_5070798437068293701_o.jpg", "Duel 7"],
].map(([file, alt]) => ({ src: `/img/${file}`, alt: `${alt} – Bitva Polička 2017` }));

const zeZivota: GalleryImage[] = [
  { src: "/img/uvodfoto2018-1.jpg", alt: "Skupinová fotografie družiny Sigurd" },
  { src: "/img/camp2.png", alt: "Stanové ležení skupiny Sigurd" },
  { src: "/img/obrazekkramy.jpg", alt: "Bojové vybavení skupiny Sigurd" },
  { src: "/img/newbies_small.jpg", alt: "Vítání nováčků" },
  { src: "/img/beated.jpg", alt: "Jiný způsob vítání nováčků na akci" },
];

function Galerie() {
  return (
    <>
      <PageHero
        title="Galerie"
        subtitle="Bitvy, souboje a chvíle mezi nimi."
        image="/img/21083318_1671875192845825_7225735284315179831_o.jpg"
      />
      <div className="mx-auto max-w-6xl space-y-14 px-4 py-16">
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Bitva Polička 2017
          </h2>
          <Gallery images={bitvaPolicka} />
        </section>
        <section>
          <h2 className="mb-6 font-display text-xl uppercase tracking-[0.2em] text-primary">
            Ze života družiny
          </h2>
          <Gallery images={zeZivota} />
        </section>
        <p className="text-sm text-muted-foreground">
          Další fotografie a videa najdete na našem{" "}
          <a
            href="https://www.facebook.com/sigurdnew/"
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            Facebooku
          </a>
          .
        </p>
      </div>
    </>
  );
}
