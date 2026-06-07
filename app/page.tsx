import type { Metadata } from "next";
import Link from "next/link";
import SectionTitle from "./_components/SectionTitle";
import NewsletterForm from "./_components/NewsletterForm";
import { courses } from "./_data/courses";
import { roadmaps } from "./_data/roadmaps";
import { labs } from "./_data/labs";
import { resources } from "./_data/resources";

export const metadata: Metadata = {
  title: "abhi@KultKloud | Cloud & DevOps Learning from Zero to Job-Ready",
  description:
    "Free Cloud and DevOps roadmaps, courses, and hands-on labs for beginners. Learn Linux, Docker, Kubernetes, AWS, CI/CD, and Terraform with Abhishek Tiwari.",
};

const topics = [
  { icon: "🐧", name: "Linux & Shell", desc: "Command line fundamentals every DevOps engineer uses daily." },
  { icon: "🔀", name: "Git & GitHub", desc: "Version control, branching strategies, and collaboration workflows." },
  { icon: "🐳", name: "Docker", desc: "Build and ship containers — from Dockerfile to Docker Compose." },
  { icon: "⚓", name: "Kubernetes", desc: "Container orchestration at scale. Pods, Deployments, Services." },
  { icon: "☁️", name: "AWS Cloud", desc: "EC2, S3, IAM, VPC, RDS, Lambda — real-world cloud architecture." },
  { icon: "⚡", name: "CI/CD Pipelines", desc: "GitHub Actions, automated testing, and continuous deployment." },
  { icon: "📦", name: "Terraform", desc: "Infrastructure as Code. Provision cloud resources with HCL." },
  { icon: "🎓", name: "Cloud Certs", desc: "AWS, CKA, Terraform Associate — guided certification prep." },
];

const learningPath = [
  {
    step: 1,
    title: "Linux & Terminal",
    desc: "Navigate the command line, manage files, users, and permissions.",
    accent: "text-green-400",
    border: "border-green-400/20",
    bg: "bg-green-400/5",
  },
  {
    step: 2,
    title: "Git & Version Control",
    desc: "Track code changes, collaborate on GitHub, use branches and PRs.",
    accent: "text-blue-400",
    border: "border-blue-400/20",
    bg: "bg-blue-400/5",
  },
  {
    step: 3,
    title: "Docker & Containers",
    desc: "Package applications, run containers, use Docker Compose.",
    accent: "text-cyan-400",
    border: "border-cyan-400/20",
    bg: "bg-cyan-400/5",
  },
  {
    step: 4,
    title: "Cloud Basics (AWS)",
    desc: "EC2, S3, IAM, VPC — get comfortable with real cloud services.",
    accent: "text-orange-400",
    border: "border-orange-400/20",
    bg: "bg-orange-400/5",
  },
  {
    step: 5,
    title: "CI/CD Pipelines",
    desc: "Automate builds, tests, and deployments with GitHub Actions.",
    accent: "text-purple-400",
    border: "border-purple-400/20",
    bg: "bg-purple-400/5",
  },
  {
    step: 6,
    title: "Kubernetes",
    desc: "Orchestrate containers at scale — the industry standard.",
    accent: "text-yellow-400",
    border: "border-yellow-400/20",
    bg: "bg-yellow-400/5",
  },
  {
    step: 7,
    title: "IaC with Terraform",
    desc: "Provision and manage cloud infrastructure as code.",
    accent: "text-pink-400",
    border: "border-pink-400/20",
    bg: "bg-pink-400/5",
  },
];

export default function HomePage() {
  const featuredRoadmaps = roadmaps.slice(0, 3);
  const featuredCourses = courses.slice(0, 3);
  const featuredLabs = labs.slice(0, 3);
  const featuredResources = resources.slice(0, 6);

  return (
    <div className="flex flex-col">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden bg-zinc-950">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #4ade80 1px, transparent 1px), linear-gradient(to bottom, #4ade80 1px, transparent 1px)",
            backgroundSize: "3rem 3rem",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/50 to-zinc-950" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            {/* Terminal badge */}
            <div className="mb-8 flex items-center gap-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 font-mono text-xs sm:text-sm w-fit max-w-full overflow-hidden">
              <span className="shrink-0 w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-zinc-500 shrink-0">$</span>
              <span className="text-zinc-300 shrink-0">whoami</span>
              <span className="text-zinc-600 mx-1 shrink-0">→</span>
              <span className="text-green-400 truncate">Abhishek Tiwari</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-100 mb-6 leading-tight">
              Cloud &amp; DevOps Learning{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                from Zero to Job-Ready
              </span>
            </h1>

            <p className="text-lg text-zinc-400 max-w-2xl mb-10 leading-relaxed">
              Practical, hands-on DevOps education for complete beginners. Learn Linux, Docker, Kubernetes, AWS, CI/CD, and
              Terraform — with real projects, not just slides.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-zinc-950 font-semibold rounded-lg hover:bg-green-400 transition-colors text-sm"
              >
                Start Learning Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 font-semibold rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors text-sm"
              >
                View Roadmaps
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-500">
              {["100% free to start", "No signup required", "Beginner-friendly", "Real-world projects"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <span className="text-green-400">✓</span>
                    {item}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── What You'll Learn ──────────────────────────────────── */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// what-you-ll-learn"
            title="Everything You Need to Break Into DevOps"
            subtitle="From the Linux terminal to cloud infrastructure — a complete, structured skill set for beginners entering the field."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {topics.map((topic) => (
              <div
                key={topic.name}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors"
              >
                <span className="text-2xl mb-3 block">{topic.icon}</span>
                <h3 className="font-semibold text-zinc-100 mb-1.5 text-sm">{topic.name}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Beginner Learning Path ─────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// learning-path"
            title="Your Beginner Learning Path"
            subtitle="Follow this structured path in sequence. Each skill builds on the previous one — this is how real DevOps engineers learn."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {learningPath.map((item) => (
              <div
                key={item.step}
                className={`bg-zinc-900 border ${item.border} ${item.bg} rounded-xl p-5`}
              >
                <div className={`font-mono text-xs mb-3 ${item.accent}`}>
                  step_{String(item.step).padStart(2, "0")}
                </div>
                <h3 className="font-semibold text-zinc-100 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
            <div className="bg-gradient-to-br from-green-400/10 to-blue-400/10 border border-green-400/30 rounded-xl p-5 flex flex-col items-center justify-center text-center">
              <div className="font-mono text-xs text-green-400 mb-2">// destination</div>
              <p className="font-bold text-zinc-100 text-sm leading-snug">
                Job-Ready<br />DevOps Engineer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Roadmaps ──────────────────────────────────── */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// roadmaps"
            title="Featured Roadmaps"
            subtitle="Structured paths to take you from beginner to job-ready — organized by role and technology."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRoadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors flex flex-col"
              >
                <h3 className="font-semibold text-zinc-100 mb-2">{roadmap.title}</h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{roadmap.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {roadmap.topics.slice(0, 4).map((topic) => (
                    <span key={topic} className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                      {topic}
                    </span>
                  ))}
                  {roadmap.topics.length > 4 && (
                    <span className="text-xs font-mono bg-zinc-800 text-zinc-500 px-2 py-0.5 rounded">
                      +{roadmap.topics.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                  <span className="text-xs text-zinc-600 font-mono">~{roadmap.timeEstimate}</span>
                  <Link
                    href={`/roadmaps`}
                    className="text-xs text-green-400 hover:text-green-300 transition-colors"
                  >
                    View roadmap →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/roadmaps"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors border border-green-400/20 px-5 py-2 rounded-lg hover:bg-green-400/5"
            >
              View all roadmaps →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Courses ───────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// courses"
            title="Featured Courses"
            subtitle="Structured, beginner-friendly courses built around hands-on projects — not passive watching."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono bg-blue-400/10 text-blue-400 border border-blue-400/20 px-2 py-0.5 rounded">
                    {course.level}
                  </span>
                  {course.status === "coming-soon" && (
                    <span className="text-xs font-mono text-zinc-600">Coming soon</span>
                  )}
                </div>
                <h3 className="font-semibold text-zinc-100 mb-2">{course.title}</h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{course.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {course.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-xs text-zinc-600 font-mono pt-4 border-t border-zinc-800">
                  <span>{course.duration}</span>
                  <span>{course.modules} modules</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors border border-green-400/20 px-5 py-2 rounded-lg hover:bg-green-400/5"
            >
              View all courses →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Hands-on Labs ─────────────────────────────────────── */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// labs"
            title="Hands-on Labs & Projects"
            subtitle="Real DevOps tasks on real tools. Build your portfolio while you learn."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredLabs.map((lab) => (
              <div
                key={lab.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 transition-colors"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded border ${
                      lab.level === "Beginner"
                        ? "bg-green-400/10 text-green-400 border-green-400/20"
                        : "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                    }`}
                  >
                    {lab.level}
                  </span>
                  <span className="text-xs text-zinc-600 font-mono">{lab.duration}</span>
                </div>
                <h3 className="font-semibold text-zinc-100 mb-2">{lab.title}</h3>
                <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{lab.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {lab.tools.map((tool) => (
                    <span key={tool} className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/labs"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors border border-green-400/20 px-5 py-2 rounded-lg hover:bg-green-400/5"
            >
              View all labs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Free Resources ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag="// free-resources"
            title="Free DevOps Resources"
            subtitle="Cheatsheets, reference guides, and templates — all free, no email required."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredResources.map((resource) => (
              <div
                key={resource.id}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-600 transition-colors flex items-start gap-4"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono text-[10px] text-zinc-400 font-semibold">
                  {resource.format}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-zinc-100 text-sm">{resource.title}</h3>
                  </div>
                  <p className="text-xs text-zinc-500 leading-relaxed mb-2">{resource.description}</p>
                  <span className="text-xs font-mono text-green-400">{resource.type}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 text-zinc-300 rounded-lg hover:bg-zinc-800 hover:border-zinc-600 transition-colors text-sm font-semibold"
            >
              View All Free Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Instructor / About ─────────────────────────────────── */}
      <section className="py-20 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center font-mono text-xl font-bold text-zinc-950">
                  AT
                </div>
                <div>
                  <div className="font-mono text-xs text-green-400 mb-1">// instructor</div>
                  <h2 className="text-xl font-bold text-zinc-100 mb-1">Abhishek Tiwari</h2>
                  <p className="text-sm text-zinc-500 mb-5 font-mono">Cloud &amp; DevOps Practitioner · Educator</p>
                  <p className="text-zinc-400 leading-relaxed mb-4">
                    I&apos;m a Cloud and DevOps learner-practitioner who has worked across AWS, Azure, GCP,
                    Docker, Jenkins, Kubernetes, Terraform, Linux, GitHub, and CI/CD. I built abhi@KultKloud
                    because beginners often get lost between random courses, scattered documentation,
                    certifications, and tool overload.
                  </p>
                  <p className="text-zinc-400 leading-relaxed mb-6">
                    Everything here is practical. You&apos;ll learn by doing — not by watching slides.
                    Every roadmap, course, and lab is built around real DevOps workflows.
                  </p>
                  <Link
                    href="/about"
                    className="text-sm text-green-400 hover:text-green-300 transition-colors"
                  >
                    Full story →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Newsletter / Waitlist ──────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionTitle
              tag="// waitlist"
              title="Get Notified When Courses Launch"
              subtitle="Join the waitlist. Be the first to know when new courses, labs and roadmaps go live."
            />
            <div className="flex justify-center">
              <NewsletterForm />
            </div>
            <p className="mt-4 text-xs text-zinc-600 font-mono">
              No spam. Unsubscribe anytime. Useful content only — not marketing noise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
