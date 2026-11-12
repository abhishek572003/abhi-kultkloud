// Learning paths: each module lists the best free resources we could find (checked 13 Nov 2026).
import type { DomainIcon } from "./discovery";

export type ResKind = "Video" | "Docs" | "Book" | "Hands-on" | "Practice" | "Project";
export type Res = { title: string; kind: ResKind; href: string; by: string; note?: string };
export type Module = { id: string; title: string; outcome: string; resources: Res[] };
export type Path = { slug: string; name: string; icon: DomainIcon; tagline: string; weeks: string; leadsTo: string[]; modules: Module[] };

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const eb = (s: string) => `https://www.escbash.com/skills/${s}`;
const kk = (s: string) => `https://kodekloud.com/studio/labs/${s}`;

export const MODULE_XP = 20;

export const paths: Path[] = [
  {
    slug: "systems", name: "Linux & systems", icon: "terminal", weeks: "3–4 weeks",
    tagline: "Every cloud job starts in a terminal. Get fast, get comfortable, stop being scared of it.",
    leadsTo: ["cloud-support-associate", "junior-devops-engineer"],
    modules: [
      { id: "terminal", title: "Live in the terminal", outcome: "Move around, read and edit files, chain commands with pipes.", resources: [
        { title: "The Missing Semester of Your CS Education", kind: "Docs", by: "MIT", href: "https://missing.csail.mit.edu/" },
        { title: "Introduction to Linux, full course", kind: "Video", by: "freeCodeCamp", note: "6h 7m", href: yt("sWbUDq4S6Y8") },
        { title: "Linux skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("linux") } ] },
      { id: "admin", title: "Permissions, processes and services", outcome: "Manage users, permissions, packages and systemd services.", resources: [
        { title: "The Linux Command Line (free book)", kind: "Book", by: "William Shotts", href: "https://linuxcommand.org/tlcl.php" },
        { title: "Linux Administration labs", kind: "Hands-on", by: "KodeKloud", href: kk("linux") },
        { title: "chmod calculator", kind: "Practice", by: "KultKloud", href: "/tools#chmod" } ] },
      { id: "network", title: "Networking you will actually use", outcome: "Explain IPs, subnets, DNS, ports and HTTP well enough to debug them.", resources: [
        { title: "Computer Networking Fundamentals", kind: "Video", by: "freeCodeCamp", note: "12h 19m", href: yt("fQbBPa0ADvs") },
        { title: "Networking skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("networking") },
        { title: "Subnet calculator", kind: "Practice", by: "KultKloud", href: "/tools#subnet" } ] },
      { id: "bash", title: "Script it and play the game", outcome: "Write small Bash scripts and solve terminal puzzles.", resources: [
        { title: "Bandit wargame", kind: "Practice", by: "OverTheWire", href: "https://overthewire.org/wargames/bandit/" },
        { title: "Shell Scripting skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("shell-scripting") } ] },
    ],
  },
  {
    slug: "cloud-foundations", name: "Cloud foundations", icon: "cloud", weeks: "4–6 weeks",
    tagline: "Understand what the cloud is, use the core services for real, and ship your first public project.",
    leadsTo: ["cloud-support-associate", "cloud-engineer"],
    modules: [
      { id: "concepts", title: "Cloud concepts and core services", outcome: "Explain regions, IAM, compute, storage, networking and pricing.", resources: [
        { title: "AWS Cloud Practitioner course 2026", kind: "Video", by: "freeCodeCamp", note: "13h 46m", href: yt("7HKot-brXFE") },
        { title: "AWS Skill Builder (free courses)", kind: "Docs", by: "AWS", href: "https://skillbuilder.aws/" } ] },
      { id: "hands-on", title: "Click less, build more", outcome: "Launch, connect and tear down real resources without a surprise bill.", resources: [
        { title: "AWS hands-on tutorials", kind: "Hands-on", by: "AWS", href: "https://aws.amazon.com/getting-started/hands-on/" },
        { title: "AWS Fundamentals skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("aws-fundamentals") },
        { title: "AWS Free Tier", kind: "Hands-on", by: "AWS", href: "https://aws.amazon.com/free/" } ] },
      { id: "architecture", title: "Think like an architect", outcome: "Compare designs on security, reliability, cost and performance.", resources: [
        { title: "Well-Architected Framework", kind: "Docs", by: "AWS", href: "https://aws.amazon.com/architecture/well-architected/" },
        { title: "Cloud service translator", kind: "Practice", by: "KultKloud", href: "/tools#cloud-map" } ] },
      { id: "resume", title: "Ship the Cloud Resume Challenge", outcome: "A live, public project recruiters can click.", resources: [
        { title: "The Cloud Resume Challenge", kind: "Project", by: "Forrest Brazeal", href: "https://cloudresumechallenge.dev/" },
        { title: "Cloud Resume Challenge step by step", kind: "Video", by: "Favorite Tech Mom", note: "29m", href: yt("3boinmh0CXQ") } ] },
    ],
  },
  {
    slug: "git-cicd", name: "Git & CI/CD", icon: "branch", weeks: "2–3 weeks",
    tagline: "Version control, then pipelines that test and ship your code the same way every time.",
    leadsTo: ["junior-devops-engineer"],
    modules: [
      { id: "git", title: "Git and GitHub", outcome: "Branch, commit, merge, open pull requests, fix mistakes.", resources: [
        { title: "Git & GitHub crash course [2026]", kind: "Video", by: "freeCodeCamp", note: "1h 21m", href: yt("mAFoROnOfHs") },
        { title: "Learn Git Branching (interactive)", kind: "Practice", by: "Peter Cottle", href: "https://learngitbranching.js.org/" } ] },
      { id: "git-deep", title: "Git in depth", outcome: "Understand rebase, history and how Git actually stores work.", resources: [
        { title: "Pro Git (free book)", kind: "Book", by: "Scott Chacon & Ben Straub", href: "https://git-scm.com/book/en/v2" },
        { title: "Git skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("git") } ] },
      { id: "actions", title: "Pipelines with GitHub Actions", outcome: "Build, test and push a Docker image on every commit.", resources: [
        { title: "GitHub Actions tutorial with Docker", kind: "Video", by: "TechWorld with Nana", note: "33m", href: yt("R8_veQiYBjI") },
        { title: "GitHub Actions documentation", kind: "Docs", by: "GitHub", href: "https://docs.github.com/en/actions" },
        { title: "GitHub Actions skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("github-actions") } ] },
      { id: "jenkins", title: "Jenkins, still everywhere", outcome: "Read and fix a Jenkins pipeline in an older company.", resources: [
        { title: "Jenkins labs", kind: "Hands-on", by: "KodeKloud", href: kk("jenkins") } ] },
    ],
  },
  {
    slug: "containers-kubernetes", name: "Containers & Kubernetes", icon: "container", weeks: "6–8 weeks",
    tagline: "Package an app once, run it anywhere, then let Kubernetes keep it alive.",
    leadsTo: ["junior-devops-engineer", "site-reliability-engineer", "platform-engineer"],
    modules: [
      { id: "docker", title: "Docker from zero", outcome: "Write a Dockerfile, use volumes and networks, run Compose.", resources: [
        { title: "Docker tutorial for beginners", kind: "Video", by: "TechWorld with Nana", note: "2h 46m", href: yt("3c-iBn73dDE") },
        { title: "Docker labs", kind: "Hands-on", by: "KodeKloud", href: kk("docker") },
        { title: "Docker concepts", kind: "Docs", by: "Docker", href: "https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/" } ] },
      { id: "k8s", title: "Kubernetes core", outcome: "Pods, Deployments, Services, ConfigMaps and Ingress, by hand.", resources: [
        { title: "Kubernetes tutorial for beginners", kind: "Video", by: "TechWorld with Nana", note: "3h 37m", href: yt("X48VuDVv0do") },
        { title: "Learn Kubernetes basics", kind: "Docs", by: "kubernetes.io", href: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        { title: "Kubernetes skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("kubernetes") } ] },
      { id: "hard-way", title: "Understand what is under the hood", outcome: "Build a cluster yourself and break and fix it.", resources: [
        { title: "Kubernetes the Hard Way", kind: "Project", by: "Kelsey Hightower", href: "https://github.com/kelseyhightower/kubernetes-the-hard-way" },
        { title: "Free Kubernetes scenarios", kind: "Practice", by: "Killercoda", href: "https://killercoda.com/" } ] },
      { id: "gitops", title: "GitOps with Argo CD", outcome: "Deploy to Kubernetes by merging a pull request.", resources: [
        { title: "Argo CD getting started", kind: "Docs", by: "Argo Project", href: "https://argo-cd.readthedocs.io/en/stable/getting_started/" },
        { title: "Argo CD skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("argocd") } ] },
    ],
  },
  {
    slug: "infrastructure-delivery", name: "Infrastructure as code", icon: "layers", weeks: "3–4 weeks",
    tagline: "Describe servers and networks in code you can review, repeat and destroy safely.",
    leadsTo: ["cloud-engineer", "platform-engineer"],
    modules: [
      { id: "terraform", title: "Terraform basics on AWS", outcome: "init, plan, apply and destroy real infrastructure.", resources: [
        { title: "Get started with Terraform on AWS", kind: "Hands-on", by: "HashiCorp", href: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
        { title: "Terraform course", kind: "Video", by: "freeCodeCamp", note: "7h", href: yt("SPcwo0Gq9T8") } ] },
      { id: "state", title: "State, modules and teams", outcome: "Remote state, reusable modules and safe changes in a team.", resources: [
        { title: "Terraform state", kind: "Docs", by: "HashiCorp", href: "https://developer.hashicorp.com/terraform/language/state" },
        { title: "Modules", kind: "Docs", by: "HashiCorp", href: "https://developer.hashicorp.com/terraform/language/modules" },
        { title: "Terraform with AWS skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("terraform") } ] },
      { id: "ansible", title: "Configure servers with Ansible", outcome: "Write a playbook that sets up a fresh server the same way every time.", resources: [
        { title: "Getting started with Ansible", kind: "Docs", by: "Red Hat", href: "https://docs.ansible.com/ansible/latest/getting_started/index.html" },
        { title: "Ansible labs", kind: "Hands-on", by: "KodeKloud", href: "https://kodekloud.com/free-labs/ansible" } ] },
    ],
  },
  {
    slug: "observability-sre", name: "Observability & SRE", icon: "chart", weeks: "3–4 weeks",
    tagline: "Know when something breaks before users do, and fix it calmly.",
    leadsTo: ["site-reliability-engineer", "platform-engineer"],
    modules: [
      { id: "sre", title: "The SRE mindset", outcome: "SLIs, SLOs, error budgets and blameless postmortems.", resources: [
        { title: "Site Reliability Engineering books (free)", kind: "Book", by: "Google", href: "https://sre.google/books/" } ] },
      { id: "metrics", title: "Metrics and dashboards", outcome: "Collect metrics with Prometheus and alert from Grafana.", resources: [
        { title: "Prometheus first steps", kind: "Docs", by: "Prometheus", href: "https://prometheus.io/docs/introduction/first_steps/" },
        { title: "Grafana tutorials", kind: "Hands-on", by: "Grafana Labs", href: "https://grafana.com/tutorials/" },
        { title: "Observability Fundamentals (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("observability-fundamentals") } ] },
      { id: "otel", title: "Logs, traces and OpenTelemetry", outcome: "Follow one request across services and find the slow part.", resources: [
        { title: "Learn observability in 5 hours", kind: "Video", by: "Abhishek Veeramalla", note: "4h 57m", href: yt("cYAE0ZhT43c") },
        { title: "What is OpenTelemetry?", kind: "Docs", by: "OpenTelemetry", href: "https://opentelemetry.io/docs/what-is-opentelemetry/" } ] },
    ],
  },
  {
    slug: "ai-infrastructure", name: "AI infrastructure", icon: "chip", weeks: "4–6 weeks",
    tagline: "The fastest-growing corner of DevOps: serving, fine-tuning and running AI in production.",
    leadsTo: ["mlops-ai-infrastructure-engineer"],
    modules: [
      { id: "basics", title: "AI basics for infrastructure people", outcome: "Know what models, tokens, embeddings and RAG are.", resources: [
        { title: "AWS AI Practitioner full course", kind: "Video", by: "freeCodeCamp", note: "14h 59m", href: yt("WZeZZ8_W-M4") },
        { title: "Hugging Face courses (free)", kind: "Docs", by: "Hugging Face", href: "https://huggingface.co/learn" },
        { title: "AI Fundamentals skill (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("ai-fundamentals") } ] },
      { id: "mlops", title: "MLOps foundations", outcome: "Version, test, deploy and monitor models like any other software.", resources: [
        { title: "Made With ML", kind: "Docs", by: "Goku Mohandas", href: "https://madewithml.com/" },
        { title: "MLOps course: production-grade projects", kind: "Video", by: "freeCodeCamp", note: "3h 1m", href: yt("-dJPoLm_gtE") } ] },
      { id: "serving", title: "Serve and fine-tune open models", outcome: "Run an open model behind an API on Kubernetes; fine-tune a small one.", resources: [
        { title: "vLLM on Kubernetes, full demo", kind: "Video", by: "Shikha Singh", note: "1h 29m", href: yt("o7q1Oc4FWSU") },
        { title: "vLLM documentation", kind: "Docs", by: "vLLM", href: "https://docs.vllm.ai/" },
        { title: "Unsloth fine-tuning docs", kind: "Docs", by: "Unsloth", href: "https://docs.unsloth.ai/" } ] },
      { id: "agents", title: "Agents, tools and MCP", outcome: "Connect a model to real tools safely.", resources: [
        { title: "Anthropic courses (free)", kind: "Docs", by: "Anthropic", href: "https://github.com/anthropics/courses" },
        { title: "Model Context Protocol introduction", kind: "Docs", by: "MCP", href: "https://modelcontextprotocol.io/introduction" },
        { title: "Claude Code Fundamentals (first topic free)", kind: "Hands-on", by: "EscBash", href: eb("claude-code-fundamentals") } ] },
    ],
  },
];

export const resourceCount = paths.reduce((n, p) => n + p.modules.reduce((m, mod) => m + mod.resources.length, 0), 0);
