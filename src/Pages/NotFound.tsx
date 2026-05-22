import { AlertOctagon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-red-600/30 font-sans overflow-x-hidden pt-32 pb-16 flex flex-col justify-center items-center relative">
            {/* Background effects */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-red-900/10 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] bg-neutral-900/30 blur-[120px] rounded-full" />
                <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8 flex flex-col items-center">
                {/* Visual Glitch/Warning Icon */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full scale-75 group-hover:scale-110 transition-transform duration-500" />
                    <div className="relative w-24 h-24 bg-neutral-950 border border-red-500/30 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.15)] group-hover:border-red-500/80 group-hover:shadow-[0_0_50px_rgba(220,38,38,0.3)] transition-all duration-500">
                        <AlertOctagon className="w-12 h-12 text-red-500 animate-[bounce_3s_infinite]" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-7xl md:text-9xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-white via-neutral-200 to-neutral-700">
                        404
                    </h1>
                    <h2 className="text-xl md:text-2xl font-bold font-mono text-red-500 uppercase tracking-widest">
                        [ SYSTEM_ERROR: PAGE_NOT_FOUND ]
                    </h2>
                    <p className="text-neutral-400 max-w-md leading-relaxed text-sm md:text-base">
                        The resource you are trying to fetch has either migrated to a secure domain, been compressed, or never existed in our directory tree.
                    </p>
                </div>

                {/* Mock Server Traceback */}
                <div className="w-full max-w-md bg-[#050505] rounded-xl border border-neutral-900 overflow-hidden shadow-2xl">
                    <div className="flex items-center px-4 py-2 bg-[#0d0d0d] border-b border-neutral-950">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                        </div>
                        <div className="ml-3 flex-1 text-left text-[10px] font-mono text-neutral-600">
                            traceback_log.sh
                        </div>
                    </div>
                    <div className="p-4 font-mono text-xs text-left text-neutral-500 space-y-1">
                        <p><span className="text-red-500">➜</span> <span className="text-neutral-300">GET</span> /requested-resource</p>
                        <p className="text-neutral-600">Checking local directory tree...</p>
                        <p className="text-red-500/70">Warning: No match found in routes config.</p>
                        <p><span className="text-yellow-500">STATUS:</span> 404 NOT FOUND</p>
                    </div>
                </div>

                {/* Return CTA */}
                <div className="pt-4">
                    <Link 
                        to="/" 
                        className="group flex items-center gap-3 px-8 py-4 bg-neutral-950 hover:bg-red-950/20 text-white font-bold uppercase tracking-wider border border-neutral-800 hover:border-red-500/50 rounded-lg transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1.5 transition-transform" />
                        <span className="font-mono text-sm tracking-widest">Return to Core</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
