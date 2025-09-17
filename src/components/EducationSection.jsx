import { GraduationCap } from "lucide-react";
import React from "react";

const education = [
  {
    name: "Angelo State University",
    degree: "Bachelor of Science in Computer Science",
    location: "San Angelo, Texas",
    date: "August 2023 - May 2025",
  },
  {
    name: "Paragon International University",
    degree: "Bachelor of Science in Computer Science (Transfererd)",
    location: "Phnom Penh, Cambodia",
    date: "November 2021 - July 2023",
  },
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Education<span className="text-primary"> Degrees</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, key) => (
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
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                {/* Content */}
                <div className="text-left w-full">
                  {/* School Name */}
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    {edu.name}
                  </h3>

                  {/* Location & Date inline */}
                  <div className="flex flex-wrap justify-between text-sm text-muted-foreground mb-3">
                    <span>{edu.location}</span>
                    <span className="italic">{edu.date}</span>
                  </div>

                  {/* Degree */}
                  <p className="text-base font-medium text-foreground/90">
                    🎓 {edu.degree}
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
