import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Copy, Download, Github, Linkedin, Mail, X } from "lucide-react";
import { motion } from "framer-motion";
import "./styles.css";

const githubUser = "mohamedabusubiyan";
const resumeHref = "/MOHAMED%20ABU%20SUBIYAN%20M%20-%20Tech.pdf";

const skills = [
  {
    group: "Backend",
    items: [
      ["PHP", "https://skillicons.dev/icons?i=php"],
      ["Laravel", "https://skillicons.dev/icons?i=laravel"],
      ["REST API", ""],
    ],
  },
  {
    group: "Database",
    items: [
      ["MySQL", "https://skillicons.dev/icons?i=mysql"],
      ["PostgreSQL", "https://skillicons.dev/icons?i=postgres"],
    ],
  },
  {
    group: "Languages",
    items: [
      ["Python", "https://skillicons.dev/icons?i=python"],
      ["Kotlin", "https://skillicons.dev/icons?i=kotlin"],
      ["HTML", "https://skillicons.dev/icons?i=html"],
      ["CSS", "https://skillicons.dev/icons?i=css"],
    ],
  },
  {
    group: "Tools",
    items: [
      ["Git", "https://skillicons.dev/icons?i=git"],
      ["Docker", "https://skillicons.dev/icons?i=docker"],
      ["Postman", "https://skillicons.dev/icons?i=postman"],
      ["GitHub", "https://skillicons.dev/icons?i=github"],
    ],
  },
];

const projects = [
  {
    title: "Insurance Management System",
    copy: "Laravel/PHP system with authentication, policy management, admin dashboard, user modules, and MySQL-backed workflows.",
    tags: ["Laravel", "PHP", "MySQL", "Dashboard"],
    className: "insurance",
  },
  {
    title: "Job Board",
    copy: "Learning project covering job posting, routing, forms, authentication, CRUD operations, and database integration.",
    tags: ["Laravel", "CRUD", "Auth", "MySQL"],
    className: "jobs",
  },
  {
    title: "Task Management",
    copy: "Laravel task tracking application built around routing, form handling, CRUD flows, and MySQL persistence.",
    tags: ["Laravel", "Tasks", "MySQL", "Panel"],
    className: "tasks",
  },
  {
    title: "Event Management",
    copy: "Event scheduling project focused on backend practice, form handling, routing, and database-driven records.",
    tags: ["Laravel", "Events", "Forms", "SQL"],
    className: "events",
  },
  {
    title: "Title Generator with Machine Learning",
    copy: "Python mini project using TensorFlow, NumPy, Pandas, and Scikit-learn for model building and data processing.",
    tags: ["Python", "TensorFlow", "Pandas", "NumPy"],
    className: "ml",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const onMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const copyEmail = async () => {
    await navigator.clipboard.writeText("mohamedabusubiyanm@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <main>
      <div className="cursor-glow" />
      <div className="star-field" aria-hidden="true" />
      <motion.div
        className="intro"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1.7, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      >
        <motion.span initial={{ y: 42, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.65 }}>
          Mohamed Abu Subiyan M
        </motion.span>
      </motion.div>

      <header className="site-header">
        <button className="icon-button menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </header>

      <a className="vertical-email" href="mailto:mohamedabusubiyanm@gmail.com">mohamedabusubiyanm@gmail.com</a>

      {menuOpen && (
        <>
          <motion.div
            className="menu-scrim"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            onClick={() => setMenuOpen(false)}
          />
          <motion.aside
            className="menu-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          >
            <button className="panel-close" type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <X size={42} />
            </button>
            <div className="panel-grid">
              <div>
                <p>SOCIAL</p>
                <a href="https://github.com/mohamedabusubiyan" target="_blank" rel="noreferrer">Github</a>
                <a href="https://www.linkedin.com/in/mohamed-abu-subiyan-m-260509288" target="_blank" rel="noreferrer">Linkedin</a>
              </div>
              <div>
                <p>MENU</p>
                {["Home", "About Me", "Experience", "Projects"].map((item, index) => (
                  <a key={item} href={item === "Home" ? "#home" : item === "About Me" ? "#about" : item === "Projects" ? "#work" : "#experience"} onClick={() => setMenuOpen(false)}>
                    <span className={`dot dot-${index}`} /> {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="panel-contact">
              <p>GET IN TOUCH</p>
              <a href="mailto:mohamedabusubiyanm@gmail.com">mohamedabusubiyanm@gmail.com</a>
            </div>
          </motion.aside>
        </>
      )}

      <section id="home" className="hero section-shell">
        <div className="hero-grid">
          <motion.div className="hero-copy" initial={{ opacity: 0, y: 44 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.05, duration: 0.8 }}>
            <h1>
              <motion.span initial={{ y: 150 }} animate={{ y: 0 }} transition={{ delay: 2.15, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}>Backend</motion.span>
              <motion.span initial={{ y: 150 }} animate={{ y: 0 }} transition={{ delay: 2.28, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}>Developer</motion.span>
            </h1>
            <p className="hero-text">
              Hi! I'm Abu. A backend-focused Software Developer building Laravel, PHP,
              MySQL, REST API, and dashboard systems for practical business workflows.
            </p>
            <div className="hero-actions reference-actions">
              <a className="button primary" href="#contact">Let's Talk <ArrowUpRight size={17} /></a>
              <a className="button secondary" href={resumeHref} download><Download size={17} /> Resume</a>
              <div className="availability"><span /> Available for full-time opportunities</div>
            </div>
          </motion.div>
        </div>

        <motion.div className="hero-stats" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.55, duration: 0.7 }}>
          <article><strong>1.6k+</strong><span>Total Contributions</span></article>
          <article><strong>5</strong><span>Current Streak</span></article>
          <article><strong>16</strong><span>Longest Streak</span></article>
        </motion.div>
      </section>

      <section id="about" className="section-shell about-section">
        <p className="section-label">About</p>
        <motion.h2 className="about-lead" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          I believe in clean backend systems, practical dashboards, and reliable API workflows.
        </motion.h2>
        <div className="about-divider">This is me.</div>
        <motion.div className="about-grid" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h3>Hi, I'm Abu.</h3>
          <div>
            <p>
              I'm a software developer focused on turning business workflows into
              practical Laravel, PHP, MySQL, and REST API solutions.
            </p>
            <p>
              My work includes internal dashboards, panel management systems,
              authentication, CRUD features, database operations, API routes,
              Docker-based development, and Git workflows.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="stack" className="section-shell">
        <div className="stack-title">
          <span>*</span>
          <p>My Stack</p>
        </div>
        <div className="stack-list">
          {skills.map(({ group, items }) => (
            <motion.article key={group} className="stack-row" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3>{group}</h3>
              <div className="skill-icons">
                {items.map(([item, icon]) => (
                  <span key={item}>
                    {icon ? <img src={icon} alt="" /> : <i aria-hidden="true">API</i>}
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-shell split-section">
        <p className="section-label">Experience</p>
        <div className="timeline">
          <Experience date="Sep 2025 - Present" title="Software Developer" company="DropTruck, WeHaul Logistics Pvt Ltd, Chennai" points={[
            "Working on backend and frontend development for internal dashboard and panel management systems.",
            "Developing Laravel-based web applications with MySQL database integration.",
            "Implementing REST APIs, API routes, authentication, CRUD operations, and workflow-based features.",
            "Using Git, GitHub, Postman, and Docker in development and testing workflows.",
          ]} />
          <Experience date="Feb 2023" title="Web Development Intern" company="Brassy Academy, Tirunelveli" points={[
            "Worked with HTML, CSS, and Angular for responsive web application development.",
            "Improved frontend debugging, component-based development, and UI implementation skills.",
          ]} />
        </div>
      </section>

      <section id="work" className="section-shell">
        <div className="stack-title project-title">
          <span>*</span>
          <p>Selected Projects</p>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.title} initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ x: 8 }}>
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="github" className="section-shell">
        <div className="stack-title project-title">
          <span>*</span>
          <p>Live GitHub Activity</p>
        </div>
        <div className="github-grid">
          <img alt="GitHub stats" src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${githubUser}&show_icons=true&theme=dark&hide_border=true&title_color=C8FF4D&text_color=dddddd&icon_color=C8FF4D`} />
          <img alt="Top languages" src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=dark&hide_border=true&title_color=C8FF4D&text_color=dddddd`} />
          <img className="wide" alt="Contribution graph" src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUser}&theme=github-dark&hide_border=true&color=C8FF4D&line=C8FF4D&point=ffffff&area=true&area_color=C8FF4D`} />
        </div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <p className="section-label">Contact</p>
        <motion.div className="contact-card" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Let&apos;s build practical backend systems.</h2>
          <p>Open to software developer roles focused on Laravel, PHP, REST APIs, MySQL, dashboards, and full-stack web development.</p>
          <div className="contact-actions">
            <a className="button primary" href="mailto:mohamedabusubiyanm@gmail.com"><Mail size={17} /> Email Me</a>
            <button className="button secondary" type="button" onClick={copyEmail}><Copy size={17} /> {copied ? "Copied" : "Copy Email"}</button>
            <a className="button secondary" href="https://github.com/mohamedabusubiyan" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
            <a className="button secondary" href="https://www.linkedin.com/in/mohamed-abu-subiyan-m-260509288" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
          </div>
        </motion.div>
      </section>

      <footer>
        <span>Mohamed Abu Subiyan M</span>
        <span>Tirunelveli, Tamil Nadu</span>
      </footer>
    </main>
  );
}

function Heading({ label, title }: { label: string; title: string }) {
  return (
    <motion.div className="section-heading" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <p className="section-label">{label}</p>
      <h2>{title}</h2>
    </motion.div>
  );
}

function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section id={id} className="section-shell split-section">
      <p className="section-label">{label}</p>
      <motion.div className="section-content" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        {children}
      </motion.div>
    </section>
  );
}

function Experience({ date, title, company, points }: { date: string; title: string; company: string; points: string[] }) {
  return (
    <motion.article initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <span className="date">{date}</span>
      <h2>{title}</h2>
      <p className="company">{company}</p>
      <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
    </motion.article>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
