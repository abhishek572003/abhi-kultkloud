"use client";

import Link from "next/link";
import { useState } from "react";
import { careers } from "../_data/careers";
import { paths } from "../_data/paths";
import { certs } from "../_data/certs";
import { projects } from "../_data/projects";
import { GoalButton } from "../_components/Quest";

const LEVELS = [
  { id: "new", label: "Complete beginner" },
  { id: "some", label: "I know some IT or coding" },
  { id: "pro", label: "I already work in IT" },
];
const INTERESTS = [
  { id: "cloud-support-associate", label: "Helping people fix problems" },
  { id: "junior-devops-engineer", label: "Automating everything" },
  { id: "cloud-engineer", label: "Designing cloud systems" },
  { id: "site-reliability-engineer", label: "Keeping big systems alive" },
  { id: "platform-engineer", label: "Building tools for developers" },
  { id: "mlops-ai-infrastructure-engineer", label: "Running AI in production" },
];
const HOURS = [
  { id: "lt5", label: "Under 5 h", note: "Expect roughly twice the time shown. Consistency beats speed." },
  { id: "5-10", label: "5–10 h", note: "A little slower than the estimate, still very doable." },
  { id: "10-20", label: "10–20 h", note: "Right on the estimate." },
  { id: "20+", label: "20 h or more", note: "You could finish faster than the estimate." },
];

function Options({ name, options, value, onChange }: { name: string; options: { id: string; label: string }[]; value: string; onChange: (v: string) => void }) {
  return <div className="kk-options">{options.map(o => <label key={o.id} className="kk-option"><input type="radio" name={name} value={o.id} checked={value === o.id} onChange={() => onChange(o.id)} /><span>{o.label}</span></label>)}</div>;
}

export default function ClassPicker() {
  const [level, setLevel] = useState("new");
  const [interest, setInterest] = useState("junior-devops-engineer");
  const [hours, setHours] = useState("10-20");

  const target = careers.find(c => c.slug === interest)!;
  // Advanced roles are rarely first jobs: suggest a stepping stone for beginners.
  const stepping = level === "new" && target.tier >= 4 ? careers.find(c => c.slug === "junior-devops-engineer")! : null;
  const start = stepping ?? target;
  const firstPath = paths.find(p => p.slug === (level === "pro" ? start.paths[1] ?? start.paths[0] : start.paths[0]))!;
  const firstCert = certs.find(c => c.slug === start.certs[0])!;
  const firstProject = projects.find(p => p.slug === start.projects[0])!;
  const hourNote = HOURS.find(h => h.id === hours)!.note;

  return <div className="kk-picker">
    <div>
      <div className="kk-pane kk-q"><fieldset><legend>1. Where are you now?</legend><Options name="level" options={LEVELS} value={level} onChange={setLevel} /></fieldset></div>
      <div className="kk-pane kk-q"><fieldset><legend>2. What sounds most fun?</legend><Options name="interest" options={INTERESTS} value={interest} onChange={setInterest} /></fieldset></div>
      <div className="kk-pane kk-q"><fieldset><legend>3. Hours a week you can give it</legend><Options name="hours" options={HOURS} value={hours} onChange={setHours} /></fieldset></div>
    </div>
    <section className="kk-pane kk-result" aria-live="polite" aria-labelledby="class-title">
      <span className="kk-tag kk-tag-mint">Your class</span>
      <h2 id="class-title">{target.title}</h2>
      <p>{target.tagline} Usually {target.months} from zero, starting around {target.entryPay} in India. {hourNote}</p>
      {stepping && <p style={{ marginTop: 10 }}><b>Stepping stone:</b> most people reach this role after a first job as a {stepping.title}. Start there.</p>}
      <ol>
        <li>Learn: <Link href={`/learning-paths/${firstPath.slug}`}>{firstPath.name}</Link></li>
        <li>Certify: <Link href={`/certifications/${firstCert.slug}`}>{firstCert.name}</Link></li>
        <li>Build: <Link href={`/projects/${firstProject.slug}`}>{firstProject.title}</Link></li>
        <li>Full plan: <Link href={`/careers/${target.slug}`}>{target.title} roadmap</Link></li>
      </ol>
      <div className="kk-actions"><GoalButton slug={target.slug} title={target.title} /></div>
    </section>
  </div>;
}
