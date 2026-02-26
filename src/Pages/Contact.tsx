import { Mail as MailIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Send as SendIcon, Github as GithubIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-32 pb-16">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                        Initialize <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">Connection</span>
                    </h1>
                    <div className="w-24 h-1 bg-red-600 mb-6" />
                    <p className="text-xl text-neutral-400 max-w-2xl">
                        Open for new opportunities, collaborations, or just a technical chat. Send a transmission.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Form */}
                    <div className="bg-neutral-950/50 backdrop-blur-md border border-neutral-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-linear-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-red-500 uppercase tracking-wider">Name</label>
                                    <input 
                                        type="text" 
                                        placeholder="John Doe"
                                        className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-mono text-red-500 uppercase tracking-wider">Email</label>
                                    <input 
                                        type="email" 
                                        placeholder="john@example.com"
                                        className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-sm font-mono text-red-500 uppercase tracking-wider">Subject</label>
                                <input 
                                    type="text" 
                                    placeholder="Project Inquiry"
                                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-mono text-red-500 uppercase tracking-wider">Message</label>
                                <textarea 
                                    rows={5}
                                    placeholder="Execute project details..."
                                    className="w-full bg-black border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none"
                                />
                            </div>

                            <button className="w-full group relative px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider overflow-hidden rounded-lg flex items-center justify-center gap-2">
                                <span className="relative z-10">Transmit Message</span>
                                <SendIcon className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                <div className="absolute inset-0 bg-red-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-12 flex flex-col justify-center">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                                    <MailIcon className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider">Email Protocol</h3>
                                    <p className="text-neutral-400 mt-1 font-mono">mridhulkrishnatk@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                                    <PhoneIcon className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider">Voice Comm</h3>
                                    <p className="text-neutral-400 mt-1 font-mono">+91 95672 52212</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-4 bg-neutral-900 border border-neutral-800 rounded-xl group-hover:border-red-500 group-hover:bg-red-500/10 transition-colors">
                                    <MapPinIcon className="w-6 h-6 text-red-500" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold uppercase tracking-wider">Base Coordinates</h3>
                                    <p className="text-neutral-400 mt-1 font-mono">Kozhikode, Kerala<br/>India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-neutral-900">
                            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Social Nodes</h3>
                            <div className="flex gap-4">
                                {[
                                    { icon: <GithubIcon className="w-6 h-6" />, href: "https://github.com/Mridhul2k03" },
                                    { icon: <LinkedinIcon className="w-6 h-6" />, href: "https://www.linkedin.com/in/mridhulkrishnatk/" },
                                    { icon: <InstagramIcon className="w-6 h-6" />, href: "https://www.instagram.com/__.mridhul.____/" }
                                ].map((social, idx) => (
                                    <a 
                                        key={idx} 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-14 h-14 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 hover:text-white hover:border-red-500 hover:bg-red-500/20 hover:-translate-y-1 transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
