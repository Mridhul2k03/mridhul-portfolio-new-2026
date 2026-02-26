import { useEffect, useState } from 'react';
import { Database, Server, Cpu, Code2, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
    const [typedText, setTypedText] = useState('');
    const fullText = "> developer = BackendEngineer('Mridhul');\n> developer.buildScalableSystems();\n> System ready...";

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
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const techStack = [
        { name: 'Django', icon: <Server className="w-8 h-8" /> },
        { name: 'MySQL', icon: <Database className="w-8 h-8" /> },
        { name: 'Celery', icon: <Layers className="w-8 h-8" /> },
        { name: 'AWS', icon: <Cpu className="w-8 h-8" /> },
        { name: 'Python', icon: <Code2 className="w-8 h-8" /> },
        { name: 'Security', icon: <ShieldCheck className="w-8 h-8" /> },
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-24 pb-16">
            {/* Background effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-red-900/10 blur-[120px] rounded-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Hero Section */}
                <section className="min-h-[80vh] flex flex-col justify-center gap-12 pt-16">
                    <div className="space-y-6 max-w-4xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-sm font-mono tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            System Status: Online
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[1.05]">
                            Architecting <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 via-red-600 to-red-900">
                                Scalable Systems
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-neutral-400 font-light max-w-2xl leading-relaxed">
                            I build robust, high-performance backend infrastructures that power modern web applications. 
                            From microservices to massive databases, I ensure your data flows securely and efficiently.
                        </p>
                    </div>

                    {/* Terminal Window */}
                    <div className="w-full max-w-3xl bg-[#0a0a0a] rounded-xl border border-neutral-800 shadow-2xl shadow-red-900/20 overflow-hidden transform hover:scale-[1.01] transition-transform duration-500">
                        <div className="flex items-center px-4 py-3 bg-[#111] border-b border-neutral-800">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                            </div>
                            <div className="ml-4 flex-1 text-center text-xs font-mono text-neutral-500">
                                mridhul@backend-server:~
                            </div>
                        </div>
                        <div className="p-6 font-mono text-sm md:text-base text-gray-300 min-h-[150px]">
                            <pre className="whitespace-pre-wrap">
                                <code className="text-green-400">{typedText}</code>
                                <span className="animate-pulse inline-block w-2 h-5 bg-red-500 align-middle ml-1" />
                            </pre>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-4">
                        <Link 
                            to="/projects" 
                            className="group relative px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-sm"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Architecture <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                        </Link>
                        
                        <Link 
                            to="/contact" 
                            className="group px-8 py-4 bg-transparent text-white font-bold uppercase tracking-wider border border-neutral-700 hover:border-red-500 hover:bg-red-500/5 transition-all duration-300 rounded-sm"
                        >
                            <span className="relative z-10">Initialize Contact</span>
                        </Link>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-24 border-t border-neutral-900 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-linear-to-r from-transparent via-red-900/50 to-transparent" />
                    
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Core Stack</h2>
                        <p className="text-neutral-500 text-lg">Tools & technologies I use to build robust systems</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                        {techStack.map((tech, index) => (
                            <div 
                                key={index}
                                className="group p-6 bg-neutral-950/50 backdrop-blur-sm border border-neutral-900 hover:border-red-500/50 rounded-xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(220,38,38,0.3)] relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="text-neutral-500 group-hover:text-red-500 transition-colors duration-300 relative z-10">
                                    {tech.icon}
                                </div>
                                <span className="font-mono text-sm uppercase tracking-wider text-neutral-400 group-hover:text-white transition-colors duration-300 relative z-10">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Data Flow / Capabilities Section */}
                <section className="py-24 border-t border-neutral-900 relative mb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
                                Performance <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">By Design</span>
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed">
                                I don't just write code; I engineer solutions. From optimizing database queries to setting up scalable cloud infrastructure, every decision is driven by performance, security, and maintainability.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'RESTful & GraphQL API Design',
                                    'Database Architecture & Optimization',
                                    'Distributed Systems & Microservices',
                                    'CI/CD Pipelines & DevOps'
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 text-neutral-300 font-mono text-sm group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-800 group-hover:bg-red-500 group-hover:scale-150 transition-all duration-300 shadow-[0_0_10px_rgba(220,38,38,0)] group-hover:shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
                                        <span className="group-hover:text-white transition-colors duration-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Abstract visual representation of data flow */}
                        <div className="relative h-[400px] w-full bg-neutral-950/80 backdrop-blur-md border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center group">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            {/* Animated data lines */}
                            <div className="absolute inset-x-0 top-1/2 h-px bg-neutral-800 -translate-y-1/2">
                                <div className="w-1/3 h-full bg-linear-to-r from-transparent via-red-500 to-transparent absolute left-0 animate-[shimmer_2s_infinite]" />
                            </div>
                            <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800 -translate-x-1/2">
                                <div className="h-1/3 w-full bg-linear-to-b from-transparent via-red-500 to-transparent absolute top-0 animate-[shimmer-vertical_2.5s_infinite]" />
                            </div>

                            <div className="relative z-10 w-24 h-24 bg-black border border-red-500/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.2)] group-hover:shadow-[0_0_50px_rgba(220,38,38,0.6)] group-hover:scale-110 transition-all duration-500">
                                <Database className="w-10 h-10 text-red-500 animate-pulse" />
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
