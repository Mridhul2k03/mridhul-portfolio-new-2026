import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [times, setTimes] = useState({
    kozhikode: '',
    zurich: '',
    newyork: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const getFormattedTime = (timeZone: string) =>
        new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now);

      setTimes({
        kozhikode: getFormattedTime('Asia/Kolkata'),
        zurich: getFormattedTime('Europe/Zurich'),
        newyork: getFormattedTime('America/New_York'),
        tokyo: getFormattedTime('Asia/Tokyo'),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const worldClocks = [
    { city: 'Kozhikode', region: 'INDIA / IST', time: times.kozhikode || '16:00:00' },
    { city: 'Zürich', region: 'EUROPE / CET', time: times.zurich || '11:30:00' },
    { city: 'New York', region: 'N. AMERICA / EST', time: times.newyork || '05:30:00' },
    { city: 'Tokyo', region: 'ASIA / JST', time: times.tokyo || '19:30:00' },
  ];

  return (
    <footer className="relative bg-[#070707] text-white border-t border-neutral-900 pt-14 sm:pt-16 overflow-hidden z-20 select-none">
      {/* Top subtle border line */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 sm:pb-14">
          {/* Left Column: Brand, Description, World Clocks */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Brand Header */}
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <Link to="/" className="inline-flex items-center gap-1 group">
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase group-hover:text-neutral-300 transition-colors">
                    MRIDHUL
                  </span>
                  <span className="text-xs font-bold text-neutral-400 group-hover:text-white align-top -mt-2">
                    ©
                  </span>
                </Link>
                <span className="h-4 w-px bg-neutral-800" />
                <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                  Systems Architect
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-neutral-400 max-w-xl font-normal leading-relaxed mb-6 sm:mb-8">
                Architecting high-performance backend infrastructures, distributed microservices, and modern web applications. Engineered with precision in Kerala, India.
              </p>
            </div>

            {/* Live World Clocks (Image 1 style) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-neutral-900/80 mb-8 lg:mb-0">
              {worldClocks.map((clock, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-xs sm:text-sm md:text-base font-bold text-white tracking-wider tabular-nums">
                    {clock.time}
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-neutral-300 mt-0.5">
                    {clock.city}
                  </span>
                  <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                    {clock.region}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Columns: Navigation & Connect (Image 1 style) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-6 sm:gap-12">
            {/* Column 1: Navigation */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block mb-4 sm:mb-6">
                Navigation
              </span>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {[
                  { name: 'Home', path: '/' },
                  { name: 'About', path: '/about' },
                  { name: 'Work [7]', path: '/projects' },
                  { name: 'Skills', path: '/skills' },
                  { name: 'Contact', path: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-xs sm:text-sm md:text-base text-neutral-400 hover:text-cyan-300 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Connect */}
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold block mb-4 sm:mb-6">
                Connect
              </span>
              <ul className="space-y-2.5 sm:space-y-3.5">
                {[
                  { name: 'GitHub', href: 'https://github.com/Mridhul2k03' },
                  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/mridhulkrishnatk/' },
                  { name: 'Instagram', href: 'https://www.instagram.com/__.mridhul.____/' },
                  { name: 'Email Protocol', href: 'mailto:mridhulkrishnatk@gmail.com' },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm md:text-base text-neutral-400 hover:text-cyan-300 transition-colors duration-200 inline-flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <span className="text-neutral-500 group-hover:text-cyan-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                        ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Status Ticker (Image 1 style) */}
        <div className="py-4 sm:py-6 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-neutral-500 text-center md:text-left">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center md:justify-start">
            <span>© 2026 MRIDHUL</span>
            <span>•</span>
            <span className="text-neutral-400">MRIDHULKRISHNA.IN</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline text-neutral-400">MRIDHULKRISHNATK@GMAIL.COM</span>
            <span>•</span>
            <span>BUILT IN KERALA</span>
          </div>

          <div className="text-cyan-400 tracking-wider uppercase text-[10px] sm:text-xs font-semibold">
            ALL SYSTEMS OPERATIONAL
          </div>
        </div>

        {/* Disclaimer / Fine Print */}
        <p className="text-[10px] sm:text-[11px] font-mono text-neutral-600 text-center pb-6 sm:pb-8 pt-2">
          Engineered for scale, high throughput, and zero downtime. Designed with minimalist aesthetics.
        </p>
      </div>

      {/* Halftone / Dot-Matrix Mountain Landscape Art (Image 1) */}
      <div className="w-full relative overflow-hidden pointer-events-none opacity-30 hover:opacity-50 transition-opacity duration-700 h-28 sm:h-44 md:h-64">
        <svg
          viewBox="0 0 1440 380"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-neutral-400"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Dot Pattern 1: Fine Density */}
            <pattern id="dot-fine" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="1.2" fill="currentColor" />
            </pattern>
            {/* Dot Pattern 2: Dense */}
            <pattern id="dot-dense" width="4" height="4" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="currentColor" />
            </pattern>
            {/* Dot Pattern 3: Medium */}
            <pattern id="dot-med" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="1.5" fill="currentColor" />
            </pattern>
            {/* Dot Pattern 4: Sun Stripes */}
            <pattern id="dot-sun" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="2.5" cy="2.5" r="1.5" fill="currentColor" />
            </pattern>
          </defs>

          {/* Dotted Sun / Sphere */}
          <circle cx="1120" cy="180" r="65" fill="url(#dot-sun)" />
          {/* Horizontal lines through sun (Image 1) */}
          <line x1="1050" y1="180" x2="1190" y2="180" stroke="#070707" strokeWidth="6" />
          <line x1="1060" y1="195" x2="1180" y2="195" stroke="#070707" strokeWidth="6" />
          <line x1="1075" y1="210" x2="1165" y2="210" stroke="#070707" strokeWidth="6" />

          {/* Dotted Clouds in Sky */}
          <g fill="url(#dot-fine)">
            <ellipse cx="480" cy="190" rx="42" ry="9" />
            <ellipse cx="180" cy="160" rx="36" ry="8" />
          </g>

          {/* Birds in Sky */}
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M 870 120 Q 876 112 882 120 Q 888 112 894 120" />
            <path d="M 910 138 Q 915 132 920 138 Q 925 132 930 138" />
          </g>

          {/* Background Mountain Peaks */}
          <polygon
            points="720,110 920,380 520,380"
            fill="url(#dot-med)"
          />
          {/* Snowcap on main peak */}
          <polygon
            points="720,110 748,165 735,160 720,172 705,160 692,165"
            fill="#ffffff"
            opacity="0.8"
          />

          {/* Left Mid-Mountain */}
          <polygon
            points="240,200 480,380 0,380"
            fill="url(#dot-fine)"
          />

          {/* Right Mid-Mountain */}
          <polygon
            points="1200,210 1440,380 960,380"
            fill="url(#dot-fine)"
          />

          {/* Foreground Low Mountains & Forest Line (Dense Halftone) */}
          <polygon
            points="460,260 780,380 140,380"
            fill="url(#dot-dense)"
          />
          <polygon
            points="980,270 1340,380 620,380"
            fill="url(#dot-dense)"
          />

          {/* Tree Peak Silhouettes at Base */}
          <g fill="url(#dot-dense)">
            {Array.from({ length: 36 }).map((_, i) => {
              const x = i * 40;
              const y = 330 + (i % 3) * 12;
              return (
                <polygon
                  key={i}
                  points={`${x},${y} ${x + 18},${y - 45} ${x + 36},${y}`}
                />
              );
            })}
          </g>

          {/* Geometric Triangle Emblem at Bottom Left (Image 1) */}
          <g stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.6">
            <polygon points="30,360 45,330 60,360" />
            <polygon points="36,358 45,340 54,358" />
            <line x1="45" y1="340" x2="45" y2="358" />
          </g>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
