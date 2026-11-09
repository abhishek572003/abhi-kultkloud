// Decorative "inflated" cloud: pure SVG, no runtime JS. Delete the component and its
// `.kk-hero-art` wrapper to remove it; the hero grid falls back to a single column.
const lobes = [
  { cx: 150, cy: 178, r: 72 },
  { cx: 246, cy: 132, r: 98 },
  { cx: 338, cy: 182, r: 68 },
];

export default function InflatedCloud() {
  return (
    <svg className="kk-cloud" viewBox="0 0 480 340" role="presentation" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="kk-cloud-shape">
          {lobes.map(l => <circle key={l.cx} cx={l.cx} cy={l.cy} r={l.r} />)}
          <rect x="82" y="176" width="324" height="78" rx="39" />
        </clipPath>
        <linearGradient id="kk-cloud-body" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.55" stopColor="#DCE2FF" />
          <stop offset="1" stopColor="#8E9AE6" />
        </linearGradient>
        <radialGradient id="kk-cloud-lobe" cx="0.38" cy="0.3" r="0.75">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="0.5" stopColor="#F1F3FF" stopOpacity="0.35" />
          <stop offset="0.86" stopColor="#7381D9" stopOpacity="0.0" />
          <stop offset="1" stopColor="#5664C6" stopOpacity="0.38" />
        </radialGradient>
        <filter id="kk-cloud-blur" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="9" /></filter>
        <filter id="kk-cloud-shadow" x="-30%" y="-200%" width="160%" height="500%"><feGaussianBlur stdDeviation="10" /></filter>
      </defs>

      <ellipse className="kk-cloud-ground" cx="244" cy="306" rx="150" ry="13" fill="#050826" opacity="0.55" filter="url(#kk-cloud-shadow)" />

      <g className="kk-cloud-body">
        <g clipPath="url(#kk-cloud-shape)">
          <rect x="60" y="20" width="370" height="250" fill="url(#kk-cloud-body)" />
          {/* each lobe keeps its own volume, so the seams read as soft creases */}
          {lobes.map(l => <circle key={l.cx} cx={l.cx} cy={l.cy} r={l.r} fill="url(#kk-cloud-lobe)" />)}
          <ellipse cx="246" cy="262" rx="190" ry="34" fill="#4D5ABF" opacity="0.45" filter="url(#kk-cloud-blur)" />
          <ellipse cx="214" cy="80" rx="46" ry="22" fill="#FFFFFF" opacity="0.85" filter="url(#kk-cloud-blur)" />
          <ellipse cx="128" cy="140" rx="26" ry="13" fill="#FFFFFF" opacity="0.7" filter="url(#kk-cloud-blur)" />
        </g>
        {/* inflatable seam */}
        <path d="M104 214 C 180 232, 312 232, 386 214" fill="none" stroke="#6F7DD6" strokeOpacity="0.45" strokeWidth="2" strokeDasharray="2 7" strokeLinecap="round" />
      </g>
    </svg>
  );
}
