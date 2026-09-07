import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { labs } from "../_data/labs";

export const metadata: Metadata = {
  title: "Hands-on DevOps Labs & Projects",
  description:
    "Real hands-on labs for DevOps engineers. Deploy on AWS, build CI/CD pipelines, containerize apps with Docker, and more.",
};

export default function LabsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// labs"
        title="Hands-on Labs & Projects"
        subtitle="Real DevOps tasks on real tools. Each lab is a self-contained project you can add to your portfolio."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab) => (
          <div
            key={lab.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded border ${
                  lab.level === "Beginner"
                    ? "bg-green-400/10 text-green-400 border-green-400/20"
                    : lab.level === "Intermediate"
                    ? "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                    : "bg-red-400/10 text-red-400 border-red-400/20"
                }`}
              >
                {lab.level}
              </span>
              <span className="text-xs text-zinc-600 font-mono">{lab.duration}</span>
            </div>

            <h2 className="font-bold text-zinc-100 mb-2">{lab.title}</h2>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{lab.description}</p>

            <div>
              <p className="text-xs text-zinc-600 font-mono mb-2">{"// tools used"}</p>
              <div className="flex flex-wrap gap-1.5">
                {lab.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <p className="font-mono text-xs text-green-400 mb-2">{"// coming-soon"}</p>
        <h3 className="text-xl font-bold text-zinc-100 mb-3">Full lab guides coming soon</h3>
        <p className="text-zinc-500 max-w-md mx-auto text-sm leading-relaxed">
          Each lab will have step-by-step instructions, diagrams, and a working solution you can reference.
          Join the waitlist to be notified.
        </p>
      </div>
    </div>
  );
}
