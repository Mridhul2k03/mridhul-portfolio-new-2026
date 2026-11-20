import { useEffect, useState } from 'react';
import { 
    Database, Server, Cpu, Code2, Layers, ShieldCheck, 
    ArrowRight, Sparkles, CheckCircle2, Zap, ArrowUpRight, Activity
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../Components/Common/SEO';

const Index = () => {
    const [typedLength, setTypedLength] = useState(0);
    const fullText = "> developer = BackendEngineer('Mridhul');\n> developer.buildScalableSystems();\n> System status: ONLINE [latency: 12ms]";

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentIndex++;
                setTypedLength(currentIndex);
            } else {
                clearInterval(interval);
            }
        }, 35);

        return () => clearInterval(interval);
    }, []);

    // Render syntax-highlighted code with vibrant developer colors
    const renderTerminalCode = () => {
        const text = fullText.slice(0, typedLength);
        const lines = text.split('\n');

        return lines.map((_, lIdx) => {
            if (lIdx === 0) {
                return (
                    <div key={lIdx} className="leading-relaxed">
                        <span className="text-neutral-500 font-bold mr-2">&gt;</span>
                        <span className="text-cyan-400 font-semibold">developer</span>
                        <span className="text-neutral-400"> = </span>
                        <span className="text-amber-300 font-semibold">BackendEngineer</span>
                        <span className="text-neutral-300">(</span>
                        <span className="text-emerald-400">&apos;Mridhul&apos;</span>
                        <span className="text-neutral-300">);</span>
                    </div>
                );
            } else if (lIdx === 1) {
                return (
                    <div key={lIdx} className="leading-relaxed">
                        <span className="text-neutral-500 font-bold mr-2">&gt;</span>
                        <span className="text-cyan-400 font-semibold">developer</span>
                        <span className="text-neutral-400">.</span>
                        <span className="text-indigo-400 font-medium">buildScalableSystems</span>
                        <span className="text-neutral-300">();</span>
                    </div>
                );
            } else {
                return (
                    <div key={lIdx} className="leading-relaxed">
                        <span className="text-neutral-500 font-bold mr-2">&gt;</span>
                        <span className="text-neutral-300">System status: </span>
                        <span className="text-emerald-400 font-bold tracking-wide">ONLINE</span>
                        <span className="text-neutral-400"> [</span>
                        <span className="text-neutral-400">latency: </span>
                        <span className="text-cyan-300 font-medium">12ms</span>
                        <span className="text-neutral-400">]</span>
                    </div>
                );
            }
        });
    };

    const techStack = [
        { 
            name: 'Python / Django', 
            icon: <Server className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]',
            bg: 'bg-gradient-to-b from-emerald-950/30 via-neutral-950/60 to-black/80',
            text: 'text-emerald-300',
            badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
        },
        { 
            name: 'PostgreSQL / MySQL', 
            icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-sky-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-sky-500/30 hover:border-sky-400 hover:shadow-[0_0_30px_rgba(56,189,248,0.25)]',
            bg: 'bg-gradient-to-b from-sky-950/30 via-neutral-950/60 to-black/80',
            text: 'text-sky-300',
            badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20'
        },
        { 
            name: 'Celery & Redis', 
            icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-rose-500/30 hover:border-rose-400 hover:shadow-[0_0_30px_rgba(244,63,94,0.25)]',
            bg: 'bg-gradient-to-b from-rose-950/30 via-neutral-950/60 to-black/80',
            text: 'text-rose-300',
            badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
        },
        { 
            name: 'AWS & Cloudflare', 
            icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
            bg: 'bg-gradient-to-b from-amber-950/30 via-neutral-950/60 to-black/80',
            text: 'text-amber-300',
            badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        },
        { 
            name: 'React / Next.js', 
            icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
            bg: 'bg-gradient-to-b from-cyan-950/30 via-neutral-950/60 to-black/80',
            text: 'text-cyan-300',
            badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
        },
        { 
            name: 'Security & Auth', 
            icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />,
            border: 'border-purple-500/30 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]',
            bg: 'bg-gradient-to-b from-purple-950/30 via-neutral-950/60 to-black/80',
            text: 'text-purple-300',
            badge: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
        },
    ];

    const capabilities = [
        { text: 'High-Throughput RESTful API Architecture (Django & DRF)', color: 'bg-cyan-400 text-cyan-400 shadow-cyan-400/80', tag: 'High-Scale' },
        { text: 'Database Architecture & Query Optimization (PostgreSQL, MySQL, Redis)', color: 'bg-sky-400 text-sky-400 shadow-sky-400/80', tag: 'Optimized' },
        { text: 'Asynchronous Task Queues & Workers (Celery)', color: 'bg-rose-400 text-rose-400 shadow-rose-400/80', tag: 'Async' },
        { text: 'E-Commerce, CRM & Marketplace Platforms (50+ Delivered)', color: 'bg-emerald-400 text-emerald-400 shadow-emerald-400/80', tag: 'Production' },
        { text: 'Cloud Deployments & CI/CD Pipelines (AWS, Cloudflare R2, VPS)', color: 'bg-amber-400 text-amber-400 shadow-amber-400/80', tag: 'DevOps' },
        { text: 'AI Integrations & LLM Workflows (OpenAI, Claude API)', color: 'bg-purple-400 text-purple-400 shadow-purple-400/80', tag: 'AI/LLM' }
    ];

    const stats = [
        { label: 'Web Projects Delivered', value: '50+', color: 'from-cyan-400 to-blue-500', glow: 'shadow-cyan-500/20' },
        { label: 'Active Production Backends', value: '35+', color: 'from-emerald-400 to-teal-500', glow: 'shadow-emerald-500/20' },
        { label: 'Years Engineering Experience', value: '2+ Yrs', color: 'from-amber-400 to-orange-500', glow: 'shadow-amber-500/20' },
        { label: 'Hardened Security Protocol', value: '100%', color: 'from-purple-400 to-indigo-500', glow: 'shadow-purple-500/20' },
    ];

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 relative">
            <SEO 
                canonical="https://mridhulkrishna.in/"
                ogUrl="https://mridhulkrishna.in/"
            />

            {/* Ambient Background Aura Lights */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-500/15 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute top-[45%] -left-32 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] pointer-events-none rounded-full" />
            <div className="absolute top-[65%] -right-32 w-[550px] h-[500px] bg-purple-600/12 blur-[160px] pointer-events-none rounded-full" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                
                {/* Hero Section */}
                <section className="min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-center gap-7 sm:gap-10 pt-4 sm:pt-10 relative">
                    <div className="space-y-4 sm:space-y-6 max-w-4xl relative z-10">
                        {/* Status Chip with Color Glow */}
                        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/30 backdrop-blur-md text-cyan-300 text-[11px] sm:text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]" />
                            <span className="font-semibold">ENGINEERING ARCHITECTURE</span>
                            <span className="text-neutral-500">•</span>
                            <span className="text-neutral-300">DJANGO & DISTRIBUTED SYSTEMS</span>
                        </div>

                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.08] sm:leading-[1.05]">
                            Architecting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.25)]">
                                Scalable Systems
                            </span>
                        </h1>
                        
                        <p className="text-sm sm:text-lg md:text-xl text-neutral-300 font-normal max-w-2xl leading-relaxed">
                            I build robust, high-performance <span className="text-cyan-400 font-medium">backend infrastructures</span> that power modern web applications. 
                            From <span className="text-purple-400 font-medium">microservices</span> to massive databases, I ensure your data flows <span className="text-emerald-400 font-medium">securely and efficiently</span>.
                        </p>
                    </div>

                    {/* Terminal Window with Color Syntax Highlighting */}
                    <div className="w-full max-w-3xl bg-[#090909]/95 backdrop-blur-md rounded-xl border border-neutral-800 shadow-2xl hover:border-cyan-500/50 hover:shadow-[0_0_35px_rgba(6,182,212,0.18)] transition-all duration-500 relative z-10 overflow-hidden">
                        {/* Traffic light macOS colored dots */}
                        <div className="flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#111111]/95 border-b border-neutral-800/90">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-[0_0_8px_rgba(255,95,86,0.7)]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-[0_0_8px_rgba(255,189,46,0.7)]" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-[0_0_8px_rgba(39,201,63,0.7)]" />
                            </div>
                            <div className="ml-3 sm:ml-4 flex-1 text-center text-[11px] sm:text-xs font-mono text-neutral-400">
                                <span className="text-cyan-400 font-semibold">mridhul</span>@<span className="text-purple-400 font-semibold">backend-server</span>:~
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400">
                                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                                <span className="hidden sm:inline">LIVE</span>
                            </div>
                        </div>

                        {/* Terminal code body */}
                        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base text-neutral-200 min-h-[110px] sm:min-h-[140px] overflow-x-auto leading-relaxed flex flex-col justify-center">
                            {renderTerminalCode()}
                            <div className="mt-1">
                                <span className="animate-pulse inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-cyan-400 align-middle shadow-[0_0_10px_#22d3ee]" />
                            </div>
                        </div>
                    </div>

                    {/* CTA Buttons with Color Accents */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto relative z-10">
                        <Link 
                            to="/projects" 
                            className="group px-7 py-3.5 bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-xs sm:text-sm tracking-wide rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] cursor-pointer"
                        >
                            <span>View Architecture</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <Link 
                            to="/contact" 
                            className="px-7 py-3.5 bg-neutral-950/80 text-white font-medium text-xs sm:text-sm tracking-wide border border-neutral-700 hover:border-purple-400 hover:bg-purple-950/30 transition-all duration-300 rounded-full backdrop-blur-md text-center hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] hover:scale-[1.02]"
                        >
                            Initialize Contact
                        </Link>
                    </div>
                </section>

                {/* Metrics Highlight Banner */}
                <section className="py-8 my-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                        {stats.map((s, idx) => (
                            <div 
                                key={idx} 
                                className="p-5 bg-neutral-950/70 border border-neutral-900 hover:border-neutral-700 transition-all duration-300 rounded-2xl backdrop-blur-md group hover:-translate-y-1 shadow-lg"
                            >
                                <div className={`text-2xl sm:text-4xl font-black font-mono bg-gradient-to-r ${s.color} text-transparent bg-clip-text drop-shadow-sm`}>
                                    {s.value}
                                </div>
                                <div className="text-xs font-semibold text-neutral-300 uppercase tracking-wider mt-1.5">
                                    {s.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tech Stack Section with Brand Colors */}
                <section className="py-16 sm:py-24 border-t border-neutral-900 relative">
                    <div className="text-center mb-10 sm:mb-16">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-xs font-mono uppercase tracking-widest mb-3">
                            <Zap className="w-3.5 h-3.5 text-amber-400" /> Production Toolchain
                        </div>
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 sm:mb-3">
                            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">Stack</span>
                        </h2>
                        <p className="text-neutral-400 text-xs sm:text-base md:text-lg">
                            Tools & technologies I use to build robust, fault-tolerant systems
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                        {techStack.map((tech, index) => (
                            <div 
                                key={index}
                                className={`group p-5 sm:p-6 backdrop-blur-md border rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:-translate-y-1.5 shadow-xl relative overflow-hidden ${tech.bg} ${tech.border}`}
                            >
                                <div className="transition-transform duration-300 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className={`font-mono text-xs sm:text-xs font-semibold uppercase tracking-tight transition-colors duration-300 relative z-10 text-center leading-tight ${tech.text}`}>
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Data Flow / Capabilities Section with Glowing Colors */}
                <section className="py-16 sm:py-24 border-t border-neutral-900 relative mb-8 sm:mb-12">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="space-y-5 sm:space-y-6">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/20 text-cyan-300 text-xs font-mono uppercase tracking-widest">
                                <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> High-Performance Standards
                            </div>

                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
                                Performance <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                                    By Design
                                </span>
                            </h2>
                            <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
                                I don't just write code; I engineer solutions. From optimizing database queries to setting up scalable cloud infrastructure, every decision is driven by performance, security, and maintainability.
                            </p>
                            
                            <ul className="space-y-3.5 pt-2">
                                {capabilities.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-200 font-mono text-xs sm:text-sm group leading-relaxed">
                                        <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_currentColor] group-hover:scale-125 transition-all duration-300 mt-1.5 shrink-0`} />
                                        <span className="group-hover:text-white transition-colors duration-300">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Abstract visual representation of data flow with Color Shimmer */}
                        <div className="relative h-[240px] sm:h-[320px] lg:h-[400px] w-full bg-gradient-to-b from-neutral-950 via-[#0a0a0f] to-black backdrop-blur-md border border-neutral-800 hover:border-cyan-500/40 rounded-2xl overflow-hidden flex items-center justify-center group transition-colors shadow-2xl">
                            {/* Ambient colorful center glow */}
                            <div className="absolute w-48 h-48 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 blur-[60px] pointer-events-none rounded-full" />

                            {/* Animated colorful data lines */}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-800/80 -translate-y-1/2">
                                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute left-0 animate-[shimmer_2s_infinite]" />
                            </div>
                            <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800/80 -translate-x-1/2">
                                <div className="h-1/3 w-full bg-gradient-to-b from-transparent via-purple-400 to-transparent absolute top-0 animate-[shimmer-vertical_2.5s_infinite]" />
                            </div>

                            {/* Center Pulsing Database Node */}
                            <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 bg-[#080808] border-2 border-cyan-400/80 shadow-[0_0_45px_rgba(6,182,212,0.4)] rounded-full flex items-center justify-center group-hover:scale-105 group-hover:border-cyan-300 transition-all duration-500">
                                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping pointer-events-none" />
                                <Database className="w-8 h-8 sm:w-11 sm:h-11 text-cyan-300 drop-shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
                            </div>
                            
                            <style>{`
                                @keyframes shimmer {
                                    0% { left: -33%; }
                                    100% { left: 100%; }
                                }
                                @keyframes shimmer-vertical {
                                    0% { top: -33%; }
                                    100% { top: 100%; }
                                }
                            `}</style>
                        </div>
                    </div>
                </section>

                {/* Bottom Architectural Callout Banner */}
                <section className="mt-8 mb-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-neutral-950 via-cyan-950/20 to-indigo-950/30 border border-neutral-800 hover:border-cyan-500/40 transition-colors shadow-2xl relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-300 text-xs font-mono uppercase tracking-widest mb-3">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Production Verified
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
                                Ready to build high-scale infrastructure?
                            </h3>
                            <p className="text-neutral-400 text-sm sm:text-base mt-1.5 max-w-xl font-normal">
                                Explore the 7 production-grade web systems and backend architectures engineered for active businesses.
                            </p>
                        </div>

                        <Link 
                            to="/projects"
                            className="px-6 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold text-xs sm:text-sm tracking-wide rounded-full inline-flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] shrink-0"
                        >
                            <span>Explore Systems</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Index;
