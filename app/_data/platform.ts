export type ContentItem = { slug: string; type: string; title: string; description: string; topics: string[]; level: string; time: string; href: string };

export const platformItems: ContentItem[] = [
  { slug: "linux-foundations", type: "Guide", title: "Linux foundations", description: "The command line, filesystems, permissions, processes, and shell habits that make the rest of DevOps easier.", topics: ["Linux", "Shell"], level: "Foundation", time: "45 min", href: "/guides/linux-foundations" },
  { slug: "cloud-architecture", type: "Guide", title: "Cloud architecture fundamentals", description: "A service-agnostic way to reason about identity, networking, compute, storage, reliability, and cost.", topics: ["Cloud", "Architecture"], level: "Foundation", time: "30 min", href: "/guides/cloud-architecture" },
  { slug: "git-delivery", type: "Guide", title: "Git to delivery", description: "A practical path from version control to repeatable builds, tests, and deployments.", topics: ["Git", "CI/CD"], level: "Intermediate", time: "50 min", href: "/guides/git-delivery" },
  { slug: "containers-kubernetes", type: "Learning path", title: "Containers to Kubernetes", description: "Understand the container lifecycle before moving into workloads, services, scheduling, and EKS.", topics: ["Docker", "Kubernetes"], level: "Intermediate", time: "6–8 hrs", href: "/learning-paths/containers-kubernetes" },
  { slug: "terraform-networking", type: "Lab", title: "Terraform VPC baseline", description: "A portfolio lab for expressing a small AWS network as code and explaining each decision.", topics: ["Terraform", "AWS", "VPC"], level: "Intermediate", time: "2 hrs", href: "/labs/terraform-networking" },
  { slug: "serverless-flow", type: "Project", title: "Serverless request flow", description: "Trace a request through a static frontend, authenticated API, function, and managed persistence layer.", topics: ["AWS", "Serverless"], level: "Intermediate", time: "2 hrs", href: "/projects/serverless-flow" },
];

export const learningPaths = [
  { title: "Start with systems", description: "Linux, networking, Git, and the mental models that support every cloud tool.", topics: ["Linux", "Networking", "Git"], duration: "2–3 weeks", href: "/learning-paths/systems" },
  { title: "Cloud foundations", description: "Move from services to architecture: identity, VPCs, compute, storage, serverless, and cost.", topics: ["AWS", "Azure", "Architecture"], duration: "3–5 weeks", href: "/learning-paths/cloud-foundations" },
  { title: "Containers to Kubernetes", description: "Build, ship, schedule, expose, observe, and secure containerized workloads.", topics: ["Docker", "Kubernetes", "EKS"], duration: "6–8 weeks", href: "/learning-paths/containers-kubernetes" },
  { title: "Infrastructure delivery", description: "Connect source control, CI/CD, Terraform, and safe operational feedback loops.", topics: ["Jenkins", "Terraform", "Observability"], duration: "4–6 weeks", href: "/learning-paths/infrastructure-delivery" },
];
