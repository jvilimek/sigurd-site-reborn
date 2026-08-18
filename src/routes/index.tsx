import { createFileRoute, Link } from "@tanstack/react-router";
import { asset } from "@/lib/asset";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SIGURD – varjažská bojová družina z Brna" },
      {
        name: "description",
        content:
          "Bojová družina SIGURD ztvárňuje varjažské bojovníky 9.–11. století. Tréninky, vystoupení, bitvy a festival Svatobor.",
      },
      { property: "og:title", content: "SIGURD – varjažská bojová družina" },
      {
        property: "og:description",
        content:
          "Varjažská bojová družina z Brna od roku 2001. Bojové ukázky, historické festivaly a bitvy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src={asset(asset("/img/uvodfoto2018-1.jpg"))}
          alt="Skupinová fotografie bojové družiny Sigurd"
          className="absolute inset-0 size-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/70 to-background" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            Bojová družina · Brno · od 2001
          </p>
          <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-tight tracking-[0.12em] md:text-6xl">
            Sigurd
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Ztvárnění družiny varjažských bojovníků z období 9. – 11. stol. n. l.
            se zaměřením na oblast Černého moře a Kyjevské Rusi.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/svatobor"
              className="rounded-md bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
            >
              Festival Svatobor
            </Link>
            <Link
              to="/nabor"
              className="rounded-md border border-border px-6 py-3 text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:bg-secondary"
            >
              Nábor do družiny
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="space-y-5 text-muted-foreground">
            <h2 className="font-display text-2xl uppercase tracking-[0.12em] text-foreground md:text-3xl">
              O nás
            </h2>
            <p>
              Sigurd vznikl před koncem roku 2001 v Brně jako vikingská družina.
              V současnosti v našich řadách najdete nejen Vikingy, ale také
              slovanské nebo chazarské bojovníky. Od počátku své existence se
              Sigurd striktně vymezil jako skupina bojovníků, s historicky
              věrohodnou hierarchií velitele a jeho družiny, proto v našich řadách
              nenajdete ženy nebo ukázky řemesel v táborovém ležení.
            </p>
            <p>
              Hlavní důraz je kladen na rozvoj bojeschopnosti a fyzické zdatnosti
              členů, podpořené pravidelnými treninky, včetně skupinových treninků
              u nás nebo se spřátelenými skupinami v zahraničí. Zúčastňujeme se
              mnoha tuzemských a hlavně zahraničních raně středověkých akcí a
              bitev.
            </p>
            <p>
              Případným zájemcům můžeme nabídnout vystoupení sestavené z bojových
              ukázek a z ukázek výcviku bojovníků.
            </p>
          </div>
          <img
            src={asset(asset("/img/camp2.png"))}
            alt="Stanové ležení skupiny Sigurd"
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <img
            src={asset(asset("/img/obrazekkramy.jpg"))}
            alt="Bojové vybavení skupiny Sigurd"
            loading="lazy"
            className="order-2 w-full rounded-lg border border-border object-cover md:order-1"
          />
          <div className="order-1 space-y-5 text-muted-foreground md:order-2">
            <h2 className="font-display text-2xl uppercase tracking-[0.12em] text-foreground md:text-3xl">
              Od Vikingů k Varjagům
            </h2>
            <p>
              Během posledních několika let došlo k přechodu z obecného zaměření
              vikinsko-slovanská družina na konkrétnější podobu, a to varjažskou
              bojovou družinu. Varjagy označujeme v raném středověku severské
              válečníky a obchodníky s působištěm v oblastech dnešního Švédska,
              Ruska a jižních oblastí kolem Černého moře.
            </p>
            <p>
              Tento přechod je postupný a pochopitelně souvisí s reorganizací
              vybavení a doplňků členů skupiny, tak aby vyhovovaly nálezům a
              historickým pramenům ze zmíněných oblastí.
            </p>
            <p>
              Zimní období je naplněné intenzivními tréninky a přípravou. Tyto
              nabyté zkušenosti prověřujeme už od počátku jara, kdy se konají
              vystoupení u nás a bitvy a historické festivaly převážně v
              zahraničí. Skupina SIGURD představuje své vystoupení (ukázky
              vybavení válečníků, souboje a bojové formace) i na prezentačních
              akcích, doprovodných programech a akcích pro uzavřenou společnost.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
