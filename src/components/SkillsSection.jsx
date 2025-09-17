import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Programming Languages
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Java", level: 80, category: "language" },
  { name: "Python", level: 90, category: "language" },
  { name: "C++", level: 75, category: "language" },
  { name: "SQL", level: 75, category: "language" },
  { name: "Dart", level: 65, category: "language" },

  // Backend / Databases
  { name: "Oracle DB", level: 60, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Firebase", level: 60, category: "backend" },

  // Frameworks & Libraries
  { name: "Laravel", level: 80, category: "framework" },
  { name: "React", level: 80, category: "framework" },
  { name: "Flutter", level: 80, category: "framework" },
  { name: "FastAPI", level: 60, category: "framework" },

  // Tools
  { name: "Bootstrap", level: 80, category: "tools" },
  { name: "Tailwind CSS", level: 80, category: "tools" },
  { name: "GitHub", level: 80, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },

  { name: "Khmer", level: 95, category: "spoken" },
  { name: "English", level: 85, category: "spoken" },
];

const categories = ["all", "frontend", "language", "backend", "tools", "spoken"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 realtive bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mmb-12 text-center">
          My <span className="text-primary"> Skills </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12 mt-6">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card rounded-2xl bg-gradient-to-br from-primary/20 via-indigo-500/10 to-purple-500/20 p-6 rouned-lg shadow-xs card-hover hover:shadow-primary/40"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>

              <div className="w-full bg-secondary/40 h-3 rounded-full overflow-hidden relative">
                {/* Fill */}
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-primary to-purple-500 transition-all duration-1000 ease-out"
                  style={{ width: skill.level + "%" }}
                ></div>

                {/* Percentage text */}
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
