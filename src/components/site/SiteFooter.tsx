import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-card/40">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-base tracking-[0.25em] text-foreground">
            SIGURD
          </p>
          <p className="mt-1">Varjažská bojová družina · Brno · od roku 2001</p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link to="/nabor" className="transition-colors hover:text-primary">
            Chci se přidat
          </Link>
          <Link to="/kontakt" className="transition-colors hover:text-primary">
            Kontakt
          </Link>
          <a
            href="https://www.facebook.com/sigurdnew/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-primary"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
