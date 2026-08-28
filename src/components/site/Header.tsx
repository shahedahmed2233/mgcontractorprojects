import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/95 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-accent font-display text-sm font-bold tracking-tight text-accent-foreground">
            MG
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-bold uppercase tracking-[0.16em] text-ink-foreground">
              MG Contractor
            </span>
            <span className="block font-display text-[0.65rem] uppercase tracking-[0.3em] text-accent">
              Projects
            </span>
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-display text-xs font-semibold uppercase tracking-[0.16em] text-ink-foreground/80 transition-colors hover:text-ink-foreground after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={business.phoneHref} className="btn-base btn-accent hidden md:inline-flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {business.phoneDisplay}
          </a>
          <a
            href={business.phoneHref}
            aria-label={`Call ${business.phoneDisplay}`}
            className="flex h-11 w-11 items-center justify-center bg-accent text-accent-foreground md:hidden"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-11 w-11 items-center justify-center border border-ink-foreground/30 text-ink-foreground lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-ink-foreground/10 bg-ink lg:hidden"
      >
        <nav aria-label="Mobile" className="shell flex flex-col py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-foreground/10 py-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href={business.emailHref}
            className="py-4 text-sm text-ink-muted"
            onClick={() => setOpen(false)}
          >
            {business.email}
          </a>
        </nav>
      </div>
    </header>
  );
}
