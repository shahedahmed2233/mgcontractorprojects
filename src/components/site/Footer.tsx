import { business, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="shell grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center bg-ink font-display text-sm font-bold text-ink-foreground">
              MG
            </span>
            <span className="font-display text-base font-bold uppercase tracking-[0.14em]">
              {business.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{business.tagline}</p>
        </div>

        <div className="md:col-span-3">
          <h3 className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Navigation
          </h3>
          <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:col-span-4">
          <h3 className="font-display text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={business.phoneHref} className="font-display text-lg font-bold hover:text-accent">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="break-all">
              <a href={business.emailHref} className="hover:text-accent">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell py-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
            © 2026 {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
