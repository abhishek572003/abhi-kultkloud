// Job ladder: effort in, job out. Salary bands are typical India ranges from public 2026 salary
// guides (cited per role); real offers vary by city, company and skill. Time estimates are ours,
// assuming roughly 10–15 hours a week from zero.
export type Source = { label: string; href: string };
export type Career = {
  slug: string; title: string; tier: number; tagline: string;
  months: string; effort: string; entryPay: string; growthPay?: string;
  day: string[]; skills: string[]; paths: string[]; certs: string[]; projects: string[];
  tip: string; sources: Source[];
};

const instaDevops = { label: "Instahyre: DevOps salary in India", href: "https://resources.instahyre.com/blog/devops-engineer-salary-in-india/" };
const instaCloud = { label: "Instahyre: cloud engineer salary in India", href: "https://resources.instahyre.com/blog/cloud-engineer-salary-in-india/" };
const ambition = { label: "Simpliaxis (AmbitionBox data)", href: "https://www.simpliaxis.com/resources/devops-engineer-salary-in-india" };
const jobrise = { label: "JobRise: cloud engineer salary 2026", href: "https://jobrise.io/hi/blog/cloud-engineer-salary-india-2026-breakdown/" };
const oyc = { label: "OwnYourCareer: MLOps salaries (Jul 2026)", href: "https://www.ownyourcareer.in/careers/mlops-engineer/salaries" };

export const careers: Career[] = [
  {
    slug: "cloud-support-associate", title: "Cloud Support Associate", tier: 1,
    tagline: "The most common first cloud job. You help customers and teams fix real cloud problems.",
    months: "3–4 months", effort: "Linux, networking, one cloud's basics", entryPay: "₹3.5–8 LPA",
    day: ["Troubleshoot servers, networking and access issues", "Read logs and explain what went wrong", "Write clear runbooks and tickets"],
    skills: ["Linux", "Networking", "AWS or Azure basics", "Clear writing"],
    paths: ["systems", "cloud-foundations"], certs: ["aws-cloud-practitioner", "azure-fundamentals"], projects: ["cloud-resume-challenge"],
    tip: "Many cloud careers in India start here or as a Linux admin. Two strong certifications plus the Cloud Resume Challenge make a credible fresher profile.",
    sources: [jobrise, instaCloud],
  },
  {
    slug: "junior-devops-engineer", title: "Junior DevOps Engineer", tier: 2,
    tagline: "Automate how code gets built, tested and shipped.",
    months: "6–9 months", effort: "Linux, Git, CI/CD, Docker, one cloud, Terraform", entryPay: "₹4–9 LPA",
    day: ["Keep CI/CD pipelines green", "Containerise apps and deploy them", "Automate repetitive infrastructure work"],
    skills: ["Linux", "Git", "GitHub Actions / Jenkins", "Docker", "AWS", "Terraform", "Bash / Python"],
    paths: ["systems", "git-cicd", "containers-kubernetes", "infrastructure-delivery"], certs: ["aws-solutions-architect-associate", "terraform-associate"], projects: ["ci-cd-pipeline", "terraform-vpc"],
    tip: "Recruiters look for proof you can automate: a public repo with a working pipeline and Terraform beats a long list of tools.",
    sources: [instaDevops, ambition],
  },
  {
    slug: "cloud-engineer", title: "Cloud Engineer", tier: 3,
    tagline: "Design and run a company's infrastructure on AWS, Azure or Google Cloud.",
    months: "6–9 months", effort: "Deep in one cloud, networking, IaC, security", entryPay: "₹4–9 LPA", growthPay: "Associate-level certifications often lift fresher offers",
    day: ["Build VPCs, IAM and compute for new projects", "Write Terraform for everything", "Keep cost and security in check"],
    skills: ["AWS / Azure / GCP", "Networking", "IAM", "Terraform", "Cost awareness"],
    paths: ["systems", "cloud-foundations", "infrastructure-delivery"], certs: ["aws-solutions-architect-associate", "azure-administrator", "google-associate-cloud-engineer"], projects: ["terraform-vpc", "cloud-resume-challenge"],
    tip: "Pick one cloud and go deep. Associate-level certifications (SAA-C03, AZ-104, ACE) are the ones employers ask for most.",
    sources: [instaCloud],
  },
  {
    slug: "site-reliability-engineer", title: "Site Reliability Engineer (SRE)", tier: 4,
    tagline: "Keep big systems fast and up. Software engineering applied to operations.",
    months: "12–18 months", effort: "Kubernetes, observability, scripting, on-call habits", entryPay: "₹7–12 LPA", growthPay: "₹16–28 LPA at 2–4 years",
    day: ["Define and watch SLOs", "Automate away toil", "Lead incidents and write postmortems"],
    skills: ["Kubernetes", "Prometheus / Grafana", "Python or Go", "Linux internals", "Incident response"],
    paths: ["systems", "containers-kubernetes", "observability-sre"], certs: ["cka", "ckad"], projects: ["monitoring-stack", "gitops-argocd"],
    tip: "Most people move into SRE after 1–2 years in DevOps or backend work. A monitoring project with real alerts shows you think like one.",
    sources: [instaDevops],
  },
  {
    slug: "platform-engineer", title: "Platform Engineer", tier: 5,
    tagline: "Build the internal platform other engineers deploy on.",
    months: "18–24 months", effort: "Kubernetes, GitOps, IaC, developer experience", entryPay: "₹6–10 LPA", growthPay: "₹14–24 LPA at 2–4 years",
    day: ["Run shared Kubernetes clusters", "Build golden-path templates and GitOps", "Make deploying boring for everyone else"],
    skills: ["Kubernetes", "Argo CD", "Terraform", "CI/CD", "Developer empathy"],
    paths: ["git-cicd", "containers-kubernetes", "infrastructure-delivery", "observability-sre"], certs: ["cka", "aws-devops-engineer-professional", "azure-devops-engineer"], projects: ["gitops-argocd", "ci-cd-pipeline"],
    tip: "Usually a step after DevOps or SRE. GitOps plus Terraform plus a real cluster in your portfolio is the signal.",
    sources: [instaDevops],
  },
  {
    slug: "mlops-ai-infrastructure-engineer", title: "MLOps / AI Infrastructure Engineer", tier: 6,
    tagline: "Run AI in production: GPUs, model serving, pipelines and agents.",
    months: "12–18 months", effort: "Python, Kubernetes, cloud ML, model serving", entryPay: "₹8–15 LPA", growthPay: "₹20–35 LPA at 3–5 years",
    day: ["Deploy and scale model APIs", "Build training and evaluation pipelines", "Keep GPU costs and latency under control"],
    skills: ["Python", "Kubernetes", "vLLM / model serving", "Cloud ML (SageMaker, Vertex, Bedrock)", "MLOps tools"],
    paths: ["cloud-foundations", "containers-kubernetes", "ai-infrastructure"], certs: ["aws-ai-practitioner", "claude-certified-architect", "cka"], projects: ["llm-on-kubernetes", "monitoring-stack"],
    tip: "The fastest-growing niche. DevOps skills plus one shipped AI-serving project is a rare combination right now.",
    sources: [oyc],
  },
];

export const careersCheckedOn = "13 Nov 2026";
