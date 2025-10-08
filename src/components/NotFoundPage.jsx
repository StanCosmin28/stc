import React, { useState, useEffect } from "react";
import { Home, ArrowLeft, Search, Code } from "lucide-react";

export default function NotFoundPage() {
  const [mounted, setMounted] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Random glitch effect
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const quickLinks = [
    { name: "Home", icon: <Home className="w-4 h-4" />, url: "/" },
    {
      name: "Projects",
      icon: <Code className="w-4 h-4" />,
      url: "/links",
    },
    { name: "Links", icon: <Search className="w-4 h-4" />, url: "/links" },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 overflow-hidden relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl" />
      </div>

      <div
        className={`relative z-10 text-center max-w-2xl transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* 404 Number with glitch effect */}
        <div className="mb-8 relative">
          <h1
            className={`text-[10rem] sm:text-[14rem] font-bold leading-none transition-all duration-200 ${
              glitchActive ? "transform translate-x-1" : ""
            }`}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
              404
            </span>
          </h1>
          {glitchActive && (
            <>
              <h1 className="absolute inset-0 text-[10rem] sm:text-[14rem] font-bold leading-none text-red-500 opacity-50 transform -translate-x-1">
                404
              </h1>
              <h1 className="absolute inset-0 text-[10rem] sm:text-[14rem] font-bold leading-none text-cyan-500 opacity-50 transform translate-x-1">
                404
              </h1>
            </>
          )}
        </div>

        {/* Error message */}
        <div
          className={`space-y-4 mb-12 transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-light">Page Not Found</h2>
          <p className="text-gray-400 text-lg max-w-md mx-auto leading-relaxed">
            Looks like you've ventured into uncharted territory. The page you're
            looking for doesn't exist.
          </p>
        </div>

        {/* Action buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-medium text-white hover:from-purple-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <Home className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </a>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 border border-white/20 rounded-lg font-medium text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </button>
        </div>

        {/* Quick Links */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-gray-500 mb-4">
            Or try these popular pages:
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
              >
                {link.icon}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Decorative element */}
        <div
          className={`mt-16 transition-all duration-1000 delay-900 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-xs text-gray-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span>Error Code: 404</span>
          </div>
        </div>
      </div>

      {/* Floating code snippets decoration */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
      >
        {[
          { code: "</404>", top: "15%", left: "10%", delay: "0s" },
          { code: "{404}", top: "25%", right: "15%", delay: "0.5s" },
          { code: "404;", bottom: "20%", left: "12%", delay: "1s" },
          { code: "404()", bottom: "30%", right: "10%", delay: "1.5s" },
        ].map((item, index) => (
          <div
            key={index}
            className="absolute text-gray-800 font-mono text-sm animate-pulse hidden lg:block"
            style={{
              top: item.top,
              bottom: item.bottom,
              left: item.left,
              right: item.right,
              animationDelay: item.delay,
              animationDuration: "3s",
            }}
          >
            {item.code}
          </div>
        ))}
      </div>
    </div>
  );
}
