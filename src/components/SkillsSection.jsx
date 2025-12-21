import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "Java", level: 80, category: "language" },
  { name: "Python", level: 90, category: "language" },
  { name: "C++", level: 75, category: "language" },
  { name: "SQL", level: 75, category: "language" },
  { name: "Dart", level: 65, category: "language" },

  { name: "Oracle DB", level: 60, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "Firebase", level: 60, category: "backend" },
  { name: "PostgreSQL", level: 70, category: "backend" },

  { name: "Laravel", level: 80, category: "framework" },
  { name: "React", level: 80, category: "framework" },
  { name: "Flutter", level: 80, category: "framework" },
  { name: "FastAPI", level: 60, category: "framework" },
  { name: "ASP.NET", level: 80, category: "framework" },

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
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-purple-500 text-white"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="relative rounded-xl p-[1px] bg-gradient-to-br from-primary/40 via-indigo-500/30 to-purple-500/40 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.35)]"
            >
              <div className="rounded-xl bg-background/70 backdrop-blur-md p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 rounded-full bg-secondary/40 overflow-hidden">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-primary via-indigo-500 to-purple-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] transition-all duration-1000 ease-out"
                    style={{
                      width: visible ? `${skill.level}%` : "0%",
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
