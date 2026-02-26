import { ExternalLink, Github, Terminal, Cpu, Layers } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "CyberCore API",
            description: "A high-performance, distributed microservices architecture for a real-time trading platform. Built with automated scaling and redundant database clusters.",
            tech: ["Go", "gRPC", "PostgreSQL", "Kafka", "Docker"],
            github: "#",
            live: "#",
            featured: true
        },
        {
            title: "AuthNexus",
            description: "An enterprise-grade centralized authentication and authorization server. Implements OAuth2.0 and OpenID Connect protocols with advanced fraud detection.",
            tech: ["Node.js", "Redis", "MongoDB", "JWT", "AWS Cognito"],
            github: "#",
            live: "#",
            featured: false
        },
        {
            title: "DataStream Matrix",
            description: "Real-time analytics processing pipeline handling over 50k events per second. Features a custom query engine and live dashboard API.",
            tech: ["Python", "FastAPI", "ClickHouse", "Elasticsearch"],
            github: "#",
            live: "#",
            featured: false
        },
        {
            title: "Sentinel Shield",
            description: "Automated vulnerability scanning and dependency patching bot integrated directly into CI/CD pipelines for GitHub repositories.",
            tech: ["Django", "Celery", "RabbitMQ", "GitHub Actions"],
            github: "#",
            live: "#",
            featured: false
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-32 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        Deployed <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">Systems</span>
                    </h1>
                    <div className="w-24 h-1 bg-red-600 mb-6" />
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        A curated selection of backend architectures, APIs, and data pipelines I've engineered.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative bg-neutral-950/50 backdrop-blur-md border ${project.featured ? 'border-red-500/50' : 'border-neutral-900'} rounded-2xl p-8 hover:border-red-500 transition-all duration-500 overflow-hidden hover:-translate-y-1`}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {project.featured && (
                                <div className="absolute top-4 right-4 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-mono text-red-500 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                    Featured Output
                                </div>
                            )}

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
                                    {idx % 3 === 0 ? <Terminal /> : idx % 3 === 1 ? <Cpu /> : <Layers />}
                                </div>

                                <h2 className="text-2xl font-bold uppercase tracking-wider mb-3 group-hover:text-red-400 transition-colors">{project.title}</h2>
                                <p className="text-neutral-400 mb-8 max-w-md line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-neutral-900 border border-neutral-800 rounded-md text-xs font-mono text-neutral-300">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-neutral-900 group-hover:border-red-900/50 transition-colors">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" /> Codebase
                                    </a>
                                    <a href={project.live} className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-red-500 hover:text-red-400 transition-colors ml-4">
                                        <ExternalLink className="w-5 h-5" /> Live Node
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
