import { ArrowRight, Phone } from "lucide-react";
import { business, images } from "@/data/site";

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-end overflow-hidden">
      <img
        src={images.hero}
        alt="Roofing crew installing architectural shingles on a residential roof at sunset"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/80 to-ink/45"
      />
      <div aria-hidden="true" className="hairline-grid absolute inset-0 -z-10 opacity-60" />

      <div className="shell w-full pb-20 pt-32 md:pb-28">
        <p className="eyebrow">Roofing &amp; General Contracting</p>
        <h1 className="display-xl mt-6 max-w-3xl text-ink-foreground">
          Quality Roofing &amp; Construction, Built to Last.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink-foreground/85">
          From small repairs to complete renovations, MG Contractor Projects delivers dependable
          workmanship and professional service for your next project.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a href="#contact" className="btn-base btn-accent">
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={business.phoneHref} className="btn-base btn-outline-light">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {business.phoneDisplay}
          </a>
        </div>

        <p className="mt-10 max-w-md border-l-2 border-accent pl-4 font-display text-sm uppercase tracking-[0.16em] text-ink-foreground/70">
          {business.tagline}
        </p>
      </div>
    </section>
  );
}
