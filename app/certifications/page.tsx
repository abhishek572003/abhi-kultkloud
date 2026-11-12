import type { Metadata } from "next";
import Link from "next/link";
import { certs, certsCheckedOn } from "../_data/certs";
import { CertProgress } from "./CertRoadmap";

export const metadata: Metadata = {
  title: "Certification roadmaps",
  description: "Step-by-step, free roadmaps for AWS Cloud Practitioner, Solutions Architect Associate, AZ-900, AZ-104, CKA and Terraform Associate, with videos, docs and practice for every step.",
};

const order = ["AWS", "Microsoft", "CNCF", "HashiCorp"] as const;

export default function CertificationsPage() {
  return <main className="kk-page">
    <header className="kk-page-head">
      <h1>Certification quests.</h1>
      <p>Pick an exam and follow the steps in order. Every step comes with the free videos, official docs and practice it needs, and ticking it off earns XP. Exam facts were checked on the official pages on {certsCheckedOn}.</p>
    </header>
    {order.map(provider => <section key={provider} className="kk-cert-group" aria-labelledby={`p-${provider}`}>
      <h2 id={`p-${provider}`}>{provider === "CNCF" ? "Kubernetes (CNCF)" : provider}</h2>
      <ul className="kk-cert-grid">
        {certs.filter(c => c.provider === provider).map(c => <li key={c.slug}>
          <Link href={`/certifications/${c.slug}`} className={`kk-cert-card kk-cert-${provider.toLowerCase()}`}>
            <span className="kk-cert-code">{c.code}</span>
            <span className="kk-cert-name">{c.name}</span>
            <span className="kk-cert-sum">{c.summary}</span>
            <span className="kk-cert-meta"><span>{c.level}</span><span>{c.weeks}</span><span>{c.steps.length} steps</span></span>
            <CertProgress cert={c} />
          </Link>
        </li>)}
      </ul>
    </section>)}
  </main>;
}
