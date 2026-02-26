import { Terminal, Code, Coffee, Globe } from 'lucide-react';

const About = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-32 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column - Text content */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900 text-neutral-400 text-sm font-mono tracking-wide mb-6">
                                <Terminal className="w-4 h-4" /> root@mridhul:~# whoami
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
                                Backend <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">Architect</span>
                            </h1>
                            <div className="w-24 h-1 bg-red-600 mb-8" />
                        </div>

                        <div className="prose prose-invert prose-lg text-neutral-400 max-w-none">
                            <p>
                                I am an avid backend engineer obsessed with performance, scalability, and security. 
                                My journey began by hacking together simple python scripts, and has evolved into 
                                architecting enterprise-grade distributed systems capable of handling massive data streams.
                            </p>
                            <p className="mt-4">
                                I don't just write code; I design systems. I thrive in the complex intersection 
                                of database optimization, API design, and cloud infrastructure. When a system is 
                                slow or crashing under load, I'm the one you call to find the bottleneck and fix it.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-neutral-900">
                            <div>
                                <h3 className="text-4xl font-black text-red-500 mb-2">2+</h3>
                                <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-4xl font-black text-red-500 mb-2">100k+</h3>
                                <p className="text-sm font-mono text-neutral-500 uppercase tracking-wider">Requests Handled</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual/Stats */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-900/20 blur-[100px] rounded-full" />
                        
                        <div className="relative bg-[#0a0a0a] border border-neutral-800 rounded-2xl p-8 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-red-500/10 to-transparent" />
                            
                            <h3 className="text-xl font-bold uppercase tracking-wider mb-8 flex items-center gap-3">
                                <Code className="w-6 h-6 text-red-500" /> Operational Metrics
                            </h3>

                            <div className="space-y-6">
                                {[
                                    { label: "Backends Developed", value: "50+", icon: <Coffee className="w-5 h-5" /> },
                                    { label: "Bugs Exterminated", value: "9,001+", icon: <Terminal className="w-5 h-5" /> },
                                    { label: "Servers Deployed", value: "42 Nodes", icon: <Globe className="w-5 h-5" /> }
                                ].map((stat, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-4 bg-neutral-900/50 rounded-xl border border-neutral-800">
                                        <div className="flex items-center gap-4 text-neutral-400">
                                            {stat.icon}
                                            <span className="font-mono text-sm">{stat.label}</span>
                                        </div>
                                        <span className="font-bold text-white">{stat.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Decorative mock graph */}
                            <div className="mt-8 pt-8 border-t border-neutral-900">
                                <p className="text-xs font-mono text-neutral-500 mb-4 uppercase">System Load (7 Days)</p>
                                <div className="flex items-end gap-2 h-24">
                                    {[40, 70, 45, 90, 60, 30, 80, 50, 75, 40, 65, 85].map((h, i) => (
                                        <div 
                                            key={i} 
                                            className="flex-1 bg-red-500/20 hover:bg-red-500/40 transition-colors rounded-t-sm relative group"
                                            style={{ height: `${h}%` }}
                                        >
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-xs font-mono py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                {h}%
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;
