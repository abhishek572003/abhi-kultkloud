export interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  modules: number;
  tags: string[];
  status: "live" | "coming-soon";
  slug: string;
}

export const courses: Course[] = [
  {
    id: "linux-for-beginners",
    title: "Linux for Beginners",
    description:
      "Start with the command line. Navigate the filesystem, manage files, users, and permissions — everything a DevOps engineer uses daily from day one.",
    level: "Beginner",
    duration: "8 hours",
    modules: 12,
    tags: ["Linux", "CLI", "Shell"],
    status: "coming-soon",
    slug: "linux-for-beginners",
  },
  {
    id: "docker-hands-on",
    title: "Docker — From Zero to Containers",
    description:
      "Build, run, and ship containers. Learn Dockerfiles, volumes, networking and Docker Compose from scratch with real app examples.",
    level: "Beginner",
    duration: "10 hours",
    modules: 15,
    tags: ["Docker", "Containers", "DevOps"],
    status: "coming-soon",
    slug: "docker-hands-on",
  },
  {
    id: "aws-cloud-practitioner",
    title: "AWS Cloud Practitioner Prep",
    description:
      "Pass the CLF-C02 exam with hands-on labs, mock tests, and real AWS scenarios — built around what actually shows up on the exam.",
    level: "Beginner",
    duration: "12 hours",
    modules: 18,
    tags: ["AWS", "Cloud", "Certification"],
    status: "coming-soon",
    slug: "aws-cloud-practitioner",
  },
  {
    id: "git-github-devops",
    title: "Git & GitHub for DevOps",
    description:
      "Version control, branching strategies, pull requests, GitHub Actions basics and how teams use Git in real DevOps workflows.",
    level: "Beginner",
    duration: "5 hours",
    modules: 8,
    tags: ["Git", "GitHub", "Version Control"],
    status: "coming-soon",
    slug: "git-github-devops",
  },
  {
    id: "kubernetes-beginners",
    title: "Kubernetes for Beginners",
    description:
      "Pods, Deployments, Services, ConfigMaps, Namespaces — understand Kubernetes architecture by deploying real apps step by step.",
    level: "Intermediate",
    duration: "14 hours",
    modules: 20,
    tags: ["Kubernetes", "K8s", "Containers"],
    status: "coming-soon",
    slug: "kubernetes-beginners",
  },
  {
    id: "terraform-foundations",
    title: "Terraform Foundations",
    description:
      "Write your first infrastructure as code. Provision AWS resources with Terraform, manage state, use modules, and understand the plan/apply cycle.",
    level: "Intermediate",
    duration: "9 hours",
    modules: 13,
    tags: ["Terraform", "IaC", "AWS"],
    status: "coming-soon",
    slug: "terraform-foundations",
  },
];
