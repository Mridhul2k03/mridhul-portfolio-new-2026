import { Terminal, Instagram, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-neutral-900 pt-16 pb-8 overflow-hidden z-20">
            {/* Background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-5">
                        <Link to="/" className="inline-flex items-center gap-3 mb-6 group">
                            <Terminal className="w-8 h-8 text-red-600 group-hover:text-red-500 transition-colors" />
                            <span className="text-2xl font-black text-white uppercase tracking-tighter">
                                Mridhul<span className="text-red-600">.</span>
                            </span>
                        </Link>
                        <p className="text-neutral-400 text-lg mb-8 max-w-md">
                            Architecting scalable systems and engineering high-performance software. Turning complex problems into elegant logic.
                        </p>
                        <div className="flex items-center gap-4 border border-neutral-800 bg-neutral-900/40 w-fit p-1 rounded-full px-2">
                           <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                           <span className="text-sm font-mono text-neutral-400">Available for freelance</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-white font-bold uppercase tracking-widest mb-6">Navigation</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link 
                                        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                        className="text-neutral-400 hover:text-red-500 transition-colors inline-block transform hover:translate-x-1 duration-300"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social links */}
                    <div className="col-span-1 md:col-span-4 lg:col-span-4">
                         <h3 className="text-white font-bold uppercase tracking-widest mb-6">Connect</h3>
                         <div className="flex flex-wrap gap-4 mb-8">
                             {[
                                 { icon: <Github className="w-5 h-5" />, href: "https://github.com/Mridhul2k03", label: "GitHub" },
                                 { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/mridhulkrishnatk/", label: "LinkedIn" },
                                 { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/__.mridhul.____/", label: "Instagram" },
                             ].map((social, idx) => (
                                 <a 
                                     key={idx} 
                                     href={social.href}
                                     target="_blank"
                                     rel="noopener noreferrer"
                                     aria-label={social.label}
                                     className="w-12 h-12 bg-neutral-900/50 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:bg-red-600/10 hover:border-red-600/30 hover:text-red-500 transition-all duration-300 hover:-translate-y-1"
                                 >
                                     {social.icon}
                                 </a>
                             ))}
                         </div>
                         <div className="group inline-flex items-center gap-3 text-neutral-400 hover:text-white transition-colors">
                             <Mail className="w-5 h-5 group-hover:text-red-500 transition-colors" />
                             <a href="mailto:mridhulkrishnatk@gmail.com" className="font-mono text-sm">mridhulkrishnatk@gmail.com</a>
                         </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-4 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-6 relative">
                    <p className="text-neutral-500 text-sm font-mono z-10">
                        © {currentYear} Mridhul. All rights reserved.
                    </p>
                    
                    {/* Glass effect name in center */}
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 px-6 py-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_4px_30px_rgba(255,0,0,0.05)] z-10 group overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-red-600/30">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-red-600/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="text-xl font-black tracking-[0.2em] bg-linear-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent uppercase text-center block drop-shadow-[0_0_8px_rgba(220,38,38,0.5)]">
                            MRIDHUL
                        </span>
                    </div>

                    <p className="text-neutral-500 text-sm font-mono flex items-center gap-2 z-10">
                        Engineered by <span className="text-red-600">Mridhul</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
