import { useState } from 'react';
import { 
    ExternalLink, Github, Terminal, Globe, 
    Sparkles, ShoppingBag, Utensils, Briefcase, 
    Users, LayoutDashboard
} from 'lucide-react';
import SEO from '../Components/Common/SEO';

interface Project {
    title: string;
    domain: string;
    category: 'all' | 'ecommerce' | 'saas-ai' | 'portals' | 'enterprise';
    description: string;
    highlights: string[];
    tech: string[];
    github: string;
    live: string;
    featured: boolean;
    icon: React.ReactNode;
    colorClass: string;
    borderHover: string;
    iconBg: string;
    badgeStyle: string;
    pulseDot: string;
}

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const projects: Project[] = [
        {
            title: "Exshare.ai",
            domain: "AI & Distributed Cloud Storage",
            category: "saas-ai",
            description: "An AI-powered smart asset distribution and high-speed file sharing platform. Engineered with tokenized access tokens, Cloudflare R2 object storage integration, OpenAI/Claude API workflows, and asynchronous background processing.",
            highlights: [
                "Cloudflare R2 integration for zero-egress cost object storage",
                "Celery asynchronous workers for secure asset parsing and encryption",
                "Automated LLM prompt workflows via OpenAI API integration"
            ],
            tech: ["Django", "React", "Cloudflare R2", "OpenAI API", "Celery", "PostgreSQL", "Tailwind CSS"],
            github: "https://github.com/Mridhul2k03",
            live: "https://exshare.ai",
            featured: true,
            icon: <Sparkles className="w-5 h-5 text-purple-400" />,
            colorClass: "text-purple-400",
            borderHover: "hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]",
            iconBg: "bg-purple-950/40 border-purple-800/60",
            badgeStyle: "border-purple-800/60 text-purple-300 bg-purple-950/40",
            pulseDot: "bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        },
        {
            title: "Boat Rider Sports",
            domain: "Sports & Performance E-Commerce",
            category: "ecommerce",
            description: "High-performance production e-commerce platform powering sports goods and apparel. Features dynamic catalog filtration, real-time cart state management, checkout transaction processing, and automated Celery notification workers.",
            highlights: [
                "Engineered secure REST APIs with high-throughput MySQL queries",
                "Redis caching layer for blazing-fast product and category lookups",
                "Asynchronous email confirmation and order status dispatch via Celery"
            ],
            tech: ["Next.js", "Django REST Framework", "MySQL", "Celery", "Redis", "AWS EC2"],
            github: "https://github.com/Mridhul2k03/boatridersports.in-backend.git",
            live: "https://boatridersports.in",
            featured: true,
            icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
            colorClass: "text-emerald-400",
            borderHover: "hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
            iconBg: "bg-emerald-950/40 border-emerald-800/60",
            badgeStyle: "border-emerald-800/60 text-emerald-300 bg-emerald-950/40",
            pulseDot: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
        },
        {
            title: "Speedine",
            domain: "Food Tech & Realtime POS",
            category: "saas-ai",
            description: "Real-time dining and automated food ordering infrastructure for modern restaurants. Provides low-latency table management, QR-based digital ordering, automated invoice generation, and instant order webhooks.",
            highlights: [
                "Optimized relational schema on PostgreSQL with instant query execution",
                "Webhook event pipelines for transaction verification and kitchen printers",
                "State synchronization with Redis for live table ordering states"
            ],
            tech: ["Django REST Framework", "React", "PostgreSQL", "Redis", "Webhooks", "Tailwind CSS"],
            github: "https://github.com/Mridhul2k03",
            live: "https://speedine.in",
            featured: true,
            icon: <Utensils className="w-5 h-5 text-amber-400" />,
            colorClass: "text-amber-400",
            borderHover: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
            iconBg: "bg-amber-950/40 border-amber-800/60",
            badgeStyle: "border-amber-800/60 text-amber-300 bg-amber-950/40",
            pulseDot: "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]"
        },
        {
            title: "StudentsGigs",
            domain: "Job Portal & Gig Marketplace",
            category: "portals",
            description: "A comprehensive gig marketplace and student recruitment portal connecting verified talent with businesses. Implements role-based user authentication (JWT), resume parsing, search & filter algorithms, and applicant tracking.",
            highlights: [
                "JWT session authentication with hardened refresh token rotation",
                "Complex PostgreSQL full-text search across job roles and skills",
                "Background applicant alert queues handled seamlessly by Celery"
            ],
            tech: ["Django REST Framework", "React", "PostgreSQL", "Celery", "Redis", "JWT Auth"],
            github: "https://github.com/Mridhul2k03",
            live: "https://studentsgigs.com",
            featured: true,
            icon: <Briefcase className="w-5 h-5 text-cyan-400" />,
            colorClass: "text-cyan-400",
            borderHover: "hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
            iconBg: "bg-cyan-950/40 border-cyan-800/60",
            badgeStyle: "border-cyan-800/60 text-cyan-300 bg-cyan-950/40",
            pulseDot: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
        },
        {
            title: "Custom Enterprise CRM",
            domain: "Enterprise Workflow & Analytics",
            category: "enterprise",
            description: "Custom enterprise CRM and analytics dashboard engine built for cross-functional business teams. Implements granular role-based permissions (RBAC), multi-stage sales funnels, and real-time operational reporting.",
            highlights: [
                "Granular Role-Based Access Control (RBAC) across departments",
                "Dynamic reporting dashboards aggregating millions of activity logs",
                "Custom webhooks and RESTful API endpoints for third-party integrations"
            ],
            tech: ["Django", "React", "MySQL", "Redis", "REST APIs", "OAuth 2.0"],
            github: "https://github.com/Mridhul2k03",
            live: "#",
            featured: false,
            icon: <LayoutDashboard className="w-5 h-5 text-indigo-400" />,
            colorClass: "text-indigo-400",
            borderHover: "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]",
            iconBg: "bg-indigo-950/40 border-indigo-800/60",
            badgeStyle: "border-indigo-800/60 text-indigo-300 bg-indigo-950/40",
            pulseDot: "bg-indigo-400"
        },
        {
            title: "Scalable Social Media Engine",
            domain: "High-Concurrency Social Network",
            category: "portals",
            description: "Scalable social media platform designed for high-concurrency feeds, user relationships, instant media uploads, engagement tracking, and asynchronous activity notifications powered by Celery & Redis.",
            highlights: [
                "Feed fan-out algorithm optimized for low database read latency",
                "Media storage and delivery using Cloudflare R2 and async image processing",
                "Real-time notifications and activity counters via Redis cache"
            ],
            tech: ["Python / Django", "React", "PostgreSQL", "Celery", "Redis", "Cloudflare R2"],
            github: "https://github.com/Mridhul2k03",
            live: "#",
            featured: false,
            icon: <Users className="w-5 h-5 text-rose-400" />,
            colorClass: "text-rose-400",
            borderHover: "hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)]",
            iconBg: "bg-rose-950/40 border-rose-800/60",
            badgeStyle: "border-rose-800/60 text-rose-300 bg-rose-950/40",
            pulseDot: "bg-rose-400"
        },
        {
            title: "Mister Chair",
            domain: "Commercial Seating E-Commerce",
            category: "ecommerce",
            description: "Modern furniture and commercial seating e-commerce storefront with customized catalog views, cart management, checkout optimization, and responsive user interfaces.",
            highlights: [
                "Responsive frontend interface built with Next.js and Tailwind CSS",
                "Fast catalog search and category filtering via Django backend",
                "End-to-end order processing and inventory synchronization"
            ],
            tech: ["Next.js", "Django", "MySQL", "Celery", "Redis"],
            github: "https://github.com/Mridhul2k03",
            live: "https://www.mrchair.in/",
            featured: false,
            icon: <ShoppingBag className="w-5 h-5 text-amber-300" />,
            colorClass: "text-amber-300",
            borderHover: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
            iconBg: "bg-amber-950/40 border-amber-800/60",
            badgeStyle: "border-amber-800/60 text-amber-300 bg-amber-950/40",
            pulseDot: "bg-amber-400"
        }
    ];

    const filteredProjects = selectedCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === selectedCategory);

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
            <SEO 
                title="Projects & Deployed Systems | Django & React Portfolio"
                description="Explore production Django and full-stack web platforms developed by Mridhul Krishna in Kozhikode, Kerala, India, including Exshare.ai, Boat Rider Sports, Speedine, StudentsGigs, and enterprise CRMs."
                keywords="django projects portfolio, full stack projects kerala, python web applications kozhikode, boat rider sports django, speedine pos, exshare ai, freelance django developer portfolio"
                canonical="https://mridhulkrishna.in/projects"
                ogUrl="https://mridhulkrishna.in/projects"
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                
                {/* Header */}
                <div className="mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md text-neutral-400 text-[11px] sm:text-xs font-mono tracking-wide mb-4 sm:mb-6">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" /> SYSTEM.DEPLOYMENTS // {projects.length} NODES
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-3 sm:mb-4">
                        Deployed <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Systems</span>
                    </h1>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4 sm:mb-6" />
                    <p className="text-sm sm:text-lg md:text-xl text-neutral-400 max-w-3xl font-normal leading-relaxed">
                        A curated portfolio of production backends, high-concurrency APIs, AI pipelines, and full-stack platforms 
                        architected and deployed for active businesses and clients.
                    </p>
                </div>

                {/* Category Filters with Color Glow */}
                <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 text-xs font-mono scrollbar-none border-b border-neutral-900 -mx-5 px-5 sm:mx-0 sm:px-0">
                    {[
                        { id: 'all', label: `All Systems [${projects.length}]` },
                        { id: 'ecommerce', label: 'E-Commerce' },
                        { id: 'saas-ai', label: 'AI & SaaS' },
                        { id: 'portals', label: 'Portals & Social' },
                        { id: 'enterprise', label: 'Enterprise CRM' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelectedCategory(tab.id)}
                            className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all whitespace-nowrap cursor-pointer text-[11px] sm:text-xs ${
                                selectedCategory === tab.id 
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/25' 
                                    : 'bg-neutral-950 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid with Unique Color Theming */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div 
                            key={idx} 
                            className={`group relative bg-neutral-950/60 backdrop-blur-md border border-neutral-900 rounded-2xl p-5 sm:p-8 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1 shadow-xl ${project.borderHover}`}
                        >
                            <div>
                                {/* Card Header with Node Status */}
                                <div className="flex items-center justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 sm:w-11 sm:h-11 border rounded-lg sm:rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shrink-0 ${project.iconBg}`}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <span className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-widest block font-medium ${project.colorClass}`}>
                                                {project.domain}
                                            </span>
                                            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                                                {project.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {project.featured ? (
                                        <div className={`px-2.5 py-0.5 sm:px-3 sm:py-1 border rounded-full text-[10px] sm:text-[11px] font-mono flex items-center gap-1.5 shrink-0 select-none ${project.badgeStyle}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${project.pulseDot}`} />
                                            <span>Featured</span>
                                        </div>
                                    ) : (
                                        <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 bg-neutral-900/60 border border-neutral-800/80 rounded-full text-[10px] sm:text-[11px] font-mono text-neutral-400 shrink-0 select-none">
                                            <span>Production</span>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <p className="text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-5">
                                    {project.description}
                                </p>

                                {/* Key Architectural Highlights */}
                                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 p-3 sm:p-4 bg-neutral-900/40 rounded-xl border border-neutral-900 group-hover:border-neutral-800 transition-colors">
                                    <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-1">
                                        Engineering Highlights
                                    </span>
                                    {project.highlights.map((highlight, hIdx) => (
                                        <div key={hIdx} className="flex items-start gap-2 text-[11px] sm:text-xs font-mono text-neutral-300 leading-relaxed">
                                            <span className={`${project.colorClass} mt-0.5`}>•</span>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack Badges */}
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-1 mb-4 sm:mb-6">
                                    {project.tech.map((t, tIdx) => (
                                        <span 
                                            key={tIdx} 
                                            className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-neutral-900/80 border border-neutral-800 rounded-md text-[10px] sm:text-[11px] font-mono text-neutral-300 group-hover:border-neutral-700 transition-colors"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer: Action Links with Color Accent */}
                            <div className="pt-4 sm:pt-5 border-t border-neutral-900 flex items-center justify-between">
                                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                    {project.live !== "#" ? (
                                        <a 
                                            href={project.live} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-[11px] sm:text-xs font-mono font-bold rounded-full shadow-md shadow-cyan-500/25 transition-all cursor-pointer"
                                        >
                                            <Globe className="w-3.5 h-3.5" />
                                            <span>Visit Live</span>
                                            <ExternalLink className="w-3 h-3 ml-0.5" />
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 text-neutral-500 text-[10px] sm:text-xs font-mono rounded-full border border-neutral-800 select-none">
                                            <span>Enterprise Deployment</span>
                                        </span>
                                    )}

                                    {project.github !== "#" && (
                                        <a 
                                            href={project.github} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 text-neutral-300 hover:text-cyan-300 text-[11px] sm:text-xs font-mono rounded-full transition-all"
                                            title="View GitHub Repository"
                                        >
                                            <Github className="w-3.5 h-3.5" />
                                            <span className="inline">Source</span>
                                        </a>
                                    )}
                                </div>

                                <span className={`font-mono text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold ${project.colorClass}`}>
                                    SYS.0{idx + 1}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Projects;
