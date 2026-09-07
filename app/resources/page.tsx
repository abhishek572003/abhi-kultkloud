import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { resources } from "../_data/resources";

export const metadata: Metadata = {
  title: "Free DevOps Resources",
  description:
    "Free cheatsheets, reference guides, and templates for Linux, Git, Docker, Kubernetes, AWS, and Terraform. No email required.",
};

const typeColor: Record<string, string> = {
  Cheatsheet: "text-green-400",
  Reference: "text-blue-400",
  Templates: "text-purple-400",
  Guide: "text-orange-400",
};

const formatBg: Record<string, string> = {
  PDF: "bg-red-400/10 text-red-400 border-red-400/20",
  ZIP: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  MD: "bg-blue-400/10 text-blue-400 border-blue-400/20",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// free-resources"
        title="Free DevOps Resources"
        subtitle="Cheatsheets, templates, and reference guides — all free, no email required. Download and use immediately."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors flex items-start gap-5"
          >
            <div
              className={`shrink-0 w-12 h-12 rounded-lg border flex items-center justify-center font-mono text-xs font-bold ${
                formatBg[resource.format] ?? "bg-zinc-800 text-zinc-400 border-zinc-700"
              }`}
            >
              {resource.format}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h2 className="font-semibold text-zinc-100">{resource.title}</h2>
                <span className={`shrink-0 text-xs font-mono ${typeColor[resource.type] ?? "text-zinc-400"}`}>
                  {resource.type}
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">{resource.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <p className="font-mono text-xs text-green-400 mb-2">{"// more-coming"}</p>
        <h3 className="text-xl font-bold text-zinc-100 mb-3">More resources added regularly</h3>
        <p className="text-zinc-500 max-w-md mx-auto text-sm leading-relaxed">
          New cheatsheets and templates are added as new courses and labs launch. Join the waitlist
          to get notified.
        </p>
      </div>
    </div>
  );
}
