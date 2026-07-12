import React from "react";
import ReactDOM from "react-dom/client";
import { ArrowUpRight, Copy, Download, Github, Linkedin, Mail, X } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import "./styles.css";

const githubUser = "mohamedabusubiyan";
const resumeHref = "/MOHAMED%20ABU%20SUBIYAN%20M%20-%20Tech.pdf";
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
    copy: "Laravel/PHP system with authentication, policy management, user modules, and MySQL-backed workflows.",
    tags: ["Laravel", "PHP", "MySQL", "Admin"],
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
  const { days, total, status } = useGithubContributions();
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
        <button className="icon-button menu-button" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
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
              Hi! I'm Abu. A backend-focused Software Developer building Laravel, PHP,
              MySQL, REST API, and web systems for practical business workflows.
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
          I believe in clean backend systems, practical web tools, and reliable API workflows.
        </motion.h2>
        <div className="about-divider">This is me.</div>
        <motion.div className="about-grid" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.h3 variants={revealUp}>Hi, I'm Abu.</motion.h3>
          <motion.div variants={revealUp}>
            <p>
              I'm a software developer focused on building reliable web applications,
              clean backend logic, and practical features that are easy to maintain.
            </p>
            <p>
              I work across application development, authentication, CRUD flows,
              database design, API integration, debugging, deployment preparation,
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
                {items.map(([item, icon]) => (
                  <span key={item}>
                    {icon ? <img src={icon} alt="" /> : <i aria-hidden="true">API</i>}
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
          <Experience date="Sep 2025 - Present" title="Software Developer" company="DropTruck, WeHaul Logistics Pvt Ltd, Chennai" points={[
            "Working on backend and frontend development for internal tools and panel management systems.",
            "Developing Laravel-based web applications with MySQL database integration.",
            "Implementing REST APIs, API routes, authentication, CRUD operations, and workflow-based features.",
            "Using Git, GitHub, Postman, and Docker in development and testing workflows.",
          ]} />
          <Experience date="Feb 2023" title="Web Development Intern" company="Brassy Academy, Tirunelveli" points={[
            "Worked with HTML, CSS, and Angular for responsive web application development.",
            "Improved frontend debugging, component-based development, and UI implementation skills.",
          ]} />
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

      <section id="github" className="section-shell">
        <div className="stack-title project-title">
          <span>*</span>
          <p>Live GitHub Activity</p>
        </div>
        <motion.div className="github-grid" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
          <motion.img variants={revealUp} className="github-card stats-card" alt="GitHub stats" src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${githubUser}&show_icons=true&theme=dark&hide_border=true&hide_title=true&rank_icon=github&title_color=00F050&text_color=dddddd&icon_color=00F050`} />
          <motion.img variants={revealUp} className="github-card languages-card" alt="Top languages" src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=dark&hide_border=true&title_color=00F050&text_color=dddddd`} />
          <ContributionCalendar days={days} total={total} status={status} />
        </motion.div>
      </section>

      <section id="contact" className="section-shell contact-section">
        <p className="section-label">Contact</p>
        <motion.div className="contact-card" variants={listReveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.h2 variants={revealUp}>Let&apos;s build practical backend systems.</motion.h2>
          <motion.p variants={revealUp}>Open to software developer roles focused on backend engineering, APIs, databases, and full-stack web development.</motion.p>
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
        <span>Tirunelveli, Tamil Nadu</span>
      </footer>
    </main>
  );
}

function useGithubContributions() {
  const [days, setDays] = React.useState<ContributionDay[]>([]);
  const [total, setTotal] = React.useState<number | null>(null);
  const [status, setStatus] = React.useState("Loading contributions...");

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
        setStatus("");
      })
      .catch((error: Error) => {
        if (error.name !== "AbortError") setStatus("Contribution calendar is temporarily unavailable.");
      });

    return () => controller.abort();
  }, []);

  return { days, total, status };
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

function ContributionCalendar({ days, total, status }: { days: ContributionDay[]; total: number | null; status: string }) {
  const weeks = React.useMemo(() => {
    const grouped: ContributionDay[][] = [];
    days.forEach((day, index) => {
      const week = Math.floor(index / 7);
      if (!grouped[week]) grouped[week] = [];
      grouped[week].push(day);
    });
    return grouped;
  }, [days]);

  const monthLabels = React.useMemo(() => {
    const labels: { month: string; column: number }[] = [];
    let previousMonth = "";

    days.forEach((day, index) => {
      const date = new Date(`${day.date}T00:00:00`);
      const month = date.toLocaleDateString(undefined, { month: "short" });
      if (month !== previousMonth) {
        labels.push({ month, column: Math.floor(index / 7) + 1 });
        previousMonth = month;
      }
    });

    return labels;
  }, [days]);

  return (
    <article className="contribution-card wide">
      <div className="contribution-heading">
        <h3>{total?.toLocaleString() ?? "--"} contributions in the last year</h3>
        <span>Live GitHub contributions</span>
      </div>
      {status ? (
        <p className="contribution-status">{status}</p>
      ) : (
        <div className="calendar-shell" aria-label="GitHub contribution calendar">
          <div className="calendar-months" aria-hidden="true" style={{ gridTemplateColumns: `repeat(${weeks.length}, 13px)` }}>
            {monthLabels.map(({ month, column }) => (
              <span key={`${month}-${column}`} style={{ gridColumn: column }}>{month}</span>
            ))}
          </div>
          <div className="calendar-body">
            <div className="calendar-days" aria-hidden="true">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>
            <div className="calendar-grid">
              {weeks.map((week, weekIndex) => (
                <div className="calendar-week" key={weekIndex}>
                  {week.map((day) => (
                    <span
                      className="calendar-day"
                      data-level={day.level}
                      key={day.date}
                      title={`${day.count} contribution${day.count === 1 ? "" : "s"} on ${new Date(day.date).toLocaleDateString(undefined, {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="calendar-legend" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => <i data-level={level} key={level} />)}
            <span>More</span>
          </div>
        </div>
      )}
    </article>
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
