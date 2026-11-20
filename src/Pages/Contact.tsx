import { useState } from 'react';
import { Mail as MailIcon, MapPin as MapPinIcon, Phone as PhoneIcon, Send as SendIcon, Github as GithubIcon, Linkedin as LinkedinIcon, Instagram as InstagramIcon } from 'lucide-react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import SEO from '../Components/Common/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handlePhoneChange = (value: string | undefined) => {
        setFormData(prev => ({ ...prev, phone: value || '' }));
    };

    const validateForm = () => {
        if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
            toast.error("Please fill in all fields");
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setLoading(true);
        const toastId = toast.loading("Transmitting message...");

        try {
            await emailjs.send(
                'service_u9liffc',
                'template_xtqraje',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone_number: formData.phone,
                    subject: formData.subject,
                    message: formData.message,
                },
                'J9_xQWnm-Cwje1tl5'
            );
            toast.success("Message transmitted successfully!", { id: toastId });
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            toast.error("Transmission failed. Please try again.", { id: toastId });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-24 sm:pt-32 pb-16 sm:pb-24">
            <SEO 
                title="Contact"
                description="Get in touch with Mridhul Krishna for backend engineering, system architecture, freelance projects, or technical consulting."
                canonical="https://mridhulkrishna.in/contact"
                ogUrl="https://mridhulkrishna.in/contact"
            />
            <style>{`
                .phone-input-custom .PhoneInputInput {
                    background: transparent;
                    border: none;
                    color: white;
                    outline: none;
                    width: 100%;
                }
                .phone-input-custom .PhoneInputCountry {
                    margin-right: 10px;
                }
                .phone-input-custom .PhoneInputCountrySelect {
                    background-color: transparent;
                    color: transparent;
                    color-scheme: dark;
                }
                .phone-input-custom .PhoneInputCountrySelect option {
                    background-color: #171717;
                    color: white;
                }
            `}</style>
            <Toaster position="bottom-right" toastOptions={{ style: { background: '#171717', color: '#fff', border: '1px solid #262626' } }} />
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
                
                {/* Header */}
                <div className="mb-10 sm:mb-14">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight mb-3 sm:mb-4">
                        Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">Connection</span>
                    </h1>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-500 mb-4 sm:mb-6" />
                    <p className="text-sm sm:text-lg md:text-xl text-neutral-400 max-w-2xl font-normal">
                        Open for new opportunities, scalable architecture collaborations, or technical consultations.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Contact Form */}
                    <div className="bg-neutral-950/60 backdrop-blur-md border border-neutral-900 hover:border-cyan-500/30 transition-colors rounded-2xl p-5 sm:p-8 shadow-2xl relative overflow-hidden">
                        <form className="relative z-10 space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Name</label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Email</label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@example.com"
                                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Phone Number</label>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        defaultCountry="IN"
                                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-4 py-3 text-white focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-500/30 transition-all phone-input-custom text-sm"
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Subject</label>
                                    <input 
                                        type="text" 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Project Architecture"
                                        className="w-full bg-black/80 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 transition-all font-sans text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Message</label>
                                <textarea 
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Execute project details..."
                                    className="w-full bg-black/80 border border-neutral-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500/30 transition-all resize-none font-sans text-sm"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={loading}
                                className="w-full px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold uppercase tracking-wider rounded-full flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/25 cursor-pointer"
                            >
                                <span>{loading ? 'Transmitting...' : 'Transmit Message'}</span>
                                {!loading && <SendIcon className="w-4 h-4" />}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div className="flex items-start gap-4 group">
                                <div className="p-3.5 bg-cyan-950/30 border border-cyan-800/50 rounded-xl group-hover:border-cyan-500/60 group-hover:scale-105 transition-all">
                                    <MailIcon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Email Protocol</h3>
                                    <p className="text-white mt-0.5 font-mono text-sm sm:text-base group-hover:text-cyan-300 transition-colors">mridhulkrishnatk@gmail.com</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-4 group">
                                <div className="p-3.5 bg-emerald-950/30 border border-emerald-800/50 rounded-xl group-hover:border-emerald-500/60 group-hover:scale-105 transition-all">
                                    <PhoneIcon className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Voice Comm</h3>
                                    <p className="text-white mt-0.5 font-mono text-sm sm:text-base group-hover:text-emerald-300 transition-colors">+91 95672 52212</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 group">
                                <div className="p-3.5 bg-amber-950/30 border border-amber-800/50 rounded-xl group-hover:border-amber-500/60 group-hover:scale-105 transition-all">
                                    <MapPinIcon className="w-5 h-5 text-amber-400" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">Base Coordinates</h3>
                                    <p className="text-white mt-0.5 font-mono text-sm sm:text-base group-hover:text-amber-300 transition-colors">Kozhikode, Kerala, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-neutral-900">
                            <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold mb-4">Social Nodes</h3>
                            <div className="flex gap-3">
                                {[
                                    { icon: <GithubIcon className="w-5 h-5" />, href: "https://github.com/Mridhul2k03", hover: "hover:border-white hover:text-white" },
                                    { icon: <LinkedinIcon className="w-5 h-5" />, href: "https://www.linkedin.com/in/mridhulkrishnatk/", hover: "hover:border-[#0A66C2]/60 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10" },
                                    { icon: <InstagramIcon className="w-5 h-5" />, href: "https://www.instagram.com/__.mridhul.____/", hover: "hover:border-[#E4405F]/60 hover:text-[#E4405F] hover:bg-[#E4405F]/10" }
                                ].map((social, idx) => (
                                    <a 
                                        key={idx} 
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-12 h-12 bg-neutral-900 border border-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 transition-all duration-200 ${social.hover}`}
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
