import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center bg-background/40 rounded-2xl p-8 md:p-12 shadow-lg">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
          <span className="block opacity-0 animate-fade-in">
            Hi, I’m
          </span>
          <span className="block mt-2">
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Lysreng “Lee”
            </span>{" "}
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Thai
            </span>
          </span>
        </h1>

        <p className="mt-6 text-base md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Motivated and adaptable Computer Science graduate with hands-on
          experience building full-stack applications and a strong foundation in
          modern web and mobile technologies.
        </p>

        <div className="mt-8 opacity-0 animate-fade-in-delay-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-primary-foreground font-medium hover:scale-105 hover:shadow-lg transition-transform"
          >
            View My Work
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
