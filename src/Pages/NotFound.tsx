import { AlertOctagon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../Components/Common/SEO';

const NotFound = () => {
    return (
        <div className="min-h-screen text-white font-sans overflow-x-hidden pt-32 pb-20 flex flex-col justify-center items-center relative">
            <SEO 
                title="404 Page Not Found"
                description="The requested page could not be found."
                noindex={true}
            />

            <div className="relative z-10 max-w-2xl mx-auto px-6 text-center space-y-8 flex flex-col items-center">
                {/* Warning Icon */}
                <div className="relative group">
                    <div className="relative w-20 h-20 bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center shadow-2xl">
                        <AlertOctagon className="w-10 h-10 text-neutral-300" />
                    </div>
                </div>

                <div className="space-y-3">
                    <h1 className="text-7xl sm:text-8xl md:text-9xl font-black tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-600">
                        404
                    </h1>
                    <h2 className="text-lg sm:text-xl font-bold font-mono text-neutral-400 uppercase tracking-widest">
                        [ SYSTEM_ERROR: PAGE_NOT_FOUND ]
                    </h2>
                    <p className="text-neutral-400 max-w-md leading-relaxed text-sm sm:text-base">
                        The resource you are trying to fetch has migrated, been archived, or never existed in this directory tree.
                    </p>
                </div>

                {/* Mock Server Traceback */}
                <div className="w-full max-w-md bg-[#080808] rounded-xl border border-neutral-800 overflow-hidden shadow-2xl">
                    <div className="flex items-center px-4 py-2.5 bg-[#111111] border-b border-neutral-800">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                            <div className="w-2.5 h-2.5 rounded-full bg-neutral-700" />
                        </div>
                        <div className="ml-3 flex-1 text-left text-[10px] font-mono text-neutral-500">
                            traceback_log.sh
                        </div>
                    </div>
                    <div className="p-4 font-mono text-xs text-left text-neutral-400 space-y-1">
                        <p><span className="text-neutral-500">➜</span> <span className="text-white">GET</span> /requested-resource</p>
                        <p className="text-neutral-600">Checking router node table...</p>
                        <p className="text-neutral-500">Warning: No route match in production bundle.</p>
                        <p><span className="text-white">STATUS:</span> 404 NOT FOUND</p>
                    </div>
                </div>

                {/* Return CTA */}
                <div className="pt-2">
                    <Link 
                        to="/" 
                        className="group flex items-center gap-2.5 px-7 py-3.5 bg-white text-black font-semibold text-sm tracking-wide rounded-full hover:bg-neutral-200 transition-all shadow-lg"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Return to Core</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
