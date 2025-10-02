import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "HandyHero",
    description:
      "HandyHero is a web-based app for booking maintenance services. Users can book appointments while companies manage services and schedules.",
    tags: ["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap", "MySQL"],
    demoURL: "#",
    githubUrl: "https://github.com/LySrengThai/handyhero_project",
  },
  {
    id: 2,
    title: "Think Board",
    description:
      "Think Board is a Full-Stack App Built with the MERN Stack with the function to Create, Update, and Delete Notes with Title & Description.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Express",
      "MongoDB",
      "NodeJS",
    ],
    demoURL: "#",
    githubUrl: "https://github.com/LySrengThai/Thinkboard_MERN",
  },
  {
    id: 3,
    img: "/meetme.png",
    title: "MeetMe",
    description:
      "HandyHero is a web-based app for booking maintenance services. Users can book appointments while companies manage services and schedules.",
    tags: ["Flutter", "Python", "MongoDB", "Firebase", "AWS EC2", "Fast API"],
    demoURL: "https://meetme-cf7ff.web.app/",
    githubUrl: "https://github.com/LySrengThai/MeetMe",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project are carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group rounded-2xl p-6 shadow-lg bg-gradient-to-br 
                 from-primary/20 via-indigo-500/10 to-purple-500/20 
                 border border-primary/30 hover:shadow-primary/40 
                 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-tr from-primary/30 via-purple-500/20 to-pink-500/30 flex items-center justify-center overflow-hidden rounded-t-xl">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-foreground/60 text-sm">
                    Project Preview
                  </span>
                )}
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium rounded-full 
                     bg-primary/10 text-secondary border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-4">
                    {project.demoURL && (
                      <a
                        href={project.demoURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" size={20} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-5 h-5" size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/LySrengThai"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
