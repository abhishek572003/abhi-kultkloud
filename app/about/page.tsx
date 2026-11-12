import type { Metadata } from "next";
import Link from "next/link";
import { PageBanner } from "../_components/Kit";
import { owner, socials } from "../_data/site";

export const metadata: Metadata = { title: "About KultKloud", description: "Why KultKloud exists, how resources are chosen, and how the site stays up to date." };

export default function AboutPage() {
  return <>
    <PageBanner title="About KultKloud" sub="A free, job-focused map of Cloud, DevOps and AI infrastructure, for people who want the job, not just the course." seed={61} />
    <div className="kk-page">
      <div className="kk-prose">
        <h2>Why it exists</h2>
        <p>The free material for learning cloud is excellent, and scattered across thousands of videos, docs and blogs. Beginners lose months choosing what to watch. KultKloud puts it in order: which job to aim for, what to learn first, which certification matters, and which project proves it.</p>
        <h2>How resources are chosen</h2>
        <p>Only free resources, preferring official documentation and well-known teachers. Every link is opened and checked by hand before it goes on the site, and every exam fact is taken from the provider&apos;s official page. We link to the original creators and never re-host their work.</p>
        <h2>How it stays current</h2>
        <p>New videos and announcements from official blogs and trusted channels flow in every day. Every week, exam facts and resource links are re-checked and fixed automatically. See what is new on <Link href="/updates">Daily updates</Link>.</p>
        <h2>Your progress</h2>
        <p>XP, badges and ticks are saved in your browser only. There is no account, no tracking and nothing to sign up for.</p>
        <h2>Who makes it</h2>
        <p>KultKloud is built and curated by {owner}. {socials.map((s, i) => <span key={s.href}>{i > 0 && " · "}<a href={s.href} target="_blank" rel="noreferrer">{s.label}</a></span>)}</p>
      </div>
    </div>
  </>;
}
