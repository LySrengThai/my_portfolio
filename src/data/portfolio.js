export const profile = {
  name: "Lysreng Thai",
  nickname: "Lee",
  role: "Full Stack Developer",
  tagline:
    "Computer Science graduate with hands-on experience building full-stack applications and a strong foundation in modern web and mobile technologies.",
  email: "thailysreng33@gmail.com",
  phone: "+1 (781)-500-0619",
  phoneHref: "tel:+17815000619",
  location: "San Angelo, TX, USA",
  resume: "/Resume_Lysreng_thai.pdf",
  github: "https://github.com/LySrengThai",
  linkedin: "https://www.linkedin.com/in/lysreng-thai-49b401339",
  // Shown as a status pill in the hero. Set to "" to hide it.
  currently: "Building full-stack web apps at Intellivega",
  // Drop an image into /public and set e.g. "/profile.jpg" to replace the initials placeholder.
  photo: "/LysrengPF.jpeg",
};

export const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const about = {
  heading: "Passionate Full Stack Web Developer",
  paragraphs: [
    "With over 2 years of experience in web development, I specialize in creating responsive, accessible, and performant web applications using modern technologies.",
    "Passionate about solving real-world problems through clean, scalable code. Seeking to join a dynamic U.S.-based software team to contribute and grow as a developer.",
  ],
  focus: [
    {
      title: "Web Development",
      text: "Responsive websites and web applications with modern frameworks.",
    },
    {
      title: "Software Engineering",
      text: "Full-stack applications with scalable backends and intuitive UI/UX.",
    },
    {
      title: "UI/UX Design",
      text: "User-friendly interfaces with attention to accessibility and responsiveness.",
    },
  ],
};

export const work = [
  {
    company: "Intellivega LLC",
    position: "Full Stack Web Developer",
    location: "San Angelo, Texas",
    date: "October 2025 - Present",
  },
];

export const education = [
  {
    name: "Angelo State University",
    degree: "Bachelor of Science in Computer Science",
    location: "San Angelo, Texas",
    date: "August 2023 - May 2025",
  },
  {
    name: "Paragon International University",
    degree: "Bachelor of Science in Computer Science (Transferred)",
    location: "Phnom Penh, Cambodia",
    date: "November 2021 - July 2023",
  },
];

export const skillCategories = [
  { id: "frontend", label: "Frontend", items: ["HTML/CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"] },
  { id: "backend", label: "Backend & Databases", items: ["Laravel", "FastAPI", "ASP.NET", "MySQL", "PostgreSQL", "MongoDB", "Oracle DB", "Firebase"] },
  { id: "language", label: "Languages", items: ["Python", "Java", "C++", "SQL", "Dart"] },
  { id: "mobile", label: "Mobile", items: ["Flutter"] },
  { id: "tools", label: "Tools", items: ["GitHub", "VS Code"] },
  { id: "spoken", label: "Spoken", items: ["Khmer", "English"] },
];

export const projects = [
  {
    title: "HandyHero",
    description:
      "A web-based app for booking maintenance services. Users can book appointments while companies manage services and schedules.",
    tags: ["HTML", "CSS", "JavaScript", "Laravel", "Bootstrap", "MySQL"],
    demoURL: null,
    githubUrl: "https://github.com/LySrengThai/handyhero_project",
  },
  {
    title: "Think Board",
    description:
      "A full-stack MERN app to create, update, and delete notes with a title and description.",
    tags: ["React", "Express", "MongoDB", "NodeJS", "JavaScript"],
    demoURL: null,
    githubUrl: "https://github.com/LySrengThai/Thinkboard_MERN",
  },
  {
    title: "MeetMe",
    img: "/meetme.png",
    description:
      "A cross-platform mobile app built with Flutter, backed by a FastAPI service on AWS EC2 with MongoDB and Firebase.",
    tags: ["Flutter", "Python", "MongoDB", "Firebase", "AWS EC2", "FastAPI"],
    demoURL: "https://meetme-cf7ff.web.app/",
    githubUrl: "https://github.com/LySrengThai/MeetMe",
  },
];
