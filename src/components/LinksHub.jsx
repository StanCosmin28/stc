import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Youtube,
  FileText,
  ShoppingBag,
  Code,
  Star,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import data from "../data/data";

export default function LinksHub() {
  const { profile } = { ...data };
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    {
      title: "GitHub",
      description: "Open source & repositories",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/yourusername",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "LinkedIn",
      description: "Professional connections",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://linkedin.com/in/yourusername",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Instagram",
      description: "Visual storytelling",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://instagram.com/yourusername",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "YouTube",
      description: "Tech tutorials & vlogs",
      icon: <Youtube className="w-6 h-6" />,
      url: "https://youtube.com/@yourusername",
      gradient: "from-red-500 to-red-600",
    },
    {
      title: "Resume",
      description: "My professional journey",
      icon: <FileText className="w-6 h-6" />,
      url: "/resume.pdf",
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Gumroad",
      description: "Digital products & tools",
      icon: <ShoppingBag className="w-6 h-6" />,
      url: "https://gumroad.com/yourusername",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      title: "Portfolio",
      description: "Featured projects & case studies",
      icon: <Code className="w-6 h-6" />,
      url: "https://yourportfolio.com",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Lab",
      description: "Experimental work",
      icon: <Sparkles className="w-6 h-6" />,
      url: "https://projects.yoursite.com",
      gradient: "from-amber-500 to-orange-600",
    },
    {
      title: "Sponsors",
      description: "Support my work",
      icon: <Star className="w-6 h-6" />,
      url: "https://github.com/sponsors/yourusername",
      gradient: "from-yellow-400 to-amber-600",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Profile Section */}
        <div
          className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block mb-6">
            <div className="w-22 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border border-white/10">
              <img
                // src={profile}
                src="me_profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-4 tracking-tight">
            Stan Cosmin
          </h1>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Full-stack developer & creative builder
          </p>
          <a href="/">
            <div className="group flex flex-row justify-center items-center gap-2 mt-4 cursor-pointer opacity-45 hover:opacity-75 transition-opacity duration-300">
              <span className="text-md">go see my website</span>
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
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mb-16">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative rounded-xl transition-all duration-500 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Subtle glow on hover */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${link.gradient} rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-white/20">
                {/* Content */}
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-br ${link.gradient} transition-transform duration-300 group-hover:scale-105`}
                    >
                      <div className="text-white">{link.icon}</div>
                    </div>

                    <ExternalLink
                      className={`w-5 h-5 text-gray-600 transition-all duration-300 ${
                        hoveredIndex === index
                          ? "opacity-100 text-gray-400"
                          : "opacity-0"
                      }`}
                    />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-xl font-medium mb-2 text-white transition-colors duration-300 group-hover:text-gray-200">
                      {link.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Current Status Section */}
        {/* <div
          className={`mb-16 transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <h2 className="text-2xl font-light mb-6 text-center">
              Currently Working On
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-2">
                  5+
                </div>
                <p className="text-sm text-gray-400">Active Projects</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 mb-2">
                  React
                </div>
                <p className="text-sm text-gray-400">Primary Stack</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-lg font-medium text-white">
                    Available
                  </span>
                </div>
                <p className="text-sm text-gray-400">For freelance work</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Quick Contact Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-light mb-3">Let's Connect</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Have a project in mind or just want to chat? Drop me a message and
              I'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <span className="text-white font-medium">Send Email</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Latest Content/Blog Section */}
        {/* <div
          className={`mb-16 transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-light mb-6 text-center">
            Latest from the Blog
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Building Scalable React Apps",
                date: "2 days ago",
                readTime: "5 min read",
                tag: "React",
              },
              {
                title: "My Journey from Athlete to Developer",
                date: "1 week ago",
                readTime: "8 min read",
                tag: "Career",
              },
              {
                title: "Top 10 VS Code Extensions for 2024",
                date: "2 weeks ago",
                readTime: "4 min read",
                tag: "Tools",
              },
            ].map((post, index) => (
              <a
                key={index}
                href="#"
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-2 py-1 rounded bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium">
                    {post.tag}
                  </span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-base font-medium mb-2 text-white group-hover:text-gray-200 transition-colors">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-500">{post.readTime}</p>
              </a>
            ))}
          </div>
        </div> */}

        {/* Skills & Tech Stack Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-light mb-6 text-center">
            Tech Stack & Skills
          </h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            {/* Frontend & Backend side by side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-300">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Angular",
                    "Ionic",
                    "Vite",
                    "Tailwind CSS",
                    "HTML",
                    "SCSS",
                    "CSS",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg text-white hover:border-blue-500/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4 text-gray-300">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Node.js",
                    "Express.js",
                    "Nest.js",
                    "MongoDB",
                    "PostgreSQL",
                    "SQL",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 text-sm bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-lg text-white hover:border-green-500/50 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills & Tools side by side at the bottom */}
            <div className="pt-6 border-t border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-300">
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Problem Solving",
                      "Discipline",
                      "Consistency",
                      "Communication",
                      "Creativity",
                      "Adaptability",
                      "Team Leadership",
                      "Agile",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white hover:border-purple-500/50 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4 text-gray-300">
                    Tools & Others
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Git",
                      "GitHub",
                      "Postman",
                      "Ionic",
                      "AWS",
                      "Capacitor",
                      "Android Studio",
                      "Xcode",
                      "Figma",
                      "Illustrator",
                      "Photoshop",
                    ].map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 text-sm bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 rounded-lg text-white hover:border-orange-500/50 transition-all duration-300 cursor-default"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Showcase */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-light mb-6 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {[
              {
                name: "E-Commerce Platform",
                description:
                  "Full-stack shopping experience with payment integration",
                tech: ["React", "Node.js", "Stripe"],
                status: "Live",
                gradient: "from-emerald-500 to-teal-600",
              },
              {
                name: "Fitness Tracking App",
                description:
                  "Mobile-first app for athletes and gym enthusiasts",
                tech: ["React Native", "Firebase"],
                status: "In Progress",
                gradient: "from-orange-500 to-red-600",
              },
              {
                name: "Portfolio Generator",
                description:
                  "SaaS tool for developers to build portfolios in minutes",
                tech: ["Next.js", "Tailwind", "MongoDB"],
                status: "Live",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                name: "AI Chat Assistant",
                description:
                  "Intelligent chatbot with natural language processing",
                tech: ["Python", "OpenAI", "FastAPI"],
                status: "Beta",
                gradient: "from-blue-500 to-cyan-600",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20 hover:scale-[1.02] cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-medium text-white group-hover:text-gray-200 transition-colors">
                    {project.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : project.status === "Beta"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white border border-white/20`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div
          className={`mb-16 transition-all duration-1000 delay-1300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-light mb-6 text-center">
            What People Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO at TechStart",
                text: "Exceptional work! Delivered ahead of schedule with outstanding quality. Highly recommend.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                role: "Product Manager",
                text: "Great communication and technical skills. Brought our vision to life perfectly.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                role: "Startup Founder",
                text: "Professional, reliable, and incredibly talented. A pleasure to work with!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="pt-3 border-t border-white/10">
                  <p className="text-sm font-medium text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline / Journey Section */}
        {/* <div
          className={`mb-16 transition-all duration-1000 delay-1400 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl font-light mb-6 text-center">My Journey</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="space-y-6">
              {[
                {
                  year: "2024",
                  title: "Full-Stack Developer",
                  description:
                    "Building modern web applications and leading projects",
                  color: "from-green-500 to-emerald-600",
                },
                {
                  year: "2023",
                  title: "Started Freelancing",
                  description:
                    "Launched my freelance career, working with startups worldwide",
                  color: "from-blue-500 to-cyan-600",
                },
                {
                  year: "2022",
                  title: "Learned Web Development",
                  description:
                    "Transitioned from sports to tech, mastering React & Node.js",
                  color: "from-purple-500 to-pink-600",
                },
                {
                  year: "2020",
                  title: "Professional Athlete",
                  description:
                    "Competed at national level, learned discipline & resilience",
                  color: "from-orange-500 to-red-600",
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-sm shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      {item.year.slice(-2)}
                    </div>
                    {index !== 3 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-lg font-medium text-white mb-1 group-hover:text-gray-200 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* Newsletter Subscription Section */}
        {/* <div
          className={`mb-12 transition-all duration-1000 delay-1500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-light mb-3">Stay Updated</h2>
              <p className="text-gray-400 mb-6">
                Join 500+ developers getting weekly tips on coding, career
                growth, and building great products.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-all duration-300"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg font-medium text-white hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                No spam, unsubscribe anytime.
              </p>
            </div>
          </div>
        </div> */}

        {/* Footer */}
        <div
          className={`text-center text-gray-600 text-sm transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p>© 2025 · Built with discipline & passion</p>
        </div>
      </div>
    </div>
  );
}
