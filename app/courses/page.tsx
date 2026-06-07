import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { courses } from "../_data/courses";

export const metadata: Metadata = {
  title: "Cloud & DevOps Courses",
  description:
    "Beginner-friendly DevOps courses covering Linux, Docker, Kubernetes, AWS, Git, and Terraform — with hands-on projects.",
};

export default function CoursesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// courses"
        title="Cloud & DevOps Courses"
        subtitle="Structured courses built around real projects. No passive video watching — you build things from day one."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-600 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className={`text-xs font-mono px-2 py-0.5 rounded border ${
                  course.level === "Beginner"
                    ? "bg-green-400/10 text-green-400 border-green-400/20"
                    : course.level === "Intermediate"
                    ? "bg-yellow-400/10 text-yellow-400 border-yellow-400/20"
                    : "bg-red-400/10 text-red-400 border-red-400/20"
                }`}
              >
                {course.level}
              </span>
              {course.status === "coming-soon" && (
                <span className="text-xs font-mono text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded">
                  Coming soon
                </span>
              )}
            </div>

            <h2 className="font-bold text-zinc-100 mb-2">{course.title}</h2>
            <p className="text-sm text-zinc-500 mb-4 leading-relaxed flex-1">{course.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {course.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                >
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

      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <p className="font-mono text-xs text-green-400 mb-2">// coming-soon</p>
        <h3 className="text-xl font-bold text-zinc-100 mb-3">Courses are in development</h3>
        <p className="text-zinc-500 max-w-md mx-auto text-sm leading-relaxed">
          Each course is being built with real DevOps workflows — not generic content. Join the waitlist
          to be notified when they launch.
        </p>
      </div>
    </div>
  );
}
