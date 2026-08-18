import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { CalendarDays, MapPin, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/svatobor")({
  head: () => ({
    meta: [
      { title: "Svatobor 2026 – festival Slovanů a Vikingů u Brna" },
      {
        name: "description",
        content:
          "Patnáctý ročník festivalu Svatobor 13. 6. 2026 v údolí řeky Oslavy u Nové Vsi u Oslavan: bitva, turnaje, řemesla a koncert Varkocs.",
      },
      { property: "og:title", content: "Svatobor 2026 – Slované a Vikingové" },
      {
        property: "og:description",
        content:
          "13. 6. 2026, údolí řeky Oslavy u Nové Vsi u Oslavan. Bitva, turnaje, historické ležení a koncert.",
      },
    ],
  }),
  component: Svatobor,
});

const EVENT_DATE = new Date("2026-06-13T10:00:00+02:00");

const program = [
  "turnaj jednotlivců a souboje skupin",
  "koncert skupiny Varkocs (SK/HU)",
  "historické ležení: dobová řemesla a trhy",
  "lukostřelba a jízda na koni",
  "Krohis – hry a aktivity pro děti i dospělé",
  "turnaj Knattleikr",
  "dětský turnaj Jugger",
];

function useCountdown(target: Date) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  if (now === null) return null;
  const diff = target.getTime() - now;
  if (diff <= 0) return { past: true } as const;
  return {
    past: false as const,
    dny: Math.floor(diff / 86400000),
    hodin: Math.floor(diff / 3600000) % 24,
    minut: Math.floor(diff / 60000) % 60,
    sekund: Math.floor(diff / 1000) % 60,
  };
}

function Svatobor() {
  const t = useCountdown(EVENT_DATE);

  return (
    <>
      <PageHero
        title="Svatobor"
        subtitle="Slované a Vikingové znovu na válečné stezce! Přijďte zažít střet válečníků, stará řemesla a život našich předků nedaleko Brna."
        image="/img/21082885_1671875049512506_4160231911238591165_o.jpg"
      />

      <div className="mx-auto max-w-6xl space-y-14 px-4 py-16">
        <section className="surface-card rounded-xl p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <CalendarDays className="size-4 text-primary" /> 13. 6. 2026
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> údolí řeky Oslavy, Nová
              Ves u Oslavan
            </span>
          </div>
          {t?.past ? (
            <p className="mt-6 rounded-lg border border-border bg-background/60 px-4 py-5 text-sm text-muted-foreground">
              Ročník 2026 už proběhl. Děkujeme všem, kdo dorazili – termín
              dalšího ročníku oznámíme na{" "}
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
          ) : (
            <div className="mt-6 grid grid-cols-4 gap-3 text-center">
              {(
                [
                  ["Dní", t?.dny],
                  ["Hodin", t?.hodin],
                  ["Minut", t?.minut],
                  ["Sekund", t?.sekund],
                ] as const
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-background/60 py-4"
                >
                  <div className="font-display text-2xl font-bold text-primary md:text-4xl tabular-nums">
                    {value ?? "–"}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>
              Skupina SIGURD vás zve na patnáctý ročník festivalu Svatobor, který
              se opět uskuteční v malebném údolí řeky Oslavy u Nové Vsi u Oslavan
              13. června. Těšit se můžete na střet Slovanů a Vikingů, turnaj
              jednotlivců i skupin, historické ležení a řemesla.
            </p>
            <p>
              Ku příležitosti 25tého výročí založení skupiny proběhne též koncert
              skupiny Varkocs!
            </p>
            <p className="font-semibold text-foreground">Časy jsou orientační!</p>
          </div>
          <div>
            <h2 className="mb-4 font-display text-xl uppercase tracking-[0.2em] text-primary">
              Program
            </h2>
            <ul className="space-y-2">
              {program.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-border bg-card px-4 py-3 text-sm"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="surface-card rounded-xl p-6">
            <h2 className="font-display text-lg uppercase tracking-[0.15em]">
              Informace pro účastníky
            </h2>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4"
              href="https://sigurd.cz/wp-content/uploads/2025/03/Svatobor-2025-pravidla-%C3%BA%C4%8Dastn%C3%ADci.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Pravidla pro účastníky (PDF) <ExternalLink className="size-4" />
            </a>
            <h3 className="mt-6 font-display text-lg uppercase tracking-[0.15em]">
              Information for participants
            </h3>
            <a
              className="mt-3 inline-flex items-center gap-2 text-sm text-primary underline underline-offset-4"
              href="https://sigurd.cz/wp-content/uploads/2025/03/Svatobor-2025-rules-participants.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Rules for participants (PDF) <ExternalLink className="size-4" />
            </a>
          </div>
          <div className="surface-card rounded-xl p-6">
            <h2 className="font-display text-lg uppercase tracking-[0.15em]">
              Kde nás najdete
            </h2>
            <div className="mt-4 space-y-3 text-sm">
              <a
                className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
                href="https://maps.app.goo.gl/GVn6Y9J19oeudEK28"
                target="_blank"
                rel="noreferrer"
              >
                Mapa konání akce <ExternalLink className="size-4" />
              </a>
              <br />
              <a
                className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
                href="https://www.facebook.com/share/1D4Pb5gjmF/"
                target="_blank"
                rel="noreferrer"
              >
                Událost na Facebooku <ExternalLink className="size-4" />
              </a>
              <br />
              <a
                className="inline-flex items-center gap-2 text-primary underline underline-offset-4"
                href="https://youtu.be/Svh5kwa4qFM?si=9zZ4AObqgF7vAHT_&list=PLPS5_hX3Nuu1nLzpZVPq2MgmsyRpCHp43"
                target="_blank"
                rel="noreferrer"
              >
                Videa minulých ročníků <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
