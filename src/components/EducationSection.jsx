import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { education } from "@/data/portfolio";

export const EducationSection = () => {
  return (
    <Section id="education" index="05" label="Education" title="Education" tinted>
      <Timeline
        items={education.map((edu) => ({
          date: edu.date,
          title: edu.name,
          subtitle: edu.degree,
          location: edu.location,
        }))}
      />
    </Section>
  );
};
