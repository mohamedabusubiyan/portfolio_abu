const githubUser = "mohamedabusubiyan";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-slate-100">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070b12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
          <a href="#home" className="text-slate-100">
            Abu
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="mailto:mohamedabusubiyanm@gmail.com" className="text-blue-400">
            Get in touch
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-16 pt-28"
      >
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
          Software Developer
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="max-w-5xl text-6xl font-semibold uppercase leading-[0.9] tracking-tight text-white sm:text-8xl lg:text-[8.8rem]">
              Mohamed Abu
              <span className="block text-blue-400">Subiyan M</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Backend-focused software developer building Laravel, PHP, MySQL,
              REST API, and dashboard systems for practical business workflows.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-100"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-blue-400 hover:text-blue-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="border-l border-white/10 pl-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Current focus
            </p>
            <p className="mt-4 text-2xl font-semibold leading-snug text-white">
              Laravel dashboards, API integration, authentication, CRUD flows,
              and database-driven panels.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            ["1,691", "Total Contributions", "Aug 25, 2025 - Present"],
            ["5", "Current Streak", "Jul 6 - Jul 10"],
            ["16", "Longest Streak", "Feb 27 - Mar 14"],
          ].map(([value, label, detail]) => (
            <article
              key={label}
              className="border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-blue-950/20"
            >
              <p className="text-4xl font-semibold text-blue-400">{value}</p>
              <h2 className="mt-4 text-base font-semibold text-white">{label}</h2>
              <p className="mt-2 text-sm text-cyan-300">{detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Live GitHub
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <img
              alt="GitHub stats"
              className="w-full border border-white/10 bg-white/[0.04] p-4"
              src={`https://github-readme-stats-sigma-five.vercel.app/api?username=${githubUser}&show_icons=true&theme=tokyonight&hide_border=true`}
            />
            <img
              alt="Top languages"
              className="w-full border border-white/10 bg-white/[0.04] p-4"
              src={`https://github-readme-stats-sigma-five.vercel.app/api/top-langs/?username=${githubUser}&layout=compact&theme=tokyonight&hide_border=true`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
