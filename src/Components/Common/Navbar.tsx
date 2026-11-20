import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Github, Linkedin, Instagram, Copy, Check } from "lucide-react";

// X (formerly Twitter) minimalist SVG icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeString, setTimeString] = useState("");
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real-time Clock for Location (IST - Kozhikode, India)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).format(now);
      setTimeString(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("mridhulkrishnatk@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Work", to: "/projects", badge: "[7]" },
    { name: "Skills", to: "/skills" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      {/* Top Navbar Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-black/80 backdrop-blur-md border-b border-neutral-900/80 py-3.5 sm:py-4 px-4 sm:px-6 md:px-12 shadow-lg"
            : "bg-transparent py-4 sm:py-6 px-4 sm:px-6 md:px-12"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo (Left) */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center select-none"
          >
            <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase group-hover:text-neutral-300 transition-colors">
              MRIDHUL
            </span>
            <span className="text-xs sm:text-sm font-bold text-neutral-400 group-hover:text-white ml-0.5 self-start -mt-0.5">
              ©
            </span>
          </Link>

          {/* Center Location & Real-time Clock (Desktop) */}
          <div className="hidden md:flex items-center gap-2 text-xs lg:text-sm font-medium text-neutral-400 select-none">
            <span className="text-neutral-300 font-semibold">Kozhikode (IN)</span>
            <span>{timeString || "03:50 PM"}</span>
          </div>

          {/* Right Controls: Work link & Pill Menu Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium text-neutral-300 hover:text-white border border-neutral-800 bg-neutral-900/40 hover:bg-neutral-800/80 hover:border-neutral-700 transition-all"
            >
              Our Work <span className="text-neutral-500 font-normal">[7]</span>
            </Link>

            {/* Pill Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`w-14 h-7 sm:w-16 sm:h-8 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer select-none group ${
                isOpen
                  ? "border-white/40 bg-neutral-900 text-white"
                  : "border-white/20 bg-neutral-950/80 hover:border-white/50 text-white"
              }`}
            >
              <div className="w-5 flex flex-col items-center justify-center gap-1 relative">
                <span
                  className={`h-[1.5px] w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "rotate-45 translate-y-[2.75px]" : ""
                  }`}
                />
                <span
                  className={`h-[1.5px] w-full bg-white rounded-full transition-all duration-300 origin-center ${
                    isOpen ? "-rotate-45 -translate-y-[2.75px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Menu Overlay with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
            {/* Backdrop Blur BG */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.56, 0.22, 0.05, 0.99] }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Left Side: Brand & Subtitle (Shown on Desktop like Mugen Studio) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.38, 1] }}
              className="relative z-10 flex-1 h-full hidden lg:flex flex-col items-center justify-center text-center pointer-events-none select-none px-8"
            >
              <div className="relative inline-flex items-center">
                <span className="text-6xl xl:text-7xl font-black tracking-tight text-white uppercase">
                  MRIDHUL
                </span>
                <span className="text-xl font-bold text-white self-start -mt-1 ml-1">
                  ©
                </span>
              </div>
              <p className="mt-2 text-neutral-400 text-lg font-normal tracking-wide">
                Full Stack Developer
              </p>
            </motion.div>

            {/* Right Side: Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.65, ease: [0.56, 0.22, 0.05, 0.99] }}
              className="relative z-20 h-full w-full sm:w-[460px] md:w-[500px] bg-[#0c0c0c] border-l border-neutral-800 flex flex-col justify-between p-6 sm:p-8 md:p-12 shadow-2xl overflow-y-auto"
            >
              {/* Drawer Top Row: Menu Label & Close Pill Button */}
              <div className="flex items-center justify-between pb-6">
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold select-none">
                  Menu
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-14 h-7 sm:w-16 sm:h-8 rounded-full border border-white/20 hover:border-white/60 bg-neutral-900/80 hover:bg-neutral-800 flex items-center justify-center transition-all duration-300 cursor-pointer select-none group"
                >
                  <div className="w-5 flex flex-col items-center justify-center relative">
                    <span className="h-[1.5px] w-full bg-white rounded-full rotate-45 absolute" />
                    <span className="h-[1.5px] w-full bg-white rounded-full -rotate-45 absolute" />
                  </div>
                </button>
              </div>

              {/* Navigation Links with Staggered Slide In */}
              <nav className="flex flex-col gap-5 sm:gap-6 my-auto py-6">
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.to;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.7,
                        delay: 0.1 + idx * 0.06,
                        ease: [0.56, 0.22, 0.05, 0.99],
                      }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`group flex items-baseline gap-2.5 text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight transition-colors duration-200 ${
                          isActive
                            ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-bold"
                            : "text-neutral-400 hover:text-white"
                        }`}
                      >
                        <span>{link.name}</span>
                        {link.badge && (
                          <span className={`text-lg sm:text-2xl font-normal ${isActive ? "text-cyan-400" : "text-neutral-500"}`}>
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer: Let's Talk, Location & Socials */}
              <div className="pt-6 border-t border-neutral-800/80 flex flex-col gap-6">
                {/* Let's Talk Section */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-2 select-none">
                    Let's Talk
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href="mailto:mridhulkrishnatk@gmail.com"
                      className="inline-flex items-center gap-1.5 text-base sm:text-lg font-medium text-white hover:text-neutral-300 underline decoration-neutral-700 underline-offset-4 hover:decoration-white transition-colors group break-all"
                    >
                      <span>mridhulkrishnatk@gmail.com</span>
                      <span className="text-neutral-400 group-hover:text-white font-normal text-sm transition-colors">
                        +
                      </span>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email address"
                      className="p-1.5 rounded-md text-neutral-500 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Time / Location */}
                  <div className="text-xs sm:text-sm font-medium text-neutral-400 mt-2 select-none">
                    <span className="text-neutral-300 font-semibold">Kozhikode (IN)</span>{" "}
                    <span>{timeString || "03:50 PM"}</span>
                  </div>
                </div>

                {/* Socials Section */}
                <div>
                  <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold block mb-3 select-none">
                    Socials
                  </span>
                  <div className="flex items-center gap-4 text-neutral-400">
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X / Twitter"
                      className="p-2 -m-2 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/__.mridhul.____/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="p-2 -m-2 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mridhulkrishnatk/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className="p-2 -m-2 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                    <a
                      href="https://github.com/Mridhul2k03"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="p-2 -m-2 hover:text-white hover:scale-110 transition-all duration-200"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
