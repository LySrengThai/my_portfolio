import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/ui/Timeline";
import { work } from "@/data/portfolio";

export const WorkSection = () => {
  return (
    <Section id="work" index="02" label="Work" title="Work experience">
      <Timeline
        items={work.map((job) => ({
          date: job.date,
          title: job.company,
          subtitle: job.position,
          location: job.location,
        }))}
      />
    </Section>
  );
};
