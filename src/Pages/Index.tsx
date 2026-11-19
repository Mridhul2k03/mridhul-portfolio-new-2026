import { useEffect, useState } from 'react';
import { Database, Server, Cpu, Code2, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../Components/Common/SEO';

const Index = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "> developer = BackendEngineer('Mridhul');\n> developer.buildScalableSystems();\n> System status: ONLINE [latency: 12ms]";

    useEffect(() => {
        let currentText = '';
        let currentIndex = 0;

        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                currentText += fullText[currentIndex];
                setTypedText(currentText);
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, 45);

        return () => clearInterval(interval);
    }, []);

    const techStack = [
        { name: 'Python / Django', icon: <Server className="w-5 h-5 sm:w-7 sm:h-7" /> },
        { name: 'PostgreSQL / MySQL', icon: <Database className="w-5 h-5 sm:w-7 sm:h-7" /> },
        { name: 'Celery & Redis', icon: <Layers className="w-5 h-5 sm:w-7 sm:h-7" /> },
        { name: 'AWS & Cloudflare', icon: <Cpu className="w-5 h-5 sm:w-7 sm:h-7" /> },
        { name: 'React / Next.js', icon: <Code2 className="w-5 h-5 sm:w-7 sm:h-7" /> },
        { name: 'Security & Auth', icon: <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7" /> },
    ];

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-28 pb-16 sm:pb-20">
            <SEO 
                canonical="https://mridhulkrishna.in/"
                ogUrl="https://mridhulkrishna.in/"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                {/* Hero Section */}
                <section className="min-h-[70vh] sm:min-h-[75vh] flex flex-col justify-center gap-7 sm:gap-10 pt-4 sm:pt-10">
                    <div className="space-y-4 sm:space-y-6 max-w-4xl">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1.08] sm:leading-[1.05]">
                            Architecting <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                                Scalable Systems
                            </span>
                        </h1>
                        
                        <p className="text-sm sm:text-lg md:text-xl text-neutral-400 font-normal max-w-2xl leading-relaxed">
                            I build robust, high-performance backend infrastructures that power modern web applications. 
                            From microservices to massive databases, I ensure your data flows securely and efficiently.
                        </p>
                    </div>

                    {/* Terminal Window */}
                    <div className="w-full max-w-3xl bg-[#090909] rounded-xl border border-neutral-800 shadow-2xl overflow-hidden transform hover:scale-[1.005] transition-transform duration-500">
                        <div className="flex items-center px-3.5 py-2.5 sm:px-4 sm:py-3 bg-[#111111] border-b border-neutral-800">
                            <div className="flex gap-1.5 sm:gap-2">
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700/60 border border-neutral-600" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700/60 border border-neutral-600" />
                                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-neutral-700/60 border border-neutral-600" />
                            </div>
                            <div className="ml-3 sm:ml-4 flex-1 text-center text-[11px] sm:text-xs font-mono text-neutral-400">
                                mridhul@backend-server:~
                            </div>
                        </div>
                        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm md:text-base text-neutral-200 min-h-[110px] sm:min-h-[140px] overflow-x-auto leading-relaxed">
                            <pre className="whitespace-pre-wrap break-words">
                                <code>{typedText}</code>
                                <span className="animate-pulse inline-block w-1.5 sm:w-2 h-4 sm:h-5 bg-white align-middle ml-1" />
                            </pre>
                        </div>
                    </div>

                    {/* CTA Buttons (Ergonomic full-width on mobile, auto on desktop) */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full sm:w-auto">
                        <Link 
                            to="/projects" 
                            className="group px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-black font-semibold text-xs sm:text-sm tracking-wide rounded-full flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:shadow-white/10"
                        >
                            <span>View Architecture</span>
                            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <Link 
                            to="/contact" 
                            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-neutral-900/80 text-white font-medium text-xs sm:text-sm tracking-wide border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all duration-300 rounded-full backdrop-blur-md text-center"
                        >
                            Initialize Contact
                        </Link>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-16 sm:py-24 border-t border-neutral-900 relative">
                    <div className="text-center mb-10 sm:mb-16">
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight mb-2 sm:mb-3">
                            Core Stack
                        </h2>
                        <p className="text-neutral-400 text-xs sm:text-base md:text-lg">
                            Tools & technologies I use to build robust systems
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
                        {techStack.map((tech, index) => (
                            <div 
                                key={index}
                                className="group p-4 sm:p-5 md:p-6 bg-neutral-950/60 backdrop-blur-md border border-neutral-900 hover:border-neutral-700 rounded-2xl flex flex-col items-center justify-center gap-2.5 sm:gap-3.5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden"
                            >
                                <div className="text-neutral-400 group-hover:text-white transition-colors duration-300 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className="font-mono text-[11px] sm:text-xs uppercase tracking-normal sm:tracking-wider text-neutral-400 group-hover:text-white transition-colors duration-300 relative z-10 text-center leading-tight">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Data Flow / Capabilities Section */}
                <section className="py-16 sm:py-24 border-t border-neutral-900 relative mb-8 sm:mb-12">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="space-y-5 sm:space-y-6">
                            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-tight">
                                Performance <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                                    By Design
                                </span>
                            </h2>
                            <p className="text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed">
                                I don't just write code; I engineer solutions. From optimizing database queries to setting up scalable cloud infrastructure, every decision is driven by performance, security, and maintainability.
                            </p>
                            <ul className="space-y-3 pt-2">
                                {[
                                    'High-Throughput RESTful API Architecture (Django & DRF)',
                                    'Database Architecture & Query Optimization (PostgreSQL, MySQL, Redis)',
                                    'Asynchronous Task Queues & Workers (Celery)',
                                    'E-Commerce, CRM & Marketplace Platforms (50+ Delivered)',
                                    'Cloud Deployments & CI/CD Pipelines (AWS, Cloudflare R2, VPS)',
                                    'AI Integrations & LLM Workflows (OpenAI, Claude API)'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300 font-mono text-xs sm:text-sm group leading-relaxed">
                                        <div className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-white group-hover:scale-125 transition-all duration-300 mt-1.5 shrink-0" />
                                        <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Abstract visual representation of data flow */}
                        <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] w-full bg-neutral-950/80 backdrop-blur-md border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center group">
                            {/* Animated data lines */}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-800 -translate-y-1/2">
                                <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent absolute left-0 animate-[shimmer_2s_infinite]" />
                            </div>
                            <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800 -translate-x-1/2">
                                <div className="h-1/3 w-full bg-gradient-to-b from-transparent via-white/40 to-transparent absolute top-0 animate-[shimmer-vertical_2.5s_infinite]" />
                            </div>

                            <div className="relative z-10 w-16 h-16 sm:w-24 sm:h-24 bg-black border border-neutral-700 rounded-full flex items-center justify-center shadow-2xl group-hover:border-white group-hover:scale-105 transition-all duration-500">
                                <Database className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
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
            </div>
        </div>
    );
};

export default Index;