import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section id="services" className="section-pad bg-background">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">What We Do</p>
            <h2 className="display-lg mt-5">
              Contracting services for the whole exterior — and everything inside it.
            </h2>
          </div>
          <p className="text-muted-foreground md:col-span-5">
            Every job is scoped honestly, scheduled clearly and finished to the same standard,
            whether it's a single repair or a full renovation.
          </p>
        </div>

        <ul className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 70} className="bg-card">
              <article className="group flex h-full flex-col p-8 transition-colors duration-300 hover:bg-secondary">
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-2xl">{service.title}</h3>
                <p className="mt-3 flex-1 text-[0.98rem] text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2.5 text-sm">
                      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
