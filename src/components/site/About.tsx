import { business, images } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-pad bg-background">
      <div className="shell grid gap-14 lg:grid-cols-12 lg:items-center lg:gap-16">
        <div className="lg:col-span-5">
          <p className="eyebrow">About Us</p>
          <h2 className="display-lg mt-5">About MG Contractor Projects</h2>
          <div className="mt-6 space-y-5 text-muted-foreground">
            <p>
              MG Contractor Projects is a roofing and general contracting company handling
              residential work from small repairs through larger renovations. Some projects are a
              single afternoon of repair work; others rebuild a roof or reshape whole rooms. Both
              get the same attention.
            </p>
            <p>
              Our work centers on three things: quality that holds up, communication you don't have
              to chase, and care for the property we're working on. That means explaining the scope
              before anything starts, keeping the site clean while we're there, and walking the
              finished job with you at the end.
            </p>
            <p className="font-display text-base uppercase tracking-[0.1em] text-foreground">
              {business.tagline}
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-base btn-ink">
              Start a Conversation
            </a>
            <a href={business.phoneHref} className="btn-base btn-outline-dark">
              {business.phoneDisplay}
            </a>
          </div>
        </div>

        <Reveal className="relative lg:col-span-7">
          <img
            src={images.about}
            alt="Two contractors reviewing project plans in front of a home under renovation"
            width={1440}
            height={1088}
            loading="lazy"
            className="aspect-4/3 w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 hidden h-28 w-28 border-l-2 border-t-2 border-accent lg:block"
          />
        </Reveal>
      </div>
    </section>
  );
}
