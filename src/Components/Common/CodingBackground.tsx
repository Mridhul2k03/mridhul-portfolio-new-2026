import React from 'react';

const CodingBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none bg-black">
      {/* Ambient Color Atmosphere Pools */}
      <div className="absolute -top-40 left-1/4 w-[600px] h-[500px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[550px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[450px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* 1. Subtle Dot Matrix Grid (Image 2 style) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.14]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hud-dots" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#ffffff" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hud-dots)" />
      </svg>

      {/* 2. Thin Technical Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:128px_128px] opacity-40" />

      {/* 3. Subtle Vignette & Central Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_80%,#000000_100%)]" />

      {/* Floating Crosshairs (+) at Grid Points with subtle color */}
      <div className="absolute top-1/4 left-1/4 text-cyan-500/40 font-mono text-xs hidden lg:block">+</div>
      <div className="absolute top-1/3 right-1/4 text-purple-500/40 font-mono text-xs hidden lg:block">+</div>
      <div className="absolute bottom-1/3 left-1/3 text-sky-500/40 font-mono text-xs hidden lg:block">+</div>
      <div className="absolute bottom-1/4 right-1/3 text-amber-500/40 font-mono text-xs hidden lg:block">+</div>

      {/* Telemetry Bracket Marks: Left & Right Flanks with Image 2 Color Accents */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 flex flex-col gap-8 opacity-60 hidden xl:flex">
        <div className="w-1 h-12 bg-neutral-800 relative">
          <div className="w-1 h-3 bg-red-500 absolute top-2 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        </div>
        <div className="w-2.5 h-2.5 border-l border-b border-cyan-500/60" />
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 flex flex-col items-end gap-8 opacity-60 hidden xl:flex">
        <div className="w-1 h-12 bg-neutral-800 relative">
          <div className="w-1 h-3 bg-amber-400 absolute bottom-2 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
        </div>
        <div className="w-2.5 h-2.5 border-r border-t border-purple-500/60" />
      </div>

      {/* Subtle Digital Arc / Reticle Guide on Right Side (Image 2 style) */}
      <div className="absolute top-1/2 right-12 sm:right-24 -translate-y-1/2 w-48 h-48 opacity-[0.08] pointer-events-none hidden lg:block text-cyan-400">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="currentColor">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="50" cy="50" r="38" strokeWidth="1" strokeDasharray="1 5" />
          <path d="M 50 15 A 35 35 0 0 1 85 50" strokeWidth="1.5" />
          <line x1="50" y1="5" x2="50" y2="15" strokeWidth="1" />
          <line x1="85" y1="50" x2="95" y2="50" strokeWidth="1" />
        </svg>
      </div>

      {/* Subtle Scan Pulse Line with Cyan tint */}
      <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent top-0 animate-[scanline_8s_linear_infinite]" />

      <style>{`
        @keyframes scanline {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CodingBackground;
