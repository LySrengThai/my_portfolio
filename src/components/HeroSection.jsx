import { ArrowRight, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-14"
    >
      {/* Subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
      />

      <div className="container relative">
        <p className="eyebrow mb-6 animate-fade-in">
          {profile.role} · Open to opportunities
        </p>

        <h1 className="text-gradient animate-fade-in text-5xl leading-[1.1] sm:text-6xl md:text-7xl [animation-delay:100ms]">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-2xl animate-fade-in text-lg text-muted-foreground [animation-delay:200ms]">
          {profile.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3 animate-fade-in [animation-delay:300ms]">
          <a href="#projects" className="btn-primary">
            View work <ArrowRight size={16} />
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {profile.currently && (
          <p className="mt-10 inline-flex animate-fade-in items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-sm text-muted-foreground backdrop-blur [animation-delay:400ms]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Currently · {profile.currently}
          </p>
        )}
      </div>
    </section>
  );
};
