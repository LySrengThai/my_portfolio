import { Briefcase } from "lucide-react";
import React from "react";

const work = [
  {
    company: "Intellivega LLC",
    position: "Full Stack Web Developer",
    location: "San Angelo, Texas",
    date: "October 2025 - Present",
  },
];

export const WorkSection = () => {
  return (
    <section id="work" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {work.map((job, key) => (
            <div
              key={key}
              className="group rounded-2xl p-6 shadow-lg bg-gradient-to-br 
                from-primary/20 via-indigo-500/10 to-purple-500/20 
                border border-primary/30 hover:shadow-primary/40 
                hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="text-left w-full">
                  {/* Company */}
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {job.company}
                  </h3>

                  {/* Location & Date */}
                  <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-3">
                    <span>{job.location}</span>
                    <span className="italic">{job.date}</span>
                  </div>

                  {/* Position */}
                  <p className="text-base font-medium text-foreground/90">
                    {job.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
