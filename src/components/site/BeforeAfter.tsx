import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import { beforeAfterProjects, type BeforeAfterProject } from "@/data/site";
import { Reveal } from "./Reveal";

function CompareSlider({ project }: { project: BeforeAfterProject }) {
  const [position, setPosition] = useState(50);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <div className="bg-card">
      <div
        ref={frameRef}
        className="relative aspect-4/3 w-full touch-none select-none overflow-hidden"
        onPointerDown={(e) => {
          draggingRef.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (draggingRef.current) updateFromClientX(e.clientX);
        }}
        onPointerUp={(e) => {
          draggingRef.current = false;
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
        onPointerCancel={() => {
          draggingRef.current = false;
        }}
      >
        <img
          src={project.afterImage}
          alt={project.afterAlt}
          width={1440}
          height={1080}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          aria-hidden="true"
        >
          <img
            src={project.beforeImage}
            alt={project.beforeAlt}
            width={1440}
            height={1080}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>


        <span className="pointer-events-none absolute left-3 top-3 bg-ink/85 px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-ink-foreground">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 bg-accent px-2.5 py-1 font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          After
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 w-px bg-accent"
          style={{ left: `${position}%` }}
          aria-hidden="true"
        >
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lift">
            <MoveHorizontal className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl">{project.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
        <label className="mt-5 block">
          <span className="font-display text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Drag to compare
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={Math.round(position)}
            aria-label={`Before and after comparison for ${project.title}`}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="mt-2 w-full accent-accent"
          />
        </label>
      </div>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <section id="projects" className="section-pad bg-secondary">
      <div className="shell">
        <div className="max-w-2xl">
          <p className="eyebrow">Before &amp; After</p>
          <h2 className="display-lg mt-5">See the difference the work makes.</h2>
          <p className="mt-5 text-muted-foreground">
            Drag the handle on each project to reveal the finished result.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {beforeAfterProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90} className="border border-border">
              <CompareSlider project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
