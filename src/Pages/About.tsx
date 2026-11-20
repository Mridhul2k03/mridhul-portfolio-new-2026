import { 
    Terminal, Code, Briefcase, GraduationCap, 
    Award, Languages, MapPin, CheckCircle2, Calendar, 
    Users
} from 'lucide-react';
import SEO from '../Components/Common/SEO';

const About = () => {
    const experienceHighlights = [
        "Spearheaded cross-functional teams across backend, frontend, database, and cloud to successfully deliver 50+ web projects, with 35+ backend applications actively running in production.",
        "Architected and optimized relational databases across SQLite3, MySQL, and PostgreSQL, leveraging Redis caching and Celery background job processing to boost performance and reliability for high-traffic systems.",
        "Engineered secure, scalable REST APIs across diverse domains — e-commerce, job portals, social platforms, healthcare, dashboards, and CRMs — with asynchronous processing for emails, notifications, and compute-heavy tasks via Celery.",
        "Partnered with frontend teams (React, Next, HTML/CSS, JavaScript) to deliver responsive, performant UIs with seamless backend integration."
    ];

    const educationList = [
        {
            degree: "Diploma in Computer Hardware Engineering",
            institution: "Government Polytechnic College Meppadi",
            period: "2020 – 2023",
            domain: "Hardware Architecture & Systems Engineering"
        },
        {
            degree: "Higher Secondary Education – Computer Science",
            institution: "Government Higher Secondary School Sivapuram",
            period: "2018 – 2020",
            domain: "Computer Science & Fundamentals"
        }
    ];

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
            <SEO 
                title="About Mridhul Krishna | Best Django Full Stack Developer in Kozhikode"
                description="Learn more about Mridhul Krishna, top Django full stack developer and backend software engineer based in Nanminda, Kozhikode, Kerala, India. Specializing in Python, Django REST Framework, React, PostgreSQL, Celery, and scalable architecture."
                keywords="about mridhul krishna, django developer kozhikode, full stack developer calicut kerala, python developer nanminda, software engineer kerala india, hire django developer"
                canonical="https://mridhulkrishna.in/about"
                ogUrl="https://mridhulkrishna.in/about"
            />
            
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                
                {/* Hero / Overview Section */}
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14 sm:mb-20">
                    
                    {/* Left Column - Biography */}
                    <div className="lg:col-span-7 space-y-6 sm:space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md text-neutral-400 text-[11px] sm:text-xs font-mono tracking-wide mb-4 sm:mb-6">
                                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> BIO.PROFILE // MRIDHUL KRISHNA T K
                            </div>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-3 sm:mb-4 leading-none">
                                Django <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Fullstack</span> <br />Developer
                            </h1>
                            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-6 sm:mb-8" />
                        </div>

                        <div className="prose prose-invert text-sm sm:text-base md:text-lg text-neutral-400 max-w-none font-normal leading-relaxed space-y-3 sm:space-y-4">
                            <p>
                                I am a backend-focused Full Stack Developer with 2+ years of production experience building 
                                resilient, scalable web applications using <span className="text-white font-medium">Django</span> and <span className="text-white font-medium">REST APIs</span>. 
                                My core specialization revolves around architecting production-ready backend systems with <span className="text-cyan-300 font-medium">PostgreSQL, Redis, and Celery</span>, with an obsessive focus on performance, reliability, and clean architecture.
                            </p>
                            <p>
                                With hands-on proficiency spanning cloud deployment (<span className="text-amber-300 font-medium">AWS, Cloudflare R2, VPS</span>) and frontend integration with <span className="text-sky-300 font-medium">React and Next.js</span>, 
                                I have engineered and deployed mission-critical solutions across eCommerce platforms, enterprise CRM systems, job portals, and social media platforms.
                            </p>
                        </div>

                        {/* High-level metrics with Colors */}
                        <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-5 sm:pt-6 border-t border-neutral-900">
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-black text-amber-400 font-mono mb-0.5 sm:mb-1">2+</h3>
                                <p className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">Years Experience</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-black text-cyan-400 font-mono mb-0.5 sm:mb-1">50+</h3>
                                <p className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">Web Projects</p>
                            </div>
                            <div>
                                <h3 className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono mb-0.5 sm:mb-1">35+</h3>
                                <p className="text-[10px] sm:text-xs font-mono text-neutral-500 uppercase tracking-wider">Backends Live</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Operational Metrics & Identity */}
                    <div className="lg:col-span-5 space-y-5 sm:space-y-6">
                        <div className="bg-[#090909] border border-neutral-800/80 hover:border-cyan-500/30 transition-colors rounded-2xl p-5 sm:p-7 shadow-2xl backdrop-blur-md">
                            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6 flex items-center gap-2.5 text-white">
                                <Code className="w-4 h-4 text-cyan-400" /> Professional Dossier
                            </h3>

                            <div className="space-y-2.5 sm:space-y-3.5">
                                {[
                                    { label: "Designation", value: "Django Fullstack Developer", valColor: "text-white" },
                                    { label: "Current Workplace", value: "Exmedia, Calicut", valColor: "text-cyan-300" },
                                    { label: "Base Location", value: "Calicut, Kerala, India", valColor: "text-white" },
                                    { label: "Delivered Web Projects", value: "50+ Systems", valColor: "text-cyan-400 font-bold" },
                                    { label: "Active Live Backends", value: "35+ in Production", valColor: "text-emerald-400 font-bold" },
                                    { label: "Primary Architecture", value: "Django + DRF + Celery + Redis", valColor: "text-sky-300" }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center justify-between p-2.5 sm:p-3.5 bg-neutral-900/40 rounded-xl border border-neutral-900">
                                        <span className="font-mono text-[11px] sm:text-xs text-neutral-400">{item.label}</span>
                                        <span className={`font-mono text-xs sm:text-sm font-medium ${item.valColor}`}>{item.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Spoken Languages */}
                            <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-neutral-900 flex items-center justify-between text-xs font-mono">
                                <span className="flex items-center gap-2 text-neutral-400">
                                    <Languages className="w-4 h-4 text-purple-400" /> Spoken Languages
                                </span>
                                <span className="text-neutral-200">English, Malayalam</span>
                            </div>
                        </div>

                        {/* Soft Skills Card */}
                        <div className="bg-neutral-950/60 border border-neutral-900 hover:border-pink-500/30 transition-colors rounded-2xl p-5 sm:p-6 backdrop-blur-md">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3 flex items-center gap-2">
                                <Users className="w-3.5 h-3.5 text-pink-400" /> Core Soft Skills
                            </h4>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {["Team Management", "Critical Thinking", "Problem Solving", "Flexibility", "Logical Thinking"].map((skill, sIdx) => (
                                    <span key={sIdx} className="px-2.5 sm:px-3 py-0.5 sm:py-1 bg-neutral-900/80 border border-neutral-800 hover:border-pink-500/40 hover:text-pink-300 transition-colors rounded-full font-mono text-[11px] sm:text-xs text-neutral-300">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Experience Timeline Section */}
                <div className="mb-14 sm:mb-20">
                    <div className="mb-6 sm:mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 text-[11px] sm:text-xs font-mono tracking-wide mb-2 sm:mb-3">
                            <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> CAREER.EXPERIENCE
                        </div>
                        <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Experience</span>
                        </h2>
                    </div>

                    <div className="bg-neutral-950/60 border border-neutral-900 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-10 backdrop-blur-md transition-all shadow-xl">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pb-5 sm:pb-6 border-b border-neutral-900">
                            <div>
                                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-cyan-400 block font-semibold">
                                    Full Stack Developer
                                </span>
                                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white mt-0.5">
                                    Exmedia
                                </h3>
                                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-neutral-400 mt-1.5 sm:mt-2">
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-3.5 h-3.5 text-amber-400" /> Calicut, Kerala, India
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <Calendar className="w-3.5 h-3.5 text-sky-400" /> 05/2024 – Present
                                    </span>
                                </div>
                            </div>

                            <div className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-cyan-950/40 border border-cyan-800/60 rounded-full text-[11px] sm:text-xs font-mono text-cyan-300 self-start sm:self-center flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                                Current Role
                            </div>
                        </div>

                        <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                            {experienceHighlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5 sm:gap-3.5 text-xs sm:text-base text-neutral-300 leading-relaxed">
                                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 sm:mt-1 shrink-0" />
                                    <span>{highlight}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-neutral-900 flex flex-wrap items-center gap-1.5 sm:gap-2">
                            <span className="text-[11px] sm:text-xs font-mono text-neutral-500 mr-1 sm:mr-2">Key Deployed Solutions:</span>
                            {["Exshare.ai", "boatridersports.in", "speedine.in", "studentsgigs.com", "Custom CRM Platforms", "Social Media Engine"].map((proj, pIdx) => (
                                <span key={pIdx} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-neutral-900 border border-neutral-800 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors rounded-md text-[10px] sm:text-xs font-mono text-neutral-300">
                                    {proj}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Education & Certifications Grid */}
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                    
                    {/* Education */}
                    <div className="bg-neutral-950/60 border border-neutral-900 hover:border-sky-500/30 transition-colors rounded-2xl p-5 sm:p-8 backdrop-blur-md">
                        <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-neutral-900">
                            <div className="p-2 sm:p-2.5 bg-sky-950/40 border border-sky-800/60 rounded-xl">
                                <GraduationCap className="w-5 h-5 text-sky-400" />
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">Educational Qualification</h3>
                                <p className="text-[11px] sm:text-xs font-mono text-neutral-500">Academic background in hardware & computing</p>
                            </div>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            {educationList.map((edu, idx) => (
                                <div key={idx} className="p-4 sm:p-5 bg-neutral-900/40 border border-neutral-900 hover:border-neutral-800 transition-colors rounded-xl">
                                    <div className="flex items-center justify-between gap-2 mb-1">
                                        <h4 className="text-xs sm:text-base font-bold text-white uppercase tracking-tight">
                                            {edu.degree}
                                        </h4>
                                        <span className="text-[10px] sm:text-xs font-mono text-sky-400 shrink-0 font-medium">
                                            {edu.period}
                                        </span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-mono text-neutral-300">
                                        {edu.institution}
                                    </p>
                                    <p className="text-[10px] sm:text-[11px] font-mono text-neutral-500 mt-0.5 sm:mt-1">
                                        {edu.domain}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Industry Credentials */}
                    <div className="bg-neutral-950/60 border border-neutral-900 hover:border-amber-500/30 transition-colors rounded-2xl p-5 sm:p-8 backdrop-blur-md flex flex-col justify-between">
                        <div>
                            <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-3.5 sm:pb-4 border-b border-neutral-900">
                                <div className="p-2 sm:p-2.5 bg-amber-950/40 border border-amber-800/60 rounded-xl">
                                    <Award className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white">Certifications & Standards</h3>
                                    <p className="text-[11px] sm:text-xs font-mono text-neutral-500">Accredited technical credentials</p>
                                </div>
                            </div>

                            <div className="p-4 sm:p-5 bg-neutral-900/40 border border-neutral-900 hover:border-amber-500/30 transition-colors rounded-xl mb-4 sm:mb-6">
                                <div className="flex items-center justify-between gap-2 mb-1">
                                    <h4 className="text-xs sm:text-base font-bold text-white uppercase tracking-tight">
                                        Python Web Development Certification
                                    </h4>
                                    <span className="text-[10px] sm:text-xs font-mono text-amber-400 shrink-0 font-bold">
                                        2024
                                    </span>
                                </div>
                                <p className="text-xs sm:text-sm font-mono text-amber-300">
                                    NACTET (National Council for Technology and Training)
                                </p>
                                <p className="text-[10px] sm:text-[11px] font-mono text-neutral-400 mt-0.5 sm:mt-1">
                                    Comprehensive assessment in Python, Django architecture, REST APIs, and database engineering.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 sm:p-5 bg-black/60 border border-neutral-900 rounded-xl">
                            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-cyan-400 block mb-1 font-semibold">
                                Engineering Focus
                            </span>
                            <p className="text-[11px] sm:text-xs font-mono text-neutral-400 leading-relaxed">
                                Committed to architecting high-efficiency backend services, asynchronous Celery queues, 
                                and rock-solid relational database schemas for enterprise production workloads.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default About;
