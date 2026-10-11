import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Copy, Download, Github, Linkedin, Mail, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./styles.css";

const githubUser = "mohamedabusubiyan";
const resumeHref = `${import.meta.env.BASE_URL}MOHAMED%20ABU%20SUBIYAN%20M%20-%20SOFTWARE%20DEVELEPOR.pdf`;
const contributionsApi = `https://github-contributions-api.jogruber.de/v4/${githubUser}?y=last`;
const heroWords = ["Software", "Developer"];
const introPanels = Array.from({ length: 24 }, (_, index) => index);

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionApiResponse = {
  total?: {
    lastYear?: number;
    [year: string]: number | undefined;
  };
  contributions?: ContributionDay[];
};

const skills = [
  {
    group: "Backend",
    items: [
      ["PHP", "https://skillicons.dev/icons?i=php"],
      ["Laravel", "https://skillicons.dev/icons?i=laravel"],
      ["Blade", "https://skillicons.dev/icons?i=laravel"],
      ["REST API", "", "API"],
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
      ["SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg", "SQL"],
      ["HTML", "https://skillicons.dev/icons?i=html"],
      ["CSS", "https://skillicons.dev/icons?i=css"],
      ["XML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg", "XML"],
    ],
  },
  {
    group: "Automation",
    items: [
      ["n8n", "https://cdn.simpleicons.org/n8n/00F050", "n8n"],
      ["Workflow Automation", "https://cdn.simpleicons.org/automattic/00F050", "AUTO"],
      ["API Integration", "https://cdn.simpleicons.org/swagger/00F050", "API"],
    ],
  },
  {
    group: "Cloud & Server",
    items: [
      ["DigitalOcean", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original.svg"],
      ["AWS S3", "https://skillicons.dev/icons?i=aws"],
      ["Linux", "https://skillicons.dev/icons?i=linux"],
      ["Nginx", "https://skillicons.dev/icons?i=nginx"],
      ["SSH", "", "SSH"],
      ["Server Admin", "", "SRV"],
    ],
  },
  {
    group: "Tools",
    items: [
      ["VS Code", "https://skillicons.dev/icons?i=vscode"],
      ["PhpStorm", "https://skillicons.dev/icons?i=phpstorm"],
      ["Android Studio", "https://skillicons.dev/icons?i=androidstudio"],
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
    copy: "Final-year Laravel/PHP application with authentication, policy management, user modules, admin workflows, and MySQL-backed operations.",
    tags: ["Laravel", "PHP", "MySQL", "Admin"],
    className: "insurance",
  },
  {
    title: "Job Board",
    copy: "Laravel learning project covering job posting, routing, forms, authentication, CRUD operations, and MySQL integration.",
    tags: ["Laravel", "CRUD", "Auth", "MySQL"],
    className: "jobs",
  },
  {
    title: "Task Management",
    copy: "Laravel task tracking application built around routing, form handling, CRUD workflows, and MySQL persistence.",
    tags: ["Laravel", "Tasks", "MySQL", "Panel"],
    className: "tasks",
  },
  {
    title: "Event Management",
    copy: "Laravel event scheduling application focused on form handling, routing, backend logic, and database-driven records.",
    tags: ["Laravel", "Events", "Forms", "SQL"],
    className: "events",
  },
  {
    title: "Title Generator with Machine Learning",
    copy: "Python project using TensorFlow, NumPy, Pandas, and Scikit-learn for model building and data processing.",
    tags: ["Python", "TensorFlow", "Pandas", "NumPy"],
    className: "ml",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const { days, total } = useGithubContributions();
  const contributionStats = React.useMemo(() => getContributionStats(days, total), [days, total]);
  const shouldReduceMotion = useReducedMotion();

  const revealUp = {
    hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  const listReveal = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

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
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, pointerEvents: "none" }}
        transition={{ delay: shouldReduceMotion ? 0.2 : 1.75, duration: shouldReduceMotion ? 0.2 : 0.25 }}
      >
        <motion.span
          initial={{ y: 42, opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          animate={{ y: 0, opacity: 1, clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          Abu Subiyan
        </motion.span>
        <div className="intro-grid" aria-hidden="true">
          {introPanels.map((panel) => (
            <motion.i
              key={panel}
              initial={{ x: 0, y: 0 }}
              animate={shouldReduceMotion ? { opacity: 0 } : panel % 4 === 0 ? { y: "-102%" } : panel % 4 === 1 ? { x: "102%" } : panel % 4 === 2 ? { y: "102%" } : { x: "-102%" }}
              transition={{
                delay: shouldReduceMotion ? 0 : 0.82 + (panel % 8) * 0.045,
                duration: shouldReduceMotion ? 0.2 : 1.05,
                ease: [0.16, 1, 0.3, 1],
              }}
            />
          ))}
        </div>
      </motion.div>

      <motion.header className="site-header" initial={shouldReduceMotion ? false : { opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
        <button className="icon-button menu-button" data-open={menuOpen} type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </motion.header>

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
                {["Home", "About Me", "Experience", "Education", "Certifications", "Projects"].map((item, index) => (
                  <a key={item} href={item === "Home" ? "#home" : item === "About Me" ? "#about" : item === "Projects" ? "#work" : item === "Education" ? "#education" : item === "Certifications" ? "#certifications" : "#experience"} onClick={() => setMenuOpen(false)}>
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
          <motion.div className="hero-copy" initial="hidden" animate="show" variants={listReveal}>
            <h1>
              {heroWords.map((word) => (
                <span key={word}>
                  {word.split("").map((letter, index) => (
                    <motion.i
                      key={`${word}-${letter}-${index}`}
                      variants={{
                        hidden: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
                      }}
                    >
                      {letter}
                    </motion.i>
                  ))}
                </span>
              ))}
            </h1>
            <motion.p className="hero-text" variants={revealUp}>
              Hi! I'm Abu, a software developer focused on building reliable web applications,
              backend systems, REST APIs, automation workflows, and database-driven features.
            </motion.p>
            <motion.div className="hero-actions reference-actions" variants={listReveal}>
              <motion.a className="button primary magnetic" href="#contact" variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}>Let's Talk <ArrowUpRight size={17} /></motion.a>
              <motion.a className="button secondary magnetic" href={resumeHref} download variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}><Download size={17} /> Resume</motion.a>
              <motion.div className="availability" variants={revealUp}><span /> Available for full-time opportunities</motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div className="hero-stats" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.55, duration: 0.7 }}>
          <article><strong>{contributionStats.totalLabel}</strong><span>Total Contributions</span></article>
          <article><strong>{contributionStats.currentStreak}</strong><span>Current Streak</span></article>
          <article><strong>{contributionStats.longestStreak}</strong><span>Longest Streak</span></article>
        </motion.div>
      </section>

      <section id="about" className="section-shell about-section">
        <p className="section-label">About</p>
        <motion.h2 className="about-lead" variants={revealUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
          I believe in building clean, reliable web applications with practical features, solid backend logic, and well-structured API workflows.
        </motion.h2>
        <div className="about-divider">This is me.</div>
        <motion.div className="about-grid" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.h3 variants={revealUp}>Hi, I'm Abu.</motion.h3>
          <motion.div variants={revealUp}>
            <p>
              I'm a software developer focused on building reliable web applications,
              clean backend logic, automation workflows, and practical features that are easy to maintain.
            </p>
            <p>
              I work across application development, authentication, CRUD flows,
              database operations, API integration, production debugging, Linux server support,
              and collaborative Git-based development.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section id="stack" className="section-shell">
        <div className="stack-title">
          <span>*</span>
          <p>My Stack</p>
        </div>
        <motion.div className="stack-list" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {skills.map(({ group, items }) => (
            <motion.article key={group} className="stack-row" variants={revealUp}>
              <h3>{group}</h3>
              <div className="skill-icons">
                {items.map(([item, icon, fallback]) => (
                  <span key={item}>
                    {icon ? <img src={icon} alt="" /> : <i aria-hidden="true">{fallback}</i>}
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="experience" className="section-shell split-section">
        <p className="section-label">Experience</p>
        <motion.div className="timeline" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Experience date="Dec 2025 - Current" title="Associate Software Developer" company="DropTruck - WeHaul Logistics Pvt Ltd, Chennai" points={[
            "Developing and maintaining Laravel/PHP application modules for internal business workflows.",
            "Working with MySQL, REST APIs, PHP scripts, database operations, and business logic implementation.",
            "Building n8n automation workflows and API integrations to support operational processes.",
            "Contributed to banking payment APIs, payment workflows, and transaction processing.",
            "Worked on AI voice call modules for customer support and AWS S3 file storage.",
            "Managing Linux servers through SSH for deployment, website and database maintenance, log monitoring, permissions, and troubleshooting.",
          ]} />
          <Experience date="Sep 2025 - Nov 2025" title="Software Developer Intern" company="DropTruck - WeHaul Logistics Pvt Ltd, Chennai" points={[
            "Worked on PHP and Laravel-based application modules and projects.",
            "Implemented CRUD operations, authentication, routing, and MySQL database integration.",
            "Gained hands-on experience with REST APIs, backend workflows, debugging, and Git.",
          ]} />
          <Experience date="Feb 2023" title="Web Development Intern" company="Brassy Academy, Tirunelveli" points={[
            "Worked with HTML, CSS, and Angular for responsive web application development.",
            "Improved frontend debugging, component-based development, and UI implementation skills.",
          ]} />
        </motion.div>
      </section>

      <section id="education" className="section-shell split-section">
        <p className="section-label">Education</p>
        <motion.div className="timeline" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <Experience date="2021 - 2025" title="B.E. Computer Science" company="PET Engineering College, Tirunelveli" points={[
            "CGPA: 8/10",
          ]} />
          <Experience date="2021" title="HSSLC Board Exam" company="Government Higher Secondary School, Tirunelveli" points={[
            "Score: 88%",
          ]} />
        </motion.div>
      </section>

      <section id="certifications" className="section-shell">
        <div className="stack-title cert-title">
          <span>*</span>
          <p>Certifications</p>
        </div>
        <motion.div className="cert-list" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.article className="cert-card" variants={revealUp}>
            <span>Udemy / Sep 2025</span>
            <h3>Laravel & PHP Mastery</h3>
            <p>Build 5 Real-World Projects</p>
          </motion.article>
          <motion.article className="cert-card" variants={revealUp}>
            <span>University of Michigan - Coursera / Sep 2026</span>
            <h3>Python for Everybody Specialization</h3>
            <p>Python programming fundamentals, data handling, and practical problem solving.</p>
          </motion.article>
        </motion.div>
      </section>

      <section id="work" className="section-shell">
        <div className="stack-title project-title">
          <span>*</span>
          <p>Selected Projects</p>
        </div>
        <motion.div className="project-list" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }}>
          {projects.map((project, index) => (
            <motion.article className="project-card" key={project.title} variants={revealUp} whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.02 }}>
              <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>{project.title}</h3>
                <p>{project.copy}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <p className="section-label">Contact</p>
        <motion.div className="contact-card" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.h2 variants={revealUp}>Let&apos;s build reliable web applications.</motion.h2>
          <motion.p variants={revealUp}>Open to software developer roles focused on backend engineering, REST APIs, automation, databases, server support, and full-stack web development.</motion.p>
          <motion.div className="contact-actions" variants={listReveal}>
            <motion.a variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }} className="button primary magnetic" href="mailto:mohamedabusubiyanm@gmail.com"><Mail size={17} /> Email Me</motion.a>
            <motion.button variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }} className="button secondary magnetic" type="button" onClick={copyEmail}><Copy size={17} /> {copied ? "Copied" : "Copy Email"}</motion.button>
            <motion.a variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }} className="button secondary magnetic" href="https://github.com/mohamedabusubiyan" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</motion.a>
            <motion.a variants={revealUp} whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }} className="button secondary magnetic" href="https://www.linkedin.com/in/mohamed-abu-subiyan-m-260509288" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</motion.a>
          </motion.div>
        </motion.div>
      </section>

      <footer>
        <span>Mohamed Abu Subiyan M</span>
        <span>Chennai, Tamil Nadu</span>
      </footer>
    </main>
  );
}

function useGithubContributions() {
  const [days, setDays] = React.useState<ContributionDay[]>([]);
  const [total, setTotal] = React.useState<number | null>(null);

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(contributionsApi, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load GitHub contributions.");
        return response.json() as Promise<ContributionApiResponse>;
      })
      .then((data) => {
        const contributions = data.contributions ?? [];
        setDays(contributions);
        setTotal(data.total?.lastYear ?? contributions.reduce((sum, day) => sum + day.count, 0));
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") {
          setDays([]);
          setTotal(null);
        }
      });

    return () => controller.abort();
  }, []);

  return { days, total };
}

function getContributionStats(days: ContributionDay[], total: number | null) {
  const totalCount = total ?? days.reduce((sum, day) => sum + day.count, 0);
  let currentStreak = 0;
  let longestStreak = 0;
  let runningStreak = 0;

  days.forEach((day) => {
    if (day.count > 0) {
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  });

  for (let index = days.length - 1; index >= 0; index -= 1) {
    if (days[index].count === 0) break;
    currentStreak += 1;
  }

  return {
    totalLabel: totalCount > 999 ? `${(totalCount / 1000).toFixed(1)}k+` : totalCount.toLocaleString(),
    currentStreak,
    longestStreak,
  };
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
