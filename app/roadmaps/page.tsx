import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { roadmaps } from "../_data/roadmaps";

export const metadata: Metadata = {
  title: "DevOps & Cloud Roadmaps",
  description:
    "Step-by-step learning roadmaps for DevOps, AWS, Kubernetes, Linux, CI/CD, and Terraform. Follow the sequence — it matters.",
};

export default function RoadmapsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// roadmaps"
        title="DevOps & Cloud Learning Roadmaps"
        subtitle="Structured paths to take you from complete beginner to job-ready. Follow the sequence — each skill builds on the previous one."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roadmaps.map((roadmap) => (
          <div
            key={roadmap.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 transition-colors"
          >
            <h2 className="font-bold text-zinc-100 text-lg mb-2">{roadmap.title}</h2>
            <p className="text-sm text-zinc-500 mb-5 leading-relaxed flex-1">{roadmap.description}</p>

            <div className="mb-5">
              <p className="text-xs text-zinc-600 font-mono mb-2">{"// topics covered"}</p>
              <div className="flex flex-wrap gap-1.5">
                {roadmap.topics.map((topic) => (
                  <span
                    key={topic}
                    className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-mono pt-4 border-t border-zinc-800">
              <span className="text-zinc-600">~{roadmap.timeEstimate}</span>
              <span className="text-green-400/50 cursor-default">Coming soon</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
