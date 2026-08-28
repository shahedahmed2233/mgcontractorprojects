import { ArrowRight, Phone } from "lucide-react";
import { business } from "@/data/site";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-ink-foreground">
      <div aria-hidden="true" className="hairline-grid absolute inset-0 opacity-70" />
      <div className="shell relative flex flex-col items-start gap-8 py-20 md:flex-row md:items-center md:justify-between md:py-24">
        <div>
          <p className="eyebrow">Next Step</p>
          <h2 className="display-lg mt-5 max-w-xl">Let's Get Your Project Moving.</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="btn-base btn-accent">
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a href={business.phoneHref} className="btn-base btn-outline-light">
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
