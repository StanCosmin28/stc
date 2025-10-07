import { useEffect, useRef, useState } from "react";
import BubbleMenu from "./components/BubbleMenu";

import data from "./data/data";
import LinksHub from "./components/LinksHub";

export default function App() {
  const { learn, failure, habits, success } = { ...data.principles };
  const { placeholder } = { ...data };
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const items = [
    {
      label: "home",
      href: "#",
      ariaLabel: "Home",
      rotation: -8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: "about",
      href: "#",
      ariaLabel: "About",
      rotation: 8,
      hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    },
    {
      label: "projects",
      href: "#",
      ariaLabel: "Projects",
      rotation: 8,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: "blog",
      href: "#",
      ariaLabel: "Blog",
      rotation: 8,
      hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    },
    {
      label: "contact",
      href: "#",
      ariaLabel: "Contact",
      rotation: -8,
      hoverStyles: { bgColor: "#8b5cf6", textColor: "#ffffff" },
    },
  ];
  return (
    <>
      {/* <LinksHub /> */}
      <BubbleMenu
        // logo={<span style={{ fontWeight: 700 }}>stanc.dev</span>}
        logo={
          <span
            style={{ fontWeight: 600 }}
            className="flex flex-row justify-center items-center gap-4"
          >
            <img className="max-w-[30px]" src="/stanc_logo.png"></img>
            stanc.dev
          </span>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg="#ffffff"
        menuContentColor="#111111"
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <div className="min-h-screen bg-background text-foreground relative">
        <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
          <div className="flex flex-col gap-4">
            {[
              "intro",
              "work",
              "principles",
              "softskills",
              "thoughts",
              "someprojects",
              "connect",
            ].map((section) => (
              <button
                key={section}
                onClick={() =>
                  document
                    .getElementById(section)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`w-2 h-8 rounded-full transition-all duration-500 ${
                  activeSection === section
                    ? "bg-foreground"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                }`}
                aria-label={`Navigate to ${section}`}
              />
            ))}
          </div>
        </nav>

        <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <header
            id="intro"
            ref={(el) => (sectionsRef.current[0] = el)}
            className="min-h-screen flex items-center opacity-0"
          >
            <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full">
              <div className="lg:col-span-3 space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-2">
                  <div className="text-sm text-muted-foreground font-mono tracking-wider">
                    <p>&copy; stanc.dev / 2025</p>
                    {/* <p>doing side quests</p> */}
                  </div>
                  <div className="flex flex-row gap-8 items-center">
                    <div className="flex flerx-1/2">
                      <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                        Stan
                        <br />
                        <span className="text-muted-foreground">Cosmin</span>
                      </h1>
                    </div>
                    <div className="flex flerx-1/2">
                      {/* <img
                      className="h-24 w-auto"
                      src="https://media.licdn.com/dms/image/v2/D4D03AQHz2xXfllHtrQ/profile-displayphoto-shrink_400_400/B4DZW4SKDQG8Ag-/0/1742553522855?e=1759968000&v=beta&t=HJCmb150_LsaMxVMwCTzA6m0vLo51oFhQJPmgaXILT0"
                      alt=""
                    /> */}
                    </div>
                  </div>
                </div>

                <div className="space-y-6 max-w-md">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Full-Stack Engineer passionate about tech, business, and
                    sport. I combine creativity, discipline, and problem-solving
                    to build digital products that make an impact.
                    {/* <span className="text-foreground"> design</span>, */}
                    {/* <span className="text-foreground"> technology</span>, and */}
                    {/* <span className="text-foreground"> user experience</span>. */}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Available for work Worldwide
                    </div>
                    <div>Europe, Romania 🇷🇴</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">
                    CURRENTLY
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground">
                      FullStack Software Engineer
                    </div>
                    <div className="text-muted-foreground">@Bransha</div>
                    <div className="text-xs text-muted-foreground">
                      2025 — Present
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground">
                      MS Student – Software Engineering
                    </div>
                    <div className="text-muted-foreground">@FII</div>
                    <div className="text-xs text-muted-foreground">
                      2025 — 2027
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-foreground">
                      Freelance FullStack Engineer
                    </div>
                    <div className="text-muted-foreground">@Stanc.dev</div>
                    <div className="text-xs text-muted-foreground">
                      2023 — Present
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground font-mono">
                    FOCUS
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "FullStack",
                      "FrontEnd",
                      "BackEnd",
                      "Cloud",
                      "Branding",
                      "Business",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section
            id="work"
            ref={(el) => (sectionsRef.current[1] = el)}
            className="min-h-screen py-20 sm:py-32 opacity-0"
          >
            <div className="space-y-12 sm:space-y-16">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="text-3xl sm:text-3xl font-light opacity-50 italic">
                  {/* Selected Work */}
                  Jack of all Trades, Master of Some
                </h2>
                <div className="text-sm text-muted-foreground font-mono">
                  2019 — 2025
                </div>
              </div>

              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    year: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        {/* Developer: chevrons <> */}
                        <path
                          d="M9 16l-4-4 4-4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 8l4 4-4 4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    role: "The Developer",
                    description:
                      "Full-Stack Engineer blending frontend precision and backend logic. From React to AWS, I turn complex ideas into maintainable systems.",
                    tech: [
                      "React",
                      "Node.js",
                      "AWS",
                      "TypeScript",
                      "Angular",
                      "MERN",
                    ],
                  },
                  {
                    year: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="-2.4 -2.4 28.80 28.80"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M20.288 9.463a4.856 4.856 0 0 0-4.336-2.3 4.586 4.586 0 0 0-3.343 1.767c.071.116.148.226.212.347l.879 1.652.134-.254a2.71 2.71 0 0 1 2.206-1.519 2.845 2.845 0 1 1 0 5.686 2.708 2.708 0 0 1-2.205-1.518L13.131 12l-1.193-2.26a4.709 4.709 0 0 0-3.89-2.581 4.845 4.845 0 1 0 0 9.682 4.586 4.586 0 0 0 3.343-1.767c-.071-.116-.148-.226-.212-.347l-.879-1.656-.134.254a2.71 2.71 0 0 1-2.206 1.519 2.855 2.855 0 0 1-2.559-1.369 2.825 2.825 0 0 1 0-2.946 2.862 2.862 0 0 1 2.442-1.374h.121a2.708 2.708 0 0 1 2.205 1.518l.7 1.327 1.193 2.26a4.709 4.709 0 0 0 3.89 2.581h.209a4.846 4.846 0 0 0 4.127-7.378z"></path>
                      </svg>
                    ),
                    role: "The Entrepreneur",
                    description:
                      "Entrepreneurial by nature — I’m building digital products that empower professionals and creators, from SaaS platforms to personal brands.",
                    tech: [
                      "SaaS",
                      "Innovation",
                      "Business",
                      "Product Thinking",
                    ],
                  },
                  {
                    year: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M22,3H19V2a1,1,0,0,0-1-1H6A1,1,0,0,0,5,2V3H2A1,1,0,0,0,1,4V6a4.994,4.994,0,0,0,4.276,4.927A7.009,7.009,0,0,0,11,15.92V18H7a1,1,0,0,0-.949.684l-1,3A1,1,0,0,0,6,23H18a1,1,0,0,0,.948-1.316l-1-3A1,1,0,0,0,17,18H13V15.92a7.009,7.009,0,0,0,5.724-4.993A4.994,4.994,0,0,0,23,6V4A1,1,0,0,0,22,3ZM5,8.829A3.006,3.006,0,0,1,3,6V5H5ZM16.279,20l.333,1H7.387l.334-1ZM17,9A5,5,0,0,1,7,9V3H17Zm4-3a3.006,3.006,0,0,1-2,2.829V5h2ZM10.667,8.667,9,7.292,11,7l1-2,1,2,2,.292L13.333,8.667,13.854,11,12,9.667,10.146,11Z"></path>
                      </svg>
                    ),
                    role: "The Athlete",
                    description:
                      "A decade of competitive fencing taught me discipline, focus, and how to adapt under pressure — skills that shaped my engineering mindset.",
                    tech: ["Discipline", "Focus", "Consistency", "Resilience"],
                  },
                  {
                    year: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        {/* Designer: pen nib / diamond */}
                        <polygon
                          points="12,3 21,12 12,21 3,12"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <circle cx="12" cy="12" r="2" strokeWidth="2" />
                      </svg>
                    ),
                    role: "The Designer",
                    description:
                      "My journey started with pixels and color theory. I’ve crafted visual identities and interfaces that make products feel alive.",
                    tech: ["Figma", "UI/UX", "Branding", "Creativity"],
                  },
                ].map((job, index) => (
                  <div
                    key={index}
                    className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                  >
                    <div className="lg:col-span-2">
                      <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {job.year}
                      </div>
                    </div>

                    <div className="lg:col-span-6 space-y-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-medium">
                          {job.role}
                        </h3>
                        <div className="text-muted-foreground">
                          {job.company}
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed max-w-lg">
                        {job.description}
                      </p>
                    </div>

                    <div className="lg:col-span-12 flex flex-wrap lg:justify-end mt-2 lg:mt-0">
                      {job.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="principles"
            ref={(el) => (sectionsRef.current[2] = el)}
            className="min-h-screen py-20 sm:py-32 opacity-0"
          >
            <div className="space-y-12 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl font-light text-center">
                principles I live by
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
                The Core Values That Shaped My Path <br /> From Sport to
                Software, and From Practice to Performance.
              </p>

              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "Learning keeps me evolving.",
                    description:
                      "Every experience — win or mistake — teaches me something new and helps me grow as a developer and as a person.",
                    svg: (
                      <img
                        className={`opacity-50 group-hover:opacity-100 transition-all duration-400 ${
                          !isDark ? "principles-filter opacity-75" : ""
                        }`}
                        src={learn}
                        alt=""
                      />
                    ),
                  },
                  {
                    title: "Failure sharpens my direction.",
                    description:
                      "When things don’t go as planned, I take it as feedback — it helps me refocus and make better decisions next time.",
                    svg: (
                      <img
                        className={`opacity-50 group-hover:opacity-100 transition-all duration-400 ${
                          !isDark ? "principles-filter opacity-75" : ""
                        }`}
                        src={failure}
                        alt=""
                      />
                    ),
                  },
                  {
                    title: "Habits define how I move forward.",
                    description:
                      "I rely on structure and discipline — small, consistent actions every day keep me grounded and moving toward my goals.",
                    svg: (
                      <img
                        className={`opacity-50 group-hover:opacity-100 transition-all duration-400 ${
                          !isDark ? "principles-filter opacity-75" : ""
                        }`}
                        src={habits}
                        alt=""
                      />
                    ),
                  },
                  {
                    title: "Success is something I build, not chase.",
                    description:
                      "For me, success comes from purpose, patience, and the drive to keep improving while staying true to my values.",
                    svg: (
                      <img
                        className={`opacity-50 group-hover:opacity-100 transition-all duration-400 ${
                          !isDark ? "principles-filter opacity-75" : ""
                        }`}
                        src={success}
                        alt=""
                      />
                    ),
                  },
                ].map((principle, index) => (
                  <article
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex justify-center">{principle.svg}</div>
                      <h4 className="mt-8 text-lg sm:text-xl font-medium text-center group-hover:text-muted-foreground transition-colors duration-300">
                        {principle.title}
                      </h4>
                      <p className="text-muted-foreground text-center leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="softskills"
            ref={(el) => (sectionsRef.current[3] = el)}
            className="min-h-screen py-20 sm:py-32"
          >
            <div className="space-y-12 sm:space-y-16">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <h2 className="text-3xl sm:text-3xl font-light opacity-50 italic">
                  Soft Skills
                </h2>
                <div className="text-sm text-muted-foreground font-mono">
                  Growth • Clarity • Consistency • Impact
                </div>
              </div>

              {/* Main Skills */}
              <div className="space-y-8 sm:space-y-12">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    role: "Communication",
                    description:
                      "I use communication as a tool for connection — whether I’m building, teaching, or collaborating, I focus on clarity, authenticity, and empathy.",
                    related: [
                      {
                        title: "Public Speaking",
                        desc: "Confident in sharing ideas clearly in front of teams or audiences.",
                      },
                      {
                        title: "Storytelling",
                        desc: "Turning technical or creative work into relatable, memorable stories.",
                      },
                      {
                        title: "Online Presence",
                        desc: "Building community by creating valuable content around tech and growth.",
                      },
                    ],
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path
                          d="M12 6v6l4 2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    role: "Discipline",
                    description:
                      "My fencing background taught me focus and control. I treat time, habits, and priorities as systems to build progress that lasts.",
                    related: [
                      {
                        title: "Focus",
                        desc: "Staying locked in on what matters — one project, one goal at a time.",
                      },
                      {
                        title: "Time Management",
                        desc: "Balancing full-time work, studies, and side projects efficiently.",
                      },
                      {
                        title: "Consistency",
                        desc: "Showing up daily, even when it’s hard — that’s how I grow.",
                      },
                    ],
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M12 20h9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 4v16M12 4a8 8 0 1 0 0 16"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    role: "Adaptability",
                    description:
                      "I love challenges that push me to learn fast. Each new tool, client, or environment is an opportunity to evolve and experiment.",
                    related: [
                      {
                        title: "Problem Solving",
                        desc: "Breaking down complex challenges into simple, actionable steps.",
                      },
                      {
                        title: "Curiosity",
                        desc: "Exploring beyond my comfort zone — frameworks, people, or ideas.",
                      },
                      {
                        title: "Flexibility",
                        desc: "Thriving under change — I adapt fast without losing direction.",
                      },
                    ],
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-muted-foreground group-hover:text-foreground transition-colors duration-300 lg:mx-auto"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          d="M17 20h5V10H2v10h5m10 0v-6a2 2 0 1 0-4 0v6m4 0H9"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ),
                    role: "Leadership",
                    description:
                      "I lead through action and influence, not titles. My goal is to build teams and projects where everyone grows together.",
                    related: [
                      {
                        title: "Initiative",
                        desc: "Taking charge of direction, ideas, and accountability.",
                      },
                      {
                        title: "Teamwork",
                        desc: "Creating flow between people with different strengths.",
                      },
                      {
                        title: "Mentorship",
                        desc: "Helping others level up — because shared growth scales faster.",
                      },
                    ],
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="group border-b border-border/50 pb-10 sm:pb-12 hover:border-border transition-colors duration-500"
                  >
                    <div className="grid lg:grid-cols-12 gap-6 sm:gap-10">
                      <div className="lg:col-span-2">{skill.icon}</div>

                      <div className="lg:col-span-10 space-y-4">
                        <h3 className="text-xl sm:text-2xl font-medium">
                          {skill.role}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed max-w-2xl">
                          {skill.description}
                        </p>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
                          {skill.related.map((sub, i) => (
                            <div
                              key={i}
                              className="p-4 border border-border/40 rounded-lg hover:border-muted-foreground/50 transition-all duration-300"
                            >
                              <h4 className="font-medium text-sm mb-1">
                                {sub.title}
                              </h4>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="thoughts"
            ref={(el) => (sectionsRef.current[4] = el)}
            className="min-h-screen py-20 sm:py-32 opacity-0"
          >
            <div className="space-y-12 sm:space-y-16">
              <h2 className="text-3xl sm:text-4xl font-light">
                Recent Projects
              </h2>

              <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
                {[
                  {
                    title: "The Future of Web Development",
                    excerpt:
                      "Exploring how AI and automation are reshaping the way we build for the web.",
                    date: "Dec 2024",
                    readTime: "5 min",
                  },
                  {
                    title: "Design Systems at Scale",
                    excerpt:
                      "Lessons learned from building and maintaining design systems across multiple products.",
                    date: "Nov 2024",
                    readTime: "8 min",
                  },
                  {
                    title: "Performance-First Development",
                    excerpt:
                      "Why performance should be a first-class citizen in your development workflow.",
                    date: "Oct 2024",
                    readTime: "6 min",
                  },
                  {
                    title: "The Art of Code Review",
                    excerpt:
                      "Building better software through thoughtful and constructive code reviews.",
                    date: "Sep 2024",
                    readTime: "4 min",
                  },
                ].map((post, index) => (
                  <article
                    key={index}
                    className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        <span>Read more</span>
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="group flex flex-row items-center gap-2 justify-center mt-4 cursor-pointer opacity-45 hover:opacity-75 transition-opacity duration-300">
              <span className="">see all</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </div>
          </section>

          <section
            id="someprojects"
            ref={(el) => (sectionsRef.current[5] = el)}
            className="min-h-screen py-24 sm:py-32"
          >
            <div className="max-w-6xl mx-auto space-y-16 px-6 sm:px-8">
              {/* Section Header */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
                <div>
                  <h2 className="text-4xl sm:text-5xl font-light tracking-tight">
                    Some Projects
                  </h2>
                  <p className="text-muted-foreground mt-3 text-base sm:text-lg max-w-2xl">
                    A curated selection of products I’ve built, designed, and
                    refined — where creativity meets execution, and ideas become
                    tools that actually work.
                  </p>
                </div>

                <button className="group flex items-center gap-2 text-sm font-mono tracking-wider uppercase text-muted-foreground hover:text-foreground transition-all duration-300">
                  See all
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-10 sm:gap-12 lg:grid-cols-2">
                {[
                  {
                    title: "Kinex",
                    subtitle: "A modern SaaS for physiotherapists",
                    description:
                      "A subscription-based web platform that helps physiotherapists manage their brand, clients, and appointments — all in one place.",
                    tech: ["Next.js", "Stripe", "Tailwind", "AWS"],
                    image: placeholder,
                  },
                  {
                    title: "Athlete Performance Hub",
                    subtitle: "A digital home for athletes",
                    description:
                      "A platform built for professional athletes to showcase achievements, connect with sponsors, and track personal progress.",
                    tech: ["React", "Node.js", "MongoDB", "AWS"],
                    image: placeholder,
                  },
                  {
                    title: "NUR Running Club",
                    subtitle: "Community-driven experience",
                    description:
                      "A clean and functional site for my local running community — focused on consistency, growth, and the love for movement.",
                    tech: ["Vite", "React", "Tailwind"],
                    image: placeholder,
                  },
                  {
                    title: "Personal Branding Toolkit",
                    subtitle: "Building brands through code",
                    description:
                      "A toolkit for creators to launch personal websites and portfolios with structure, design, and performance out of the box.",
                    tech: ["Next.js", "TypeScript", "Framer Motion"],
                    image: placeholder,
                  },
                ].map((project, index) => (
                  <article
                    key={index}
                    className="group relative overflow-hidden rounded-2xl border border-border/50 hover:border-border transition-all duration-500 bg-background/60 hover:bg-background/90 backdrop-blur-sm"
                  >
                    {/* Project Image */}
                    <div className="overflow-hidden relative h-60 sm:h-72 rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
                    </div>

                    {/* Project Content */}
                    <div className="p-8 space-y-4">
                      <div className="flex flex-col gap-1">
                        <h3 className="text-2xl font-medium group-hover:text-foreground transition-colors duration-300">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground font-mono uppercase tracking-wide">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs border border-border/50 rounded-full text-muted-foreground group-hover:border-muted-foreground/50 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Hover CTA */}
                    <div className="absolute bottom-5 right-6 flex items-center gap-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>View project</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17 8l4 4-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section
            id="connect"
            ref={(el) => (sectionsRef.current[6] = el)}
            className="py-20 sm:py-32 opacity-0"
          >
            <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
              <div className="space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl font-light">
                  Let's Connect
                </h2>

                <div className="space-y-6">
                  <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                    Always interested in new opportunities, collaborations, and
                    conversations about technology and business.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="mailto:stancosminioan@gmail.com"
                      className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                    >
                      <span className="text-base sm:text-lg">
                        stancosminioan@gmail.com
                      </span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="text-sm text-muted-foreground font-mono">
                  ELSEWHERE
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      name: "Instagram",
                      handle: "@stanc.dev",
                      url: "https://www.instagram.com/stanc.dev/",
                    },
                    // { name: "v0.dev", handle: "@felixmacaspac", url: "#" },
                    {
                      name: "LinkedIn",
                      handle: "Stan Cosmin",
                      url: "https://www.linkedin.com/in/stan-cosmin/",
                    },
                    {
                      name: "TikTok",
                      handle: "@stanc.dev",
                      url: "https://www.tiktok.com/@stanc.dev",
                    },
                    {
                      name: "YouTube",
                      handle: "@stan.cosmin",
                      url: "https://www.youtube.com/@stan.cosmin",
                    },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.handle}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <footer className="py-12 sm:py-16 border-t border-border">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">
                  © 2025 Stan Cosmin. All rights reserved.
                </div>
                {/* <div className="text-xs text-muted-foreground">
                Built with v0.dev by Stan Cosmin
              </div> */}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {isDark ? (
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </button>

                <button className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </main>

        <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
      </div>
    </>
  );
}
