// Job-ready portfolio projects: each one proves a skill recruiters ask for.
const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;

export type ProjectStep = { id: string; title: string; detail: string; links?: { title: string; href: string }[] };
export type Project = { slug: string; title: string; level: "Beginner" | "Intermediate" | "Advanced"; time: string; proves: string; stack: string[]; steps: ProjectStep[]; forCareers: string[] };

export const PROJECT_XP = 60;

export const projects: Project[] = [
  {
    slug: "cloud-resume-challenge", title: "Cloud Resume Challenge", level: "Beginner", time: "2–3 weekends",
    proves: "You can build, secure and automate a small real system on AWS end to end.",
    stack: ["S3", "CloudFront", "Lambda", "DynamoDB", "GitHub Actions", "Terraform"], forCareers: ["cloud-support-associate", "cloud-engineer"],
    steps: [
      { id: "site", title: "Host your résumé as a static site", detail: "S3 + CloudFront with HTTPS and your own domain.", links: [{ title: "Challenge instructions", href: "https://cloudresumechallenge.dev/" }, { title: "Step-by-step video", href: yt("3boinmh0CXQ") }] },
      { id: "counter", title: "Add a visitor counter API", detail: "Lambda + DynamoDB behind API Gateway, called from the page." },
      { id: "iac", title: "Rebuild it all with Terraform", detail: "Delete the console-made resources and recreate them from code.", links: [{ title: "Terraform on AWS", href: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" }] },
      { id: "ci", title: "Deploy on every push", detail: "GitHub Actions runs tests and applies changes automatically.", links: [{ title: "GitHub Actions docs", href: "https://docs.github.com/en/actions" }] },
      { id: "blog", title: "Write it up", detail: "A short blog post on what broke and how you fixed it. Link it from your CV." },
    ],
  },
  {
    slug: "ci-cd-pipeline", title: "CI/CD pipeline to Kubernetes", level: "Intermediate", time: "1–2 weekends",
    proves: "You can take an app from commit to a running deployment automatically.",
    stack: ["Docker", "GitHub Actions", "Container registry", "Kubernetes"], forCareers: ["junior-devops-engineer", "platform-engineer"],
    steps: [
      { id: "dockerfile", title: "Containerise a small web app", detail: "Multi-stage Dockerfile, small image, health check.", links: [{ title: "Docker course", href: yt("3c-iBn73dDE") }] },
      { id: "pipeline", title: "Build, test and push on every commit", detail: "GitHub Actions workflow that pushes a tagged image.", links: [{ title: "GitHub Actions with Docker", href: yt("R8_veQiYBjI") }] },
      { id: "deploy", title: "Deploy to a cluster", detail: "kind or minikube locally, or a managed cluster; roll out the new tag automatically." },
      { id: "rollback", title: "Prove you can roll back", detail: "Break a release on purpose and document the rollback." },
    ],
  },
  {
    slug: "terraform-vpc", title: "Production-style AWS network with Terraform", level: "Intermediate", time: "1 weekend",
    proves: "You understand cloud networking and can express it as reviewable code.",
    stack: ["Terraform", "AWS VPC", "ALB", "Auto Scaling", "Remote state"], forCareers: ["cloud-engineer", "junior-devops-engineer"],
    steps: [
      { id: "plan", title: "Plan the address space", detail: "Public and private subnets across two AZs.", links: [{ title: "Subnet calculator", href: "/tools#subnet" }] },
      { id: "modules", title: "Write it as modules", detail: "VPC, security groups and compute as separate modules with remote state.", links: [{ title: "Terraform modules", href: "https://developer.hashicorp.com/terraform/language/modules" }] },
      { id: "app", title: "Run an app behind a load balancer", detail: "Auto Scaling group in private subnets, ALB in public ones." },
      { id: "destroy", title: "Destroy and recreate from scratch", detail: "If it comes back identical, your code is the source of truth." },
    ],
  },
  {
    slug: "gitops-argocd", title: "GitOps on Kubernetes with Argo CD", level: "Advanced", time: "1–2 weekends",
    proves: "You can run deployments the way platform teams do in 2026.",
    stack: ["Kubernetes", "Argo CD", "Helm", "GitHub"], forCareers: ["platform-engineer", "site-reliability-engineer"],
    steps: [
      { id: "cluster", title: "Stand up a cluster and install Argo CD", detail: "Follow the getting-started guide end to end.", links: [{ title: "Argo CD getting started", href: "https://argo-cd.readthedocs.io/en/stable/getting_started/" }] },
      { id: "repo", title: "Split app and config repos", detail: "Helm chart or Kustomize overlays for dev and prod." },
      { id: "promote", title: "Promote a release with a pull request", detail: "Merging to the config repo is the only way to deploy." },
      { id: "drift", title: "Show self-healing", detail: "Change something by hand and watch Argo CD put it back." },
    ],
  },
  {
    slug: "monitoring-stack", title: "Monitoring and alerting stack", level: "Intermediate", time: "1 weekend",
    proves: "You can tell when something is broken and why.",
    stack: ["Prometheus", "Grafana", "Alertmanager", "Docker Compose or Kubernetes"], forCareers: ["site-reliability-engineer", "mlops-ai-infrastructure-engineer"],
    steps: [
      { id: "collect", title: "Collect metrics from an app and its host", detail: "Prometheus scraping node and app metrics.", links: [{ title: "Prometheus first steps", href: "https://prometheus.io/docs/introduction/first_steps/" }] },
      { id: "dash", title: "Build a useful dashboard", detail: "Latency, traffic, errors and saturation on one screen.", links: [{ title: "Grafana tutorials", href: "https://grafana.com/tutorials/" }] },
      { id: "slo", title: "Define one SLO and alert on it", detail: "Alert on the user-facing symptom, not on CPU.", links: [{ title: "Google SRE books", href: "https://sre.google/books/" }] },
      { id: "incident", title: "Run a fake incident and write a postmortem", detail: "Break it, get paged, fix it, write it up." },
    ],
  },
  {
    slug: "llm-on-kubernetes", title: "Serve an open LLM on Kubernetes", level: "Advanced", time: "1–2 weekends",
    proves: "You can run AI workloads in production, the skill every AI team is short of.",
    stack: ["vLLM", "Kubernetes", "GPU or small CPU model", "Prometheus"], forCareers: ["mlops-ai-infrastructure-engineer"],
    steps: [
      { id: "serve", title: "Serve a small open model with vLLM", detail: "Start locally, expose an OpenAI-compatible API.", links: [{ title: "vLLM docs", href: "https://docs.vllm.ai/" }] },
      { id: "k8s", title: "Move it to Kubernetes", detail: "Deployment, Service, resource limits, readiness probe.", links: [{ title: "vLLM on Kubernetes demo", href: yt("o7q1Oc4FWSU") }] },
      { id: "observe", title: "Measure latency and tokens per second", detail: "Scrape vLLM metrics into Prometheus and graph them." },
      { id: "tune", title: "Optional: fine-tune a small model", detail: "Use Unsloth on a free notebook, then serve your version.", links: [{ title: "Unsloth docs", href: "https://docs.unsloth.ai/" }] },
    ],
  },
];
