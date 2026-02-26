import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Facebook, Instagram, Github, Linkedin } from "lucide-react";

// Navbar Logo Component
const NavbarLogo = ({ className }: { className?: string }) => (
    <img 
        src="https://cdn-icons-png.flaticon.com/512/12127/12127259.png" 
        alt="Logo" 
        className={className} 
        onError={(e) => {
            // Fallback to text if the image fails to load
            (e.target as HTMLImageElement).style.display = 'none';
        }}
    />
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    // Scroll Control
    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                const currentScrollY = window.scrollY;

                // Hide if scrolling down past 100px
                // Show if scrolling up
                if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }

                lastScrollY.current = currentScrollY;
            }
        };

        window.addEventListener('scroll', controlNavbar);
        return () => window.removeEventListener('scroll', controlNavbar);
    }, []);

    // Disable body scroll when menu is open
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
            return () => { document.body.style.overflow = 'auto'; };
        }
    }, [isOpen]);

    const navLinks = [
        { name: "HOME", to: "/", number: "01" },
        { name: "ABOUT", to: "/about", number: "02" },
        { name: "PROJECTS", to: "/projects", number: "03" },
        { name: "SKILLS", to: "/skills", number: "04" },
        { name: "CONTACT", to: "/contact", number: "05" },
    ];

    return (
        <>
            {/* Toggle Button - Fixed Top Left */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed top-6 left-6 z-[60] group flex items-center justify-center w-14 h-14 rounded-full bg-background/80 backdrop-blur-md border-2 transition-all duration-700 hover:scale-110 overflow-hidden ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0 pointer-events-none'
                    } ${isOpen
                        ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.7)] rotate-180 translate-y-0 opacity-100' // always show when open
                        : 'border-border hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                    }`}
                aria-label="Toggle Menu"
            >
                <NavbarLogo className={`w-8 h-8 transition-all duration-700 ${isOpen ? 'text-red-500 scale-90' : 'text-foreground group-hover:text-red-500'}`} />
            </button>

            {/* Full Screen Menu Overlay */}
            <div
                className={`fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:flex-row ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
                    }`}
            >
                {/* Left Side Decorative Panel */}
                <div className={`hidden lg:flex w-full lg:w-1/2 relative flex-col justify-end p-16 transition-transform duration-1000 ease-out delay-150 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
                    }`}>
                    {/* Background abstract overlay */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 via-black to-black z-10" />
                        <div className="w-full h-full bg-[url('https://img.freepik.com/free-photo/cybersecurity-expert-enjoying-audiobooks-using-pc-patch-security-exposures_482257-116334.jpg?t=st=1772035263~exp=1772038863~hmac=c8b21bb19c7ac5c9cba9c40ca5f54c95f57ebee0417abc86808007cca9300a26&w=1480')] bg-cover bg-center mix-blend-overlay scale-110" />
                    </div>

                    <div className="relative z-20 pl-8 border-l-4 border-red-600">
                        <NavbarLogo className="w-24 h-24 text-red-600 mb-8 drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]" />
                        <h2 className="text-7xl font-black text-white uppercase tracking-tighter leading-none mb-1">MRIDHUL</h2>
                        <h2 className="text-7xl font-black text-transparent uppercase tracking-tighter leading-none" style={{ WebkitTextStroke: '2px rgba(220,38,38,0.8)' }}>PORTFOLIO</h2>
                        <p className="mt-8 text-neutral-400 max-w-md text-xl font-medium tracking-wide">Welcome to my creative space. Explore my work and projects.</p>
                    </div>
                </div>

                {/* Right Side - Navigation Links */}
                <div className="w-full lg:w-1/2 h-full flex flex-col items-center justify-start px-8 py-16 relative overflow-y-auto scrollbar-hide">
                    {/* Decorative cyber lines */}
                    <div className="absolute top-0 right-10 lg:right-20 w-px h-[150%] bg-gradient-to-b from-transparent via-red-600/30 to-transparent hidden lg:block pointer-events-none" />
                    <div className="absolute top-0 right-14 lg:right-24 w-px h-[150%] bg-gradient-to-b from-transparent via-red-600/10 to-transparent hidden lg:block pointer-events-none" />

                    <nav className="flex flex-col gap-8 lg:gap-10 w-full max-w-lg mb-24">
                        {navLinks.map((link, i) => (
                            <div
                                key={link.name}
                                className={`transform transition-all duration-700 ease-out ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${200 + i * 75}ms` }}
                            >
                                <Link
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className="group flex flex-col relative"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-bold text-red-600/40 group-hover:text-red-500 transition-colors duration-300">
                                            {link.number}
                                        </span>
                                        <span className="text-5xl lg:text-6xl font-black text-white/50 tracking-tight uppercase group-hover:text-white transition-all duration-300 group-hover:translate-x-6 drop-shadow-md">
                                            {link.name}
                                        </span>
                                        <ChevronRight className="w-8 h-8 text-red-600 opacity-0 -translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ml-auto" />
                                    </div>
                                    <div className="h-[2px] w-full bg-neutral-800 mt-6 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-red-600 w-0 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                                    </div>
                                </Link>
                            </div>
                        ))}

                        {/* Social Links Footer */}
                        <div
                            className={`flex items-center justify-center lg:justify-start gap-6 mt-16 transform transition-all duration-700 ease-out ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            {[
                                { Icon: Github, url: "#" },
                                { Icon: Linkedin, url: "#" },
                                { Icon: Instagram, url: "#" },
                                { Icon: Facebook, url: "#" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    className="w-12 h-12 shrink-0 rounded-full border-2 border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]"
                                >
                                    <social.Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;