"use client";

import Link from "next/link";
import RotatingText from "./reactbits/RotatingText";
import BlurText from "./reactbits/BlurText";

const builds = ["Linux server", "Docker image", "CI pipeline", "Kubernetes cluster", "Terraform plan", "AWS certificate"];

/** Text layer of the hero. The pixel world behind it is rendered on the server. */
export default function HomeHero() {
  return <div className="kk-hero-copy">
    <p className="kk-hero-kicker" aria-hidden="true">Start your</p>
    <h1 id="kk-hero-title" className="kk-hero-title">Cloud Quest<span className="kk-sr"> with KultKloud</span></h1>
    <p className="kk-hero-ship" aria-label="Ship your first Linux server, Docker image, CI pipeline, Kubernetes cluster, Terraform plan and AWS certificate.">
      <span aria-hidden="true">Ship your first</span>
      <span aria-hidden="true" className="kk-hero-rotate"><RotatingText texts={builds} effect="drop" rotationInterval={2400} mainClassName="kk-rotate" staggerDuration={0.015} /></span>
    </p>
    <BlurText className="kk-lede" text="Free roadmaps, certification quests and hands-on tools for Cloud, DevOps and AI infrastructure. Earn XP as you go." animateBy="words" delay={35} />
    <div className="kk-actions">
      <a className="kk-button kk-button-pixel" href="#quests">Start your quest</a>
      <Link className="kk-button kk-button-ghost" href="/tools">Open the toolkit</Link>
    </div>
  </div>;
}
