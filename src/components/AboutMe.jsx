import { Code, PaintBucket, User } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Web Developer
            </h3>

            <p className="text-muted-foreground">
              With over 2 years of experience in web development, I specialize
              in creating responsive, accesible, and performant web application
              using modern technologies.
            </p>

            <p className="text-muted-foreground">
              Passionate about solving real-world problem through clean,
              scalable code. Seeking to join a dynamic U.S.-based software team
              to contribute and grow as a developer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Resume_Lysreng_thai.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 ">
            <div className="gradient-border bg-gradient-to-br from-primary/20 via-indigo-500/10 to-purple-500/20 p-6 rouned-lg shadow-xs card-hover hover:shadow-primary/40">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Creating responsive website and web application with modern
                    frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border bg-gradient-to-br from-primary/20 via-indigo-500/10 to-purple-500/20 p-6 rouned-lg shadow-xs card-hover hover:shadow-primary/40  ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Software Engineer </h4>
                  <p className="text-muted-foreground">
                    Creating full-stack applications for users with modern
                    frameworks, scalable backends, and intuitive UI/UX.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border bg-gradient-to-br from-primary/20 via-indigo-500/10 to-purple-500/20 p-6 rouned-lg shadow-xs card-hover hover:shadow-primary/40  ">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <PaintBucket className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design </h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-friendly interfaces with
                    attention to accessibility, responsiveness, and modern
                    design trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
