const menuButton = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const copyButton = document.querySelector("[data-copy]");
const glow = document.querySelector(".cursor-glow");
const navLinks = document.querySelectorAll(".desktop-nav a");
const sections = [...document.querySelectorAll("main section[id]")];

menuButton?.addEventListener("click", () => {
  mobileNav?.classList.toggle("open");
});

mobileNav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    mobileNav.classList.remove("open");
  }
});

copyButton?.addEventListener("click", async () => {
  const email = copyButton.getAttribute("data-copy") || "";
  try {
    await navigator.clipboard.writeText(email);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy Email";
    }, 1600);
  } catch {
    window.location.href = `mailto:${email}`;
  }
});

window.addEventListener("pointermove", (event) => {
  glow?.style.setProperty("--x", `${event.clientX}px`);
  glow?.style.setProperty("--y", `${event.clientY}px`);
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((item) => revealObserver.observe(item));

const activeObserver = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (!visible) return;

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${visible.target.id}`
      );
    });
  },
  { threshold: [0.2, 0.45, 0.7] }
);

sections.forEach((section) => activeObserver.observe(section));
