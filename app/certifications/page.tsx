import type { Metadata } from "next";
import Link from "next/link";
import { certs, certsCheckedOn, STAGES } from "../_data/certs";
import { PageBanner } from "../_components/Kit";
import { TaskProgress } from "../_components/Quest";

export const metadata: Metadata = {
  title: "Certification quests",
  description: "Step-by-step free roadmaps for the most valued Cloud, DevOps, Kubernetes and AI certifications: AWS, Azure, Google Cloud, CKA, CKAD, KCNA, Terraform and Claude, with videos, docs and practice for every step.",
};

export default function CertificationsPage() {
  return <>
    <PageBanner title="Certification quests" sub={`${certs.length} of the certifications employers value most, each broken into steps with the exact free videos, official docs, labs and practice to use. Exam facts checked on the official pages on ${certsCheckedOn}.`} chips={["AWS", "Azure", "Google Cloud", "Kubernetes", "Terraform", "Claude"]} seed={41} />
    <div className="kk-page">
      {STAGES.map(st => <section key={st.stage} className="kk-stage" aria-labelledby={`st-${st.stage}`}>
        <div className="kk-stage-head"><h2 id={`st-${st.stage}`}>{st.stage}</h2><p>{st.blurb}</p></div>
        <ul className="kk-grid">
          {certs.filter(c => c.stage === st.stage).map(c => <li key={c.slug}><Link className={`kk-pane kk-card kk-cert-card kk-cert-${c.provider.toLowerCase()}`} href={`/certifications/${c.slug}`}>
            <span className="kk-cert-code">{c.provider} · {c.code}</span>
            <h3 className="kk-cert-name">{c.name}</h3>
            <p className="kk-cert-sum">{c.summary}</p>
            <span className="kk-meta"><span className="kk-chip">{c.level}</span><span className="kk-chip">{c.weeks}</span><span className="kk-chip">{c.steps.length} steps</span></span>
            <TaskProgress ids={c.steps.map(s => `cert:${c.slug}:${s.id}`)} />
          </Link></li>)}
        </ul>
      </section>)}
    </div>
  </>;
}
