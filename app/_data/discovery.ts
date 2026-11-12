// Homepage discovery data. Durations come from existing learning-path and guide data.

export type DomainIcon = "terminal" | "cloud" | "branch" | "container" | "layers" | "chip";

export type Domain = {
  name: string;
  icon: DomainIcon;
  summary: string;
  topics: string[];
  meta: string;
  href?: string; // no href = not mapped yet
};

export const domains: Domain[] = [
  { name: "Linux & systems", icon: "terminal", summary: "The shell, files, permissions, processes and basic networking that every later tool assumes you know.", topics: ["Linux", "Bash", "Networking"], meta: "2–3 weeks", href: "/learning-paths/systems" },
  { name: "Cloud foundations", icon: "cloud", summary: "How identity, networks, compute and storage fit together on AWS and Azure, and what they cost.", topics: ["AWS", "Azure", "IAM", "VPC"], meta: "3–5 weeks", href: "/learning-paths/cloud-foundations" },
  { name: "Git & CI/CD", icon: "branch", summary: "Version control first, then pipelines that build, test and ship your code the same way every time.", topics: ["Git", "GitHub Actions", "Jenkins"], meta: "50 min guide", href: "/guides/git-delivery" },
  { name: "Containers & Kubernetes", icon: "container", summary: "Package an app with Docker, then run, scale and expose it on Kubernetes and EKS.", topics: ["Docker", "Kubernetes", "EKS"], meta: "6–8 weeks", href: "/learning-paths/containers-kubernetes" },
  { name: "Infrastructure as code", icon: "layers", summary: "Describe servers and networks in Terraform so they can be reviewed, repeated and torn down safely.", topics: ["Terraform", "Observability"], meta: "4–6 weeks", href: "/learning-paths/infrastructure-delivery" },
  { name: "AI infrastructure", icon: "chip", summary: "GPUs, model serving, vector databases and the cloud plumbing behind AI apps.", topics: ["GPUs", "Model serving", "Fine-tuning (Unsloth)", "LLMOps"], meta: "Being mapped" },
];

export type Resource = { title: string; source: string; kind: "Docs" | "Video"; length?: string; href: string };

// Links checked by hand on 2026-11-10 (HTTP 200 / YouTube oEmbed).
export const resourcesCheckedOn = "10 Nov 2026";
export const devopsStarterShelf: Resource[] = [
  { title: "GitHub Actions quickstart", source: "GitHub Docs", kind: "Docs", href: "https://docs.github.com/en/actions/get-started/quickstart" },
  { title: "Get started with Docker", source: "Docker Docs", kind: "Docs", href: "https://docs.docker.com/get-started/" },
  { title: "Docker tutorial for beginners", source: "freeCodeCamp.org", kind: "Video", href: "https://www.youtube.com/watch?v=fqMOX6JJhGo" },
  { title: "Learn Kubernetes basics", source: "kubernetes.io", kind: "Docs", href: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
  { title: "Kubernetes tutorial for beginners", source: "TechWorld with Nana", kind: "Video", length: "4 hrs", href: "https://www.youtube.com/watch?v=X48VuDVv0do" },
  { title: "Get started with Terraform on AWS", source: "HashiCorp Developer", kind: "Docs", href: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
];
