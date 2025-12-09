const TexorLabLogo = () => {
  return (
    <div className="flex items-center gap-2">
      {/* Logo SVG */}
      <svg viewBox="0 0 110 110" className="w-14 h-14">
        <defs>
          <linearGradient id="TexorLab-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>
        <path d="M65 20 L80 20 L40 85 L25 85 Z" fill="url(#TexorLab-gradient)" />
        <path d="M40 85 L25 85 L32.5 95 Z" fill="url(#TexorLab-gradient)" />
        <circle
          cx="30"
          cy="30"
          r="12"
          stroke="url(#TexorLab-gradient)"
          strokeWidth="6"
          fill="none"
        />
        <path
          d="M38 38 L60 60"
          stroke="url(#TexorLab-gradient)"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <g fill="url(#TexorLab-gradient)">
          <rect x="65" y="55" width="8" height="8" rx="1" />
          <rect x="75" y="55" width="8" height="8" rx="1" />
          <rect x="85" y="55" width="8" height="8" rx="1" />

          <rect x="65" y="65" width="8" height="8" rx="1" />
          <rect x="75" y="65" width="8" height="8" rx="1" />
          <rect x="85" y="65" width="8" height="8" rx="1" />
        </g>
      </svg>

      {/* Logo Text */}
      <span className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent uppercase">
        TexorLab
      </span>
    </div>
  );
};

export default TexorLabLogo;
