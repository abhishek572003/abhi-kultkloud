import type { Metadata } from "next";
import Link from "next/link";
import { careers, careersCheckedOn } from "../_data/careers";
import { Effort, PageBanner } from "../_components/Kit";
import { GoalNote } from "../_components/Quest";

export const metadata: Metadata = { title: "Career paths: effort in, job out", description: "Six Cloud and DevOps jobs, from Cloud Support Associate to MLOps engineer: how long it takes, what to learn, which certifications help, and typical India salary ranges." };

export default function CareersPage() {
  return <>
    <PageBanner title="Pick your job. See the grind." sub="Every role below shows how long it usually takes from zero, what to learn, which certifications employers ask for, and what it typically pays. Choose one as your goal and the whole site points you at it." chips={["6 roles", "Typical India pay, 2026", "Effort estimates"]} seed={11} />
    <div className="kk-page">
      <section className="kk-section">
        <GoalNote />
        <ol className="kk-ladder">
          {careers.map(c => <li key={c.slug}>
            <Link href={`/careers/${c.slug}`} className="kk-pane kk-rung">
              <span className="kk-rung-top"><span className="kk-rung-tier">Level {c.tier}</span><Effort level={c.tier} /></span>
              <h2>{c.title}</h2>
              <p>{c.tagline}</p>
              <dl className="kk-rung-stats">
                <div><dt>Time from zero</dt><dd>{c.months}</dd></div>
                <div className="is-pay"><dt>Starting pay</dt><dd>{c.entryPay}</dd></div>
              </dl>
              <span className="kk-chips">{c.skills.slice(0, 4).map(s => <span key={s} className="kk-chip">{s}</span>)}</span>
            </Link>
          </li>)}
        </ol>
        <p className="kk-disclaimer">Pay is typical India ranges from public 2026 salary guides, cited on each role&apos;s page; real offers vary by city, company and skill. Time assumes about 10–15 hours a week. Checked {careersCheckedOn}.</p>
      </section>
    </div>
  </>;
}
