import { Server, Database, Boxes, Terminal, Shield, Monitor } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Engineering",
            icon: <Monitor className="w-8 h-8 text-red-500" />,
            skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5 / CSS3"]
        },
        {
            title: "Backend Core",
            icon: <Server className="w-8 h-8 text-red-500" />,
            skills: ["Python / Django", "RESTful APIs", "Celery"]
        },
        {
            title: "Database Architecture",
            icon: <Database className="w-8 h-8 text-red-500" />,
            skills: ["PostgreSQL", "MySQL", "Redis", "SQLite"]
        },
        {
            title: "DevOps & Cloud",
            icon: <Boxes className="w-8 h-8 text-red-500" />,
            skills: ["AWS", "Cpanel", "CI/CD Pipelines"]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-32 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4 inline-block relative">
                        Technical <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">Arsenal</span>
                        <div className="absolute -top-6 -right-8 opacity-20"><Terminal className="w-16 h-16 text-red-500" /></div>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mt-6">
                        A comprehensive breakdown of the languages, tools, and frameworks I use to engineer scalable systems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="bg-neutral-950/50 backdrop-blur-md border border-neutral-900 rounded-2xl p-8 hover:border-red-500/50 transition-colors duration-500 group relative overflow-hidden flex flex-col">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-150 duration-700" />
                            
                            <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-900 group-hover:border-red-900/50 transition-colors">
                                <div className="p-3 bg-neutral-900 rounded-xl group-hover:bg-red-500/10 transition-colors">
                                    {category.icon}
                                </div>
                                <h2 className="text-2xl font-bold uppercase tracking-wider">{category.title}</h2>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {category.skills.map((skill, sIdx) => (
                                    <span 
                                        key={sIdx} 
                                        className="px-4 py-2 bg-neutral-900/50 border border-neutral-800 rounded-lg font-mono text-sm font-medium text-neutral-300 group-hover:border-red-500/30 group-hover:text-neutral-200 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-flex items-center gap-4 p-6 bg-red-500/5 border border-red-500/20 rounded-2xl">
                        <Shield className="w-8 h-8 text-red-500" />
                        <div className="text-left">
                            <h3 className="font-bold text-lg uppercase tracking-wider">Security First</h3>
                            <p className="text-neutral-400 font-mono text-sm mt-1">CSRF | JWT | OAuth 2.0 | Encryption</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
