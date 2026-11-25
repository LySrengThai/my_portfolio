import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";
import { Reveal } from "@/components/ui/Reveal";
import { skillCategories } from "@/data/portfolio";

export const SkillsSection = () => {
  return (
    <Section id="skills" index="03" label="Skills" title="Tools & technologies" tinted revealBody={false}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 80} className="h-full">
            <div className="card h-full p-6">
              <h3 className="mb-4 text-base">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
