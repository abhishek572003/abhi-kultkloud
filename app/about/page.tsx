import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Abhishek Tiwari",
  description:
    "Beginner-friendly Cloud and DevOps roadmaps, courses, labs, certifications, and free resources by Abhishek Tiwari.",
};

const skills = [
  "Linux & Shell Scripting",
  "Docker & Kubernetes",
  "AWS · Azure · GCP",
  "CI/CD (GitHub Actions, Jenkins)",
  "Terraform / IaC",
  "Git & GitHub",
  "Python for DevOps",
  "Monitoring & Observability",
];

const platformPrinciples = [
  {
    title: "Practical over theoretical",
    desc: "Every concept is taught with a real example you can run on your machine or in the cloud.",
  },
  {
    title: "Sequence matters",
    desc: "The learning path is designed so each skill builds on the previous one. No random jumps.",
  },
  {
    title: "Beginner-friendly language",
    desc: "No jargon without explanation. If a term is used, it is defined immediately.",
  },
  {
    title: "Free to start, always",
    desc: "Core roadmaps, cheatsheets, and beginner content will always be free.",
  },
];

const socialLinks = [
  { label: "YouTube", href: "#", note: "Coming soon" },
  { label: "GitHub", href: "#", note: "Coming soon" },
  { label: "LinkedIn", href: "#", note: "Coming soon" },
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="font-mono text-xs text-green-400 mb-4">{"// about"}</p>
        <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
          <div className="shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center font-mono text-2xl font-bold text-zinc-950">
            AT
          </div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-100 mb-1">Abhishek Tiwari</h1>
            <p className="text-zinc-500 font-mono text-sm mb-3">
              Cloud &amp; DevOps Practitioner · Educator
            </p>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Azure", "GCP", "Kubernetes", "Terraform", "CI/CD", "Linux"].map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2.5 py-1 rounded-md border border-zinc-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Story */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">
          <span className="font-mono text-green-400 text-sm mr-2">01.</span>
          Why I built this
        </h2>
        <div className="space-y-4 text-zinc-400 leading-relaxed">
          <p>
            I&apos;m a Cloud and DevOps learner-practitioner who has worked across AWS, Azure, GCP, Docker,
            Jenkins, Kubernetes, Terraform, Linux, GitHub, and CI/CD. I built abhi@KultKloud because
            beginners often get lost between random courses, scattered documentation, certifications,
            and tool overload.
          </p>
          <p>
            The DevOps ecosystem is genuinely overwhelming when you start. You don&apos;t know which tool
            to learn first, which certification actually matters, or whether you even need one. abhi@KultKloud
            cuts through that noise with a structured, practical path.
          </p>
          <p>
            Everything here is built around real workflows — not theoretical slides. The roadmaps,
            labs, and content reflect how DevOps is actually practiced in engineering teams, not how
            it is described in vendor documentation.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">
          <span className="font-mono text-green-400 text-sm mr-2">02.</span>
          What I teach
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-400"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Platform principles */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-zinc-100 mb-4">
          <span className="font-mono text-green-400 text-sm mr-2">03.</span>
          How this platform works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {platformPrinciples.map((principle) => (
            <div
              key={principle.title}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
            >
              <h3 className="font-semibold text-zinc-100 mb-1.5 text-sm">{principle.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">{principle.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <h2 className="font-semibold text-green-400 mb-3 text-sm font-mono">
          {"// connect"}
        </h2>
        <p className="text-zinc-400 text-sm mb-5 leading-relaxed">
          Social profiles are being set up. YouTube tutorials, GitHub code, and LinkedIn updates
          are coming soon.
        </p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map(({ label, href, note }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-sm text-zinc-400 cursor-default"
              aria-disabled="true"
            >
              {label}
              <span className="text-xs font-mono text-zinc-600">{note}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/roadmaps"
          className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-zinc-950 font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm"
        >
          Start Learning Free →
        </Link>
      </div>
    </div>
  );
}
