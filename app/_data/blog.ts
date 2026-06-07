export interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "docker-vs-vm",
    title: "Docker vs Virtual Machines — What's the Actual Difference?",
    description:
      "Most beginners confuse containers and VMs. Here's a clear, visual breakdown of how they work and when to use each.",
    date: "2025-05-20",
    readTime: "7 min",
    tags: ["Docker", "DevOps", "Beginners"],
    slug: "docker-vs-virtual-machines",
  },
  {
    id: "git-workflow",
    title: "The Git Workflow Every Developer Should Know",
    description:
      "Feature branches, pull requests, rebasing vs merging — a real-world Git workflow explained simply with examples.",
    date: "2025-05-12",
    readTime: "9 min",
    tags: ["Git", "GitHub", "Workflow"],
    slug: "git-workflow-developers",
  },
  {
    id: "aws-free-tier",
    title: "How to Build Real Projects on AWS Free Tier (Without a Surprise Bill)",
    description:
      "The free tier is powerful if you know its limits. Here's how to use EC2, S3, and Lambda safely without getting charged.",
    date: "2025-04-28",
    readTime: "11 min",
    tags: ["AWS", "Cloud", "Beginners"],
    slug: "aws-free-tier-guide",
  },
  {
    id: "linux-commands-devops",
    title: "30 Linux Commands I Use Every Single Day as a DevOps Engineer",
    description:
      "Not a generic list. These are the actual commands I run daily — with real examples and why each one matters.",
    date: "2025-04-15",
    readTime: "12 min",
    tags: ["Linux", "DevOps", "CLI"],
    slug: "linux-commands-devops-daily",
  },
  {
    id: "kubernetes-explained-simple",
    title: "Kubernetes Explained Simply — No Jargon, Just Concepts",
    description:
      "Pods, nodes, clusters, deployments, services — what they actually are and how they fit together in plain English.",
    date: "2025-04-02",
    readTime: "10 min",
    tags: ["Kubernetes", "DevOps", "Beginners"],
    slug: "kubernetes-explained-simple",
  },
  {
    id: "github-actions-first-pipeline",
    title: "Your First GitHub Actions CI/CD Pipeline in 15 Minutes",
    description:
      "A step-by-step walkthrough to build a real CI/CD pipeline: lint, test, build Docker image, push to registry.",
    date: "2025-03-20",
    readTime: "15 min",
    tags: ["CI/CD", "GitHub Actions", "DevOps"],
    slug: "github-actions-first-pipeline",
  },
];
