import type { DomainIcon } from "../_data/discovery";

const paths: Record<DomainIcon, React.ReactNode> = {
  terminal: <><rect x="3" y="4.5" width="18" height="15" rx="3" /><path d="M7.5 10l3 2.5-3 2.5M12.5 15.5h4" /></>,
  cloud: <path d="M7 18.5h10.5a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.6 9.4 4.6 4.6 0 0 0 7 18.5Z" />,
  branch: <><circle cx="7" cy="6" r="2" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="9" r="2" /><path d="M7 8v8M17 11c0 3-3 4-8.5 5.5" /></>,
  container: <><path d="M12 3.5l7.5 4.2v8.6L12 20.5l-7.5-4.2V7.7L12 3.5Z" /><path d="M4.5 7.7L12 12l7.5-4.3M12 12v8.5" /></>,
  layers: <><path d="M12 4l8 4-8 4-8-4 8-4Z" /><path d="M4 12l8 4 8-4M4 16l8 4 8-4" /></>,
  chart: <><path d="M4 19.5h16" /><path d="M6.5 16v-4M11 16V8M15.5 16v-6M20 16V5" /></>,
  chip: <><rect x="6.5" y="6.5" width="11" height="11" rx="2" /><path d="M10 10h4v4h-4zM9.5 3.5v3M14.5 3.5v3M9.5 17.5v3M14.5 17.5v3M3.5 9.5h3M3.5 14.5h3M17.5 9.5h3M17.5 14.5h3" /></>,
};

export default function DomainGlyph({ icon }: { icon: DomainIcon }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">{paths[icon]}</svg>;
}
