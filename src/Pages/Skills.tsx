import { useState } from 'react';
import { 
    Server, Database, Terminal, Shield, Monitor, 
    Cloud, Lock, Bot, Users, Search, 
    CheckCircle2, Award, Zap
} from 'lucide-react';
import SEO from '../Components/Common/SEO';

interface SkillCategory {
    id: string;
    title: string;
    tagline: string;
    icon: React.ReactNode;
    colorClass: string;
    borderHover: string;
    iconBg: string;
    textHover: string;
    pillHover: string;
    skills: string[];
}

const Skills = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeTab, setActiveTab] = useState('all');

    const skillCategories: SkillCategory[] = [
        {
            id: 'backend',
            title: 'Backend & API Architecture',
            tagline: 'High-throughput endpoints & asynchronous event pipelines',
            icon: <Server className="w-5 h-5 text-emerald-400" />,
            colorClass: 'text-emerald-400',
            borderHover: 'hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
            iconBg: 'bg-emerald-950/40 border-emerald-800/60',
            textHover: 'group-hover:text-emerald-300',
            pillHover: 'hover:border-emerald-500/40 hover:text-emerald-300',
            skills: [
                'Python',
                'Django',
                'Django REST Framework',
                'Celery (Async Tasks)',
                'RESTful API Design',
                'Microservices Architecture',
                'Monolith Architecture',
                'System Design',
                'Scalable Architecture',
                'Design Patterns (MVC, MVT)',
                'Webhooks & Event Handlers',
                'API Rate Limiting',
                'API Testing & Optimization',
                'API Documentation',
                'Robot Framework'
            ]
        },
        {
            id: 'database',
            title: 'Database & Caching Systems',
            tagline: 'Relational storage, in-memory caches & query tuning',
            icon: <Database className="w-5 h-5 text-sky-400" />,
            colorClass: 'text-sky-400',
            borderHover: 'hover:border-sky-500/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.15)]',
            iconBg: 'bg-sky-950/40 border-sky-800/60',
            textHover: 'group-hover:text-sky-300',
            pillHover: 'hover:border-sky-500/40 hover:text-sky-300',
            skills: [
                'PostgreSQL',
                'MySQL',
                'SQLite3',
                'Redis (Caching & Broker)',
                'Database Migrations',
                'Query Optimization',
                'ORM Optimization',
                'Caching Strategies',
                'Connection Pooling',
                'Data Modeling'
            ]
        },
        {
            id: 'frontend',
            title: 'Frontend & UI Engineering',
            tagline: 'Responsive interfaces & client-state management',
            icon: <Monitor className="w-5 h-5 text-cyan-400" />,
            colorClass: 'text-cyan-400',
            borderHover: 'hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]',
            iconBg: 'bg-cyan-950/40 border-cyan-800/60',
            textHover: 'group-hover:text-cyan-300',
            pillHover: 'hover:border-cyan-500/40 hover:text-cyan-300',
            skills: [
                'React.js',
                'React TypeScript',
                'JavaScript (ES6+)',
                'TypeScript (Basics)',
                'Tailwind CSS',
                'Bootstrap',
                'HTML5 & CSS3',
                'JSON',
                'Responsive UI Integration',
                'API Integration (Axios/Fetch)'
            ]
        },
        {
            id: 'cloud',
            title: 'Cloud, DevOps & Infrastructure',
            tagline: 'Production servers, object storage & CI/CD workflows',
            icon: <Cloud className="w-5 h-5 text-amber-400" />,
            colorClass: 'text-amber-400',
            borderHover: 'hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]',
            iconBg: 'bg-amber-950/40 border-amber-800/60',
            textHover: 'group-hover:text-amber-300',
            pillHover: 'hover:border-amber-500/40 hover:text-amber-300',
            skills: [
                'AWS (EC2, RDS)',
                'Cloudflare R2',
                'VPS Deployment',
                'cPanel',
                'CI/CD Pipelines',
                'Git & GitHub',
                'GitHub Actions',
                'HTTPS / SSL/TLS Configuration'
            ]
        },
        {
            id: 'security',
            title: 'Security & Authentication',
            tagline: 'Hardened endpoints, tokenized sessions & CORS controls',
            icon: <Lock className="w-5 h-5 text-rose-400" />,
            colorClass: 'text-rose-400',
            borderHover: 'hover:border-rose-500/50 hover:shadow-[0_0_25px_rgba(244,63,94,0.15)]',
            iconBg: 'bg-rose-950/40 border-rose-800/60',
            textHover: 'group-hover:text-rose-300',
            pillHover: 'hover:border-rose-500/40 hover:text-rose-300',
            skills: [
                'JWT Authentication',
                'OAuth 2.0',
                'Web Security',
                'CSRF Protection',
                'CORS Configuration',
                'Input Validation & Sanitization',
                'Session Management',
                'Role-Based Access Control (RBAC)'
            ]
        },
        {
            id: 'ai',
            title: 'AI & Modern Integrations',
            tagline: 'Generative LLM APIs & prompt-driven tooling',
            icon: <Bot className="w-5 h-5 text-purple-400" />,
            colorClass: 'text-purple-400',
            borderHover: 'hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]',
            iconBg: 'bg-purple-950/40 border-purple-800/60',
            textHover: 'group-hover:text-purple-300',
            pillHover: 'hover:border-purple-500/40 hover:text-purple-300',
            skills: [
                'OpenAI API',
                'Anthropic Claude API',
                'LLM Integrations',
                'Prompt Engineering',
                'Antigravity'
            ]
        },
        {
            id: 'quality',
            title: 'Engineering Practices & QA',
            tagline: 'Clean code standards, observability & debugging',
            icon: <Zap className="w-5 h-5 text-yellow-400" />,
            colorClass: 'text-yellow-400',
            borderHover: 'hover:border-yellow-500/50 hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]',
            iconBg: 'bg-yellow-950/40 border-yellow-800/60',
            textHover: 'group-hover:text-yellow-300',
            pillHover: 'hover:border-yellow-500/40 hover:text-yellow-300',
            skills: [
                'Production Debugging',
                'Error Handling & Logging',
                'Exception Handling',
                'Code Reviews',
                'Reusable Code Patterns',
                'Application Maintenance',
                'Clean Architecture Principles'
            ]
        },
        {
            id: 'soft-skills',
            title: 'Leadership & Soft Skills',
            tagline: 'Cross-functional delivery & analytical problem solving',
            icon: <Users className="w-5 h-5 text-pink-400" />,
            colorClass: 'text-pink-400',
            borderHover: 'hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]',
            iconBg: 'bg-pink-950/40 border-pink-800/60',
            textHover: 'group-hover:text-pink-300',
            pillHover: 'hover:border-pink-500/40 hover:text-pink-300',
            skills: [
                'Team Management',
                'Critical Thinking',
                'Problem Solving',
                'Flexibility',
                'Logical Thinking',
                'Cross-functional Collaboration'
            ]
        }
    ];

    // Filter categories based on active tab and search query
    const filteredCategories = skillCategories
        .filter(cat => activeTab === 'all' || cat.id === activeTab)
        .map(cat => {
            if (!searchQuery.trim()) return cat;
            const query = searchQuery.toLowerCase();
            const matchingSkills = cat.skills.filter(s => s.toLowerCase().includes(query));
            const categoryMatches = cat.title.toLowerCase().includes(query) || cat.tagline.toLowerCase().includes(query);
            if (categoryMatches) return cat;
            if (matchingSkills.length > 0) return { ...cat, skills: matchingSkills };
            return null;
        })
        .filter((cat): cat is SkillCategory => cat !== null);

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
            <SEO 
                title="Skills & Technical Arsenal"
                description="Explore Mridhul Krishna's full technical stack: Python, Django, DRF, React, PostgreSQL, Redis, Celery, AWS, Cloudflare R2, AI/LLMs, and scalable system design."
                canonical="https://mridhulkrishna.in/skills"
                ogUrl="https://mridhulkrishna.in/skills"
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                
                {/* Header Section */}
                <div className="mb-10 sm:mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md text-neutral-400 text-[11px] sm:text-xs font-mono tracking-wide mb-4 sm:mb-6">
                        <Terminal className="w-3.5 h-3.5 text-cyan-400" /> STACK.REGISTRY // PRODUCTION READY
                    </div>
                    
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-3 sm:mb-4">
                        Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Arsenal</span>
                    </h1>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4 sm:mb-6" />
                    <p className="text-sm sm:text-lg md:text-xl text-neutral-400 max-w-3xl font-normal leading-relaxed">
                        A verified breakdown of languages, architectures, databases, cloud platforms, and modern AI toolchains 
                        engineered across 50+ web projects and 35+ active production backends.
                    </p>
                </div>

                {/* Metrics Highlights Bar with Color Tints */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-12">
                    {[
                        { label: 'Web Projects Delivered', value: '50+', sub: 'Cross-functional delivery', color: 'text-cyan-400' },
                        { label: 'Production Backends', value: '35+', sub: 'Actively running', color: 'text-emerald-400' },
                        { label: 'Engineering Experience', value: '2+ Yrs', sub: 'Django & Distributed Systems', color: 'text-amber-400' },
                        { label: 'Security & Auth', value: '100%', sub: 'Hardened JWT / OAuth 2.0', color: 'text-purple-400' }
                    ].map((stat, i) => (
                        <div key={i} className="p-4 sm:p-5 bg-neutral-950/60 backdrop-blur-md border border-neutral-900 hover:border-neutral-700 transition-colors rounded-2xl">
                            <div className={`text-xl sm:text-3xl font-black font-mono ${stat.color}`}>{stat.value}</div>
                            <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mt-1">{stat.label}</div>
                            <div className="text-[9px] sm:text-[11px] font-mono text-neutral-500 mt-0.5">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* Search & Filter Controls */}
                <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-neutral-900">
                    {/* Search Input */}
                    <div className="relative flex-1 max-w-md">
                        <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input 
                            type="text"
                            placeholder="Filter skills (e.g. Django, Redis, AWS, Celery)..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 sm:py-2.5 bg-neutral-950 border border-neutral-800 rounded-full text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 font-mono transition-colors"
                        />
                    </div>

                    {/* Quick Category Chips with Vibrant Glow */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-mono -mx-5 px-5 sm:mx-0 sm:px-0">
                        {[
                            { id: 'all', label: 'All' },
                            { id: 'backend', label: 'Backend' },
                            { id: 'database', label: 'Database' },
                            { id: 'frontend', label: 'Frontend' },
                            { id: 'cloud', label: 'Cloud' },
                            { id: 'security', label: 'Security' },
                            { id: 'ai', label: 'AI/LLM' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1.5 rounded-full transition-all whitespace-nowrap cursor-pointer ${
                                    activeTab === tab.id 
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md shadow-cyan-500/25' 
                                        : 'bg-neutral-900/60 text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-700'
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid with Domain-Themed Colors */}
                <div className="grid md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                    {filteredCategories.map((category) => (
                        <div 
                            key={category.id} 
                            className={`bg-neutral-950/60 backdrop-blur-md border border-neutral-900 rounded-2xl p-5 sm:p-7 transition-all duration-300 group flex flex-col justify-between shadow-xl ${category.borderHover}`}
                        >
                            <div>
                                <div className="flex items-start gap-3.5 sm:gap-4 mb-4 sm:mb-5 pb-3.5 sm:pb-4 border-b border-neutral-900/80">
                                    <div className={`p-2.5 sm:p-3 border rounded-xl group-hover:scale-105 transition-all duration-300 shrink-0 ${category.iconBg}`}>
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h2 className={`text-base sm:text-xl font-bold uppercase tracking-tight text-white transition-colors ${category.textHover}`}>
                                            {category.title}
                                        </h2>
                                        <p className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5 sm:mt-1">
                                            {category.tagline}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                                    {category.skills.map((skill, sIdx) => (
                                        <span 
                                            key={sIdx} 
                                            className={`px-2.5 sm:px-3 py-1 sm:py-1.5 bg-neutral-900/80 border border-neutral-800/90 rounded-full font-mono text-[11px] sm:text-xs font-medium text-neutral-300 transition-colors ${category.pillHover}`}
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-neutral-900/60 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-500">
                                <span className="flex items-center gap-1.5">
                                    <CheckCircle2 className={`w-3.5 h-3.5 ${category.colorClass}`} />
                                    {category.skills.length} competencies
                                </span>
                                <span className={`uppercase tracking-widest text-[9px] sm:text-[10px] font-bold ${category.colorClass}`}>PRODUCTION</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Architecture & Certifications Callout */}
                <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-4 sm:gap-6">
                    {/* Security & System Architecture */}
                    <div className="p-5 sm:p-7 bg-neutral-950/70 border border-neutral-900 hover:border-rose-500/30 transition-colors rounded-2xl backdrop-blur-md flex items-start gap-4 sm:gap-5">
                        <div className="p-2.5 sm:p-3 bg-rose-950/30 border border-rose-800/50 rounded-xl shrink-0">
                            <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-white">Security-First Protocol</h3>
                            <p className="text-neutral-400 font-mono text-xs sm:text-sm mt-1 leading-relaxed">
                                Complete defense-in-depth enforcement: JWT Token Sessions, OAuth 2.0, SSL/TLS Handshakes, 
                                CSRF Defense, Strict CORS Policies, and Parametric Input Sanitization.
                            </p>
                        </div>
                    </div>

                    {/* Official Certification */}
                    <div className="p-5 sm:p-7 bg-neutral-950/70 border border-neutral-900 hover:border-amber-500/30 transition-colors rounded-2xl backdrop-blur-md flex items-start gap-4 sm:gap-5">
                        <div className="p-2.5 sm:p-3 bg-amber-950/30 border border-amber-800/50 rounded-xl shrink-0">
                            <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                        </div>
                        <div>
                            <h3 className="font-bold text-sm sm:text-base uppercase tracking-tight text-white">Official Certifications</h3>
                            <p className="text-amber-300 font-mono text-xs sm:text-sm mt-1">
                                Python Web Development Certification
                            </p>
                            <p className="text-neutral-400 font-mono text-[11px] sm:text-xs mt-0.5">
                                NACTET (National Council for Technology and Training) • Issued 2024
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
