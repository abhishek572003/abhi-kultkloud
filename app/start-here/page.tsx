import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Start here", description: "Choose a practical starting point for learning cloud and DevOps." };

export default function StartHerePage() { return <div className="platform-page narrow-page">
  <div className="page-kicker">START HERE / 00</div><h1 className="page-title">A clear place to begin.</h1><p className="page-lede">Cloud and DevOps become easier when the order is visible. Choose the path that matches where you are today, then build one small thing at a time.</p>
  <div className="start-grid"><Link className="start-card featured" href="/learning-paths/systems"><span className="card-index">01</span><h2>I am new to DevOps</h2><p>Start with Linux, networking, Git, and the mental models behind the tools.</p><span className="card-link">Begin with systems ↗</span></Link><Link className="start-card" href="/learning-paths/cloud-foundations"><span className="card-index">02</span><h2>I know the basics</h2><p>Connect cloud services into understandable architecture and delivery patterns.</p><span className="card-link">Explore cloud foundations ↗</span></Link><Link className="start-card" href="/labs"><span className="card-index">03</span><h2>I learn by doing</h2><p>Pick a small lab, define the outcome, and leave with a result you can explain.</p><span className="card-link">Open the labs ↗</span></Link></div>
  <section className="reading-note"><p className="page-kicker">HOW TO USE THIS SITE</p><h2>Read, run, reflect.</h2><div className="three-step"><div><b>01</b><h3>Read the mental model</h3><p>Understand what a service or tool is solving before memorising commands.</p></div><div><b>02</b><h3>Run the smallest lab</h3><p>Use a focused exercise to turn the idea into something observable.</p></div><div><b>03</b><h3>Write the tradeoff</h3><p>Capture what worked, what changed, and what you would improve next.</p></div></div></section>
</div>; }
