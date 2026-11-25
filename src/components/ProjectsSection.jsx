import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { profile, projects } from "@/data/portfolio";

const iconLink =
  "rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground";

export const ProjectsSection = () => {
  return (
    <Section id="projects" index="04" label="Projects" title="Selected projects" revealBody={false}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 80} className="h-full">
          <article className="card flex h-full flex-col overflow-hidden">
            <div className="grid h-40 place-items-center overflow-hidden border-b border-border bg-surface-2">
              {project.img ? (
                <img
                  src={project.img}
                  alt={`${project.title} preview`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="font-mono text-xs text-subtle">
                  {project.title}
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1 border-t border-border pt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} on GitHub`}
                    className={iconLink}
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demoURL && (
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                    className={iconLink}
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-ghost"
        >
          More on GitHub <ArrowRight size={16} />
        </a>
      </div>
    </Section>
  );
};
