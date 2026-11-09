// Free hands-on labs, grouped by the homepage domains. Checked by hand on 2026-11-10.
// KodeKloud: free lab tracks (studio/labs). EscBash: the first topic of every skill is free.
import type { DomainIcon } from "./discovery";

export const labsCheckedOn = "10 Nov 2026";

export type Provider = "KodeKloud" | "EscBash" | "KultKloud";

export type FreeLab = {
  provider: Provider;
  title: string;
  scope: string; // what you get
  free: string;  // how it is free
  href: string;
};

export type LabDomain = { name: string; icon: DomainIcon; why: string; labs: FreeLab[] };

const kk = (slug: string) => `https://kodekloud.com/studio/labs/${slug}`;
const kkCatalog = "https://kodekloud.com/studio/labs";
const eb = (slug: string) => `https://www.escbash.com/skills/${slug}`;
const KK_FREE = "Free lab track";
const EB_FREE = "First topic free";

export const providers: { name: Provider; how: string; href: string }[] = [
  { name: "KodeKloud", how: "Browser-based lab tracks marked free. You may need a free account to start a lab.", href: kkCatalog },
  { name: "EscBash", how: "Lab-driven skills on real machines. The first topic of every skill is free; the rest is on paid plans.", href: "https://www.escbash.com/skills" },
];

export const labDomains: LabDomain[] = [
  {
    name: "Linux & systems", icon: "terminal", why: "Get comfortable in a terminal before anything else.",
    labs: [
      { provider: "KodeKloud", title: "Linux Administration", scope: "20 labs: shell, packages, networking, security", free: KK_FREE, href: kk("linux") },
      { provider: "KodeKloud", title: "DevOps Pre-Requisites", scope: "12 labs: CLI, package managers, services, language installs", free: KK_FREE, href: kk("devops") },
      { provider: "EscBash", title: "Linux", scope: "22 topics · about 13 hrs", free: EB_FREE, href: eb("linux") },
      { provider: "EscBash", title: "Shell Scripting", scope: "16 topics · about 9 hrs", free: EB_FREE, href: eb("shell-scripting") },
      { provider: "EscBash", title: "Networking", scope: "32 topics · about 25 hrs", free: EB_FREE, href: eb("networking") },
    ],
  },
  {
    name: "Cloud foundations", icon: "cloud", why: "Learn the core AWS services by clicking less and doing more.",
    labs: [
      { provider: "KodeKloud", title: "AWS Cloud", scope: "7 labs: EC2, S3, networking, serverless and more", free: KK_FREE, href: kkCatalog },
      { provider: "EscBash", title: "AWS Fundamentals", scope: "26 topics · about 20 hrs", free: EB_FREE, href: eb("aws-fundamentals") },
    ],
  },
  {
    name: "Git & CI/CD", icon: "branch", why: "Version control first, then pipelines.",
    labs: [
      { provider: "KodeKloud", title: "Git & Version Control", scope: "15 labs: branching, merging, remotes", free: KK_FREE, href: kk("git") },
      { provider: "KodeKloud", title: "Jenkins", scope: "5 labs: setup, CLI, pipelines", free: KK_FREE, href: kk("jenkins") },
      { provider: "EscBash", title: "Git", scope: "24 topics · about 18 hrs", free: EB_FREE, href: eb("git") },
      { provider: "EscBash", title: "GitHub Actions", scope: "26 topics · about 18 hrs", free: EB_FREE, href: eb("github-actions") },
    ],
  },
  {
    name: "Containers & Kubernetes", icon: "container", why: "Package an app, then run it on a cluster.",
    labs: [
      { provider: "KodeKloud", title: "Docker", scope: "9 labs: commands, images, networking, Compose", free: KK_FREE, href: kk("docker") },
      { provider: "KodeKloud", title: "Kubernetes", scope: "6 labs: pods, services, deployments, YAML", free: KK_FREE, href: kk("kubernetes") },
      { provider: "EscBash", title: "Docker", scope: "21 topics · about 13 hrs", free: EB_FREE, href: eb("docker") },
      { provider: "EscBash", title: "Kubernetes", scope: "30 topics · about 18 hrs", free: EB_FREE, href: eb("kubernetes") },
      { provider: "EscBash", title: "Helm", scope: "27 topics · about 13 hrs", free: EB_FREE, href: eb("helm") },
    ],
  },
  {
    name: "Infrastructure as code", icon: "layers", why: "Describe infrastructure in files you can review and repeat.",
    labs: [
      { provider: "KodeKloud", title: "Terraform", scope: "26 labs: HCL, providers, variables, state, AWS", free: KK_FREE, href: kk("terraform") },
      { provider: "KodeKloud", title: "Ansible", scope: "7 labs: inventory, playbooks, modules", free: KK_FREE, href: "https://kodekloud.com/free-labs/ansible" },
      { provider: "EscBash", title: "Terraform with AWS", scope: "33 topics · about 20 hrs", free: EB_FREE, href: eb("terraform") },
      { provider: "KultKloud", title: "Terraform VPC baseline", scope: "A small AWS network as code, with every decision explained · 2 hrs", free: "Free lab plan", href: "/labs/terraform-networking" },
    ],
  },
  {
    name: "AI infrastructure", icon: "chip", why: "Early stop: the basics of how AI apps are built and served.",
    labs: [
      { provider: "KodeKloud", title: "Artificial Intelligence", scope: "5 labs: MCP, LangChain, LangGraph, RAG, Gemini CLI", free: KK_FREE, href: kkCatalog },
      { provider: "EscBash", title: "AI Fundamentals", scope: "26 topics · about 16 hrs", free: EB_FREE, href: eb("ai-fundamentals") },
      { provider: "EscBash", title: "RAG", scope: "16 topics · about 13 hrs", free: EB_FREE, href: eb("rag") },
    ],
  },
];
