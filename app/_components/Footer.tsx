import Link from "next/link";

const footerLinks: Record<string, { href: string; label: string }[]> = {
  Learn: [
    { href: "/roadmaps", label: "Roadmaps" },
    { href: "/courses", label: "Courses" },
    { href: "/labs", label: "Labs" },
    { href: "/certifications", label: "Certifications" },
  ],
  Resources: [
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Free Resources" },
    { href: "/resources", label: "Cheatsheets" },
  ],
  Connect: [
    { href: "#", label: "YouTube" },
    { href: "#", label: "GitHub" },
    { href: "#", label: "LinkedIn" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-mono text-lg font-bold">
                <span className="text-green-400">abhi</span>
                <span className="text-zinc-500">@</span>
                <span className="text-blue-400">KultKloud</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Cloud &amp; DevOps learning from zero to job-ready. By Abhishek Tiwari.
            </p>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-zinc-300 mb-3">{section}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600 font-mono">
            $ echo &quot;Built with Next.js + Tailwind — by Abhishek Tiwari&quot;
          </p>
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} abhi@KultKloud. All rights reserved 2026.
          </p>
        </div>
      </div>
    </footer>
  );
}
