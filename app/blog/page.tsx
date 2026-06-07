import type { Metadata } from "next";
import SectionTitle from "../_components/SectionTitle";
import { blogPosts } from "../_data/blog";

export const metadata: Metadata = {
  title: "DevOps Blog",
  description:
    "Practical DevOps articles for beginners — Docker, Kubernetes, AWS, Git, Linux, CI/CD and cloud engineering explained simply.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <SectionTitle
        tag="// blog"
        title="DevOps Blog"
        subtitle="Practical articles that explain DevOps concepts clearly — no jargon, no generic content. Written for beginners."
        align="left"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-600 transition-colors flex flex-col"
          >
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h2 className="font-bold text-zinc-100 mb-2 text-lg leading-snug">{post.title}</h2>
            <p className="text-sm text-zinc-500 mb-5 leading-relaxed flex-1">{post.description}</p>

            <div className="flex items-center justify-between text-xs text-zinc-600 font-mono">
              <span>{formatDate(post.date)}</span>
              <span>{post.readTime} read</span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-16 bg-zinc-900 border border-zinc-800 rounded-xl p-8 text-center">
        <p className="font-mono text-xs text-green-400 mb-2">// more-posts</p>
        <h3 className="text-xl font-bold text-zinc-100 mb-3">More articles coming soon</h3>
        <p className="text-zinc-500 max-w-md mx-auto text-sm">
          New posts published regularly on DevOps, cloud, and practical engineering topics.
        </p>
      </div>
    </div>
  );
}
