import { HardHat, MessageSquare, Ruler, ShieldCheck } from "lucide-react";
import { images } from "@/data/site";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: HardHat,
    title: "Quality craftsmanship",
    body: "Work done in the right order with the right materials — proper prep, solid fastening and finishes that hold up season after season.",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    body: "You know the scope, the schedule and the next step. Questions get answered by the people actually doing the work.",
  },
  {
    icon: Ruler,
    title: "Attention to detail",
    body: "Clean lines, tight flashing, straight trim and a tidy site. The details are what separate a finished job from a fast one.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable service",
    body: "We show up when we say we will, protect your property while we work, and walk the project with you before we call it done.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-pad bg-ink text-ink-foreground">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <img
            src={images.why}
            alt="Contractor carefully measuring and aligning roof shingles"
            width={1280}
            height={1440}
            loading="lazy"
            className="aspect-4/5 w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -right-5 hidden h-32 w-32 border-b-2 border-r-2 border-accent sm:block"
          />
        </Reveal>

        <div>
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="display-lg mt-5">Built on workmanship, not shortcuts.</h2>
          <p className="mt-5 max-w-xl text-ink-foreground/80">
            MG Contractor Projects takes on work the way it should be handled: measured carefully,
            explained plainly and completed with care. That approach applies to a single roof repair
            just as much as a full renovation.
          </p>

          <ul className="mt-10 grid gap-px bg-ink-foreground/10 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <Reveal as="li" key={reason.title} delay={i * 80} className="bg-ink p-6">
                <reason.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mt-4 text-lg">{reason.title}</h3>
                <p className="mt-2 text-sm text-ink-muted">{reason.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
