export interface Roadmap {
  id: string;
  title: string;
  description: string;
  topics: string[];
  timeEstimate: string;
  slug: string;
}

export const roadmaps: Roadmap[] = [
  {
    id: "devops-roadmap",
    title: "DevOps Engineer Roadmap",
    description:
      "A step-by-step path from Linux basics to CI/CD pipelines, containers, Kubernetes and cloud infrastructure. The real sequence matters — follow it.",
    topics: ["Linux", "Git", "Docker", "CI/CD", "Kubernetes", "AWS", "Terraform"],
    timeEstimate: "6–9 months",
    slug: "devops-engineer",
  },
  {
    id: "aws-roadmap",
    title: "AWS Solutions Architect Roadmap",
    description:
      "Learn AWS from scratch: S3, EC2, IAM, VPC, RDS, Lambda — and how to architect production cloud systems that actually scale.",
    topics: ["AWS Foundations", "IAM", "Compute", "Storage", "Networking", "Databases", "Serverless"],
    timeEstimate: "3–5 months",
    slug: "aws-solutions-architect",
  },
  {
    id: "kubernetes-roadmap",
    title: "Kubernetes & Docker Roadmap",
    description:
      "From containers to orchestration. Master Pods, Deployments, Services, Ingress, Helm and production Kubernetes cluster management.",
    topics: ["Docker", "Kubernetes Basics", "Workloads", "Networking", "Storage", "Helm", "Monitoring"],
    timeEstimate: "4–6 months",
    slug: "kubernetes-docker",
  },
  {
    id: "linux-roadmap",
    title: "Linux for DevOps Roadmap",
    description:
      "Every DevOps engineer lives in the terminal. Learn filesystem, users, permissions, processes, networking and shell scripting.",
    topics: ["File System", "Users & Permissions", "Processes", "Shell Scripting", "Networking", "SSH", "Cron"],
    timeEstimate: "1–2 months",
    slug: "linux-for-devops",
  },
  {
    id: "cicd-roadmap",
    title: "CI/CD & GitHub Actions Roadmap",
    description:
      "Automate everything. Learn continuous integration and deployment pipelines using GitHub Actions, Docker, and cloud deployments.",
    topics: ["GitHub Actions", "YAML", "Testing", "Docker Build", "Deploy to Cloud", "Secrets", "Environments"],
    timeEstimate: "2–3 months",
    slug: "cicd-github-actions",
  },
  {
    id: "terraform-roadmap",
    title: "Terraform & IaC Roadmap",
    description:
      "Stop clicking in the console. Write infrastructure as code with Terraform — resources, modules, state, workspaces and Terraform Cloud.",
    topics: ["HCL Basics", "Providers", "Resources", "State Management", "Modules", "Workspaces", "Terraform Cloud"],
    timeEstimate: "2–3 months",
    slug: "terraform-iac",
  },
];
