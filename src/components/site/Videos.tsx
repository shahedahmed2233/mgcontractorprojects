import { videos } from "@/data/site";
import { Reveal } from "./Reveal";

export function Videos() {
  return (
    <section id="videos" className="section-pad bg-ink text-ink-foreground">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">On the Job</p>
          <h2 className="display-lg mt-5">See Our Work in Action</h2>
          <p className="mt-5 text-ink-foreground/80">
            Short clips from recent projects — real crews, real job sites, real results.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal key={video.id} delay={i * 90} className="w-full">
              <figure className="w-full border border-ink-foreground/15 bg-ink-foreground/5 p-3">
                <div className="relative w-full overflow-hidden bg-black pt-[178%]">
                  <iframe
                    src={video.src}
                    title={video.title}
                    loading="lazy"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    scrolling="no"
                    frameBorder="0"
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
                <figcaption className="pt-3 font-display text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-ink-muted">
                  {video.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
