export const IconMap = {
  website: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M3 7h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 11h.01M11 11h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  app: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="6" y="3" width="12" height="18" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="0.8" fill="currentColor" />
    </svg>
  ),
  bug: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M12 7v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M8 9l-3-1M16 9l3-1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M7 18c1-2.5 5-2.5 6 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  marketing: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M3 12h4l5-6v12l-5-6H3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 9a3 3 0 010 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  map: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M12 2v6l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M20 6v12l-4-2-4 2-4-2V4l4 2 4-2 4 2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  seo: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <circle cx="11" cy="11" r="6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  social: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <path d="M8 12h8M8 8h8M8 16h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  video: (props) => (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" {...props}>
      <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M17 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};
