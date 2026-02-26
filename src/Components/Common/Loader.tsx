import { useEffect, useState } from 'react';
import { Terminal } from 'lucide-react';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFading(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Fade out duration
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 z-100 bg-black flex flex-col items-center justify-center transition-opacity duration-500 ease-in-out ${isFading ? 'opacity-0' : 'opacity-100'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-linear-to-r from-transparent via-red-600/50 to-transparent" />
      
      <div className="w-full max-w-sm px-6 flex flex-col items-center gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Terminal className="w-10 h-10 text-red-600" />
          <span className="text-4xl font-black text-white uppercase tracking-tighter">
            Mridhul<span className="text-red-600">.</span>
          </span>
        </div>

        {/* Loading Bar */}
        <div className="w-full h-1 bg-neutral-900 rounded-full overflow-hidden relative">
          <div 
            className="absolute top-0 left-0 h-full bg-red-600 transition-all duration-75 ease-out rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Text */}
        <div className="flex justify-between w-full font-mono text-sm tracking-widest">
          <span className="text-neutral-500 animate-pulse">BOOTING...</span>
          <span className="text-red-500">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
