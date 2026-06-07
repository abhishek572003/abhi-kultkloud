import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { certifications } from "../_data/certifications";

export const metadata: Metadata = {
  title: "Cloud & DevOps Certifications Guide",
  description:
    "Certification guides for AWS, CKA, CKAD, Terraform Associate, and LPIC-1. Know exactly what to study and in what order.",
};

const levelColor: Record<string, string> = {
  Foundational: "bg-green-400/10 text-green-400 border-green-400/20",
  Associate: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  Intermediate: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  Professional: "bg-purple-400/10 text-purple-400 border-purple-400/20",
  Specialty: "bg-red-400/10 text-red-400 border-red-400/20",
};

export default function CertificationsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// certifications"
        title="Cloud & DevOps Certification Guides"
        subtitle="Know which certs matter, in what order to take them, and exactly what to study — without wasting money on the wrong exam first."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="font-bold text-zinc-100">{cert.name}</h2>
                <p className="text-xs font-mono text-zinc-500 mt-0.5">
                  {cert.provider} · {cert.code}
                </p>
              </div>
              <span
                className={`shrink-0 text-xs font-mono px-2 py-0.5 rounded border ${
                  levelColor[cert.level] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
                }`}
              >
                {cert.level}
              </span>
            </div>

            <p className="text-sm text-zinc-500 mb-5 leading-relaxed">{cert.description}</p>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { label: "Duration", value: cert.examDetails.duration },
                { label: "Questions", value: cert.examDetails.questions },
                { label: "Pass mark", value: cert.examDetails.passMark },
                { label: "Exam cost", value: cert.examDetails.cost },
              ].map(({ label, value }) => (
                <div key={label} className="bg-zinc-800/60 rounded-lg p-3">
                  <p className="text-xs text-zinc-600 font-mono mb-0.5">{label}</p>
                  <p className="text-sm font-semibold text-zinc-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
              <span className="text-xs text-zinc-600 font-mono">Recommended for:</span>
              <span className="text-xs text-zinc-400">{cert.recommendedFor}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 bg-zinc-900/60 border border-zinc-800 rounded-xl px-6 py-4 flex items-start gap-3">
        <span className="text-yellow-400 text-sm mt-0.5 shrink-0">⚠</span>
        <p className="text-xs text-zinc-500 leading-relaxed">
          Exam prices, question counts, pass marks, and durations listed above are for reference only and may
          change. Always verify the latest details on the official certification provider&apos;s website before
          registering or paying for an exam.
        </p>
      </div>
    </div>
  );
}
