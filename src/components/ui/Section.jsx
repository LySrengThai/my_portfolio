import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";

export const Section = ({
  id,
  index,
  label,
  title,
  tinted = false,
  revealBody = true,
  className,
  children,
}) => (
  <section
    id={id}
    className={cn(
      "section",
      tinted && "border-y border-border bg-band",
      className
    )}
  >
    <div className="container">
      <Reveal>
        <header className="mb-12">
          <p className="eyebrow mb-3">
            <span className="text-primary">{index}</span> / {label}
          </p>
          <h2 className="text-3xl md:text-4xl">{title}</h2>
        </header>
      </Reveal>
      {revealBody ? <Reveal delay={100}>{children}</Reveal> : children}
    </div>
  </section>
);
