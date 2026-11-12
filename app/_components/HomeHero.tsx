"use client";

import Link from "next/link";
import RotatingText from "./reactbits/RotatingText";
import BlurText from "./reactbits/BlurText";

const roles = ["Cloud Support Associate", "DevOps Engineer", "Cloud Engineer", "SRE", "Platform Engineer", "MLOps Engineer"];

/** Text layer of the hero. The pixel world behind it is rendered on the server. */
export default function HomeHero() {
  return <div className="kk-hero-copy">
    <p className="kk-hero-kicker" aria-hidden="true">Start your</p>
    <h1 id="kk-hero-title" className="kk-hero-title">Cloud Quest<span className="kk-sr"> with KultKloud</span></h1>
    <p className="kk-hero-ship" aria-label="Your path to Cloud Support Associate, DevOps Engineer, Cloud Engineer, SRE, Platform Engineer or MLOps Engineer.">
      <span aria-hidden="true">Your path to</span>
      <span aria-hidden="true" className="kk-hero-rotate"><RotatingText texts={roles} effect="drop" rotationInterval={2400} mainClassName="kk-rotate" staggerDuration={0.012} /></span>
    </p>
    <BlurText className="kk-lede" text="Free, job-focused roadmaps for Cloud, DevOps and AI infrastructure. Pick a job, follow the quest, earn XP, get hired." animateBy="words" delay={35} />
    <div className="kk-actions">
      <Link className="kk-button kk-button-pixel" href="/start-here">Choose your class</Link>
      <Link className="kk-button kk-button-ghost" href="/careers">See the jobs</Link>
    </div>
  </div>;
}
