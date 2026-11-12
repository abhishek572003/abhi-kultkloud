import type { Metadata } from "next";
import Link from "next/link";
import SubnetCalculator from "./SubnetCalculator";
import CronExplainer from "./CronExplainer";
import ChmodCalculator from "./ChmodCalculator";
import CloudTranslator from "./CloudTranslator";
import ToolXp from "../_components/ToolXp";

export const metadata: Metadata = {
  title: "Cloud & DevOps toolkit",
  description: "Free in-browser tools: subnet calculator with AWS limits, cron explainer, chmod calculator and an AWS / Azure / Google Cloud service translator.",
};

const tools = [
  { id: "subnet", name: "Subnet calculator", what: "Plan VPC and subnet ranges. Shows usable hosts, the five addresses AWS reserves, and how a block splits.", Comp: SubnetCalculator },
  { id: "cron", name: "Cron explainer", what: "Paste a schedule from a CI job or crontab and read it in plain English, with the next five runs.", Comp: CronExplainer },
  { id: "chmod", name: "chmod calculator", what: "Tick the permissions you want and get the octal mode and the command to run.", Comp: ChmodCalculator },
  { id: "cloud-map", name: "Cloud service translator", what: "Know the AWS name? Find the Azure and Google Cloud equivalent, and the other way round.", Comp: CloudTranslator },
];

export default function ToolsPage() {
  return <main className="kk-page">
    <header className="kk-page-head">
      <h1>The toolkit.</h1>
      <p>Small tools for the jobs that trip people up in their first year: subnetting, schedules, permissions and cloud vocabulary. Everything runs in your browser. Nothing is sent anywhere. Try each one for +15 XP.</p>
      <nav className="kk-jump" aria-label="Jump to a tool">{tools.map(t => <a key={t.id} href={`#${t.id}`}>{t.name}</a>)}<Link href="/cheatsheets">Cheat sheets</Link></nav>
    </header>
    {tools.map(({ id, name, what, Comp }) => <section key={id} id={id} className="kk-tool" aria-labelledby={`${id}-title`}>
      <div className="kk-tool-intro">
        <h2 id={`${id}-title`}>{name}</h2>
        <p>{what}</p>
      </div>
      <ToolXp id={id} name={name}><Comp /></ToolXp>
    </section>)}
  </main>;
}
