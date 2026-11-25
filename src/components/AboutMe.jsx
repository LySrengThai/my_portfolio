import { Section } from "@/components/ui/Section";
import { about, profile } from "@/data/portfolio";

const initials = profile.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export const AboutMe = () => {
  return (
    <Section id="about" index="01" label="About" title={about.heading} tinted>
      <div className="grid gap-12 md:grid-cols-2">
        <div className="space-y-5 text-muted-foreground">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-3 pt-3">
            <a href="#contact" className="btn-primary">
              Get in touch
            </a>
          </div>
        </div>

        <div className="space-y-8">
        <div className="card aspect-square w-full max-w-64 overflow-hidden">
          {profile.photo ? (
            <img
              src={profile.photo}
              alt={profile.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-[50%_15%]"
            />
          ) : (
            <div
              aria-hidden="true"
              className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/25 via-glow-3 to-glow-2"
            >
              <span className="font-mono text-6xl font-medium tracking-tight text-foreground/70">
                {initials}
              </span>
            </div>
          )}
        </div>

        <dl className="divide-y divide-border border-y border-border">
          {about.focus.map((item) => (
            <div key={item.title} className="py-5">
              <dt className="font-medium">{item.title}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">
                {item.text}
              </dd>
            </div>
          ))}
        </dl>
        </div>
      </div>
    </Section>
  );
};
