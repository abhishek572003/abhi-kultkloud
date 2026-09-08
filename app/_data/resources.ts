export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "Cheatsheet" | "Reference" | "Templates" | "Guide";
  format: "PDF" | "ZIP" | "MD";
  slug: string;
  href?: string;
}

export const resources: Resource[] = [
  {
    id: "devops-masterclass-notes",
    title: "DevOps MasterClass Notes by Abhishek Tiwari",
    description:
      "Named public edition of the handwritten June and August 2026 notes, with a dated index covering the full supplied Linux to Terraform progression.",
    type: "Guide",
    format: "PDF",
    slug: "devops-masterclass-notes",
    href: "/resources/abhishek-tiwari-devops-masterclass-notes.pdf",
  },
  {
    id: "shell-linux-visual-notes",
    title: "Shell and Linux Visual Notes by Abhishek Tiwari",
    description:
      "Shell and Bash comparisons, command examples, and the visual references supplied in the class-notes archive.",
    type: "Reference",
    format: "PDF",
    slug: "shell-linux-visual-notes",
    href: "/resources/abhishek-tiwari-shell-linux-visual-notes.pdf",
  },
  {
    id: "technical-learning-record",
    title: "Technical Learning Record by Abhishek Tiwari",
    description:
      "A sanitized dated record of SQL, Python, Adobe, AWS data engineering, cloud, DevOps, GenAI, and completed learning evidence.",
    type: "Guide",
    format: "PDF",
    slug: "technical-learning-record",
    href: "/resources/abhishek-tiwari-technical-learning-record.pdf",
  },
  {
    id: "sql-query-patterns",
    title: "SQL Query Patterns",
    description:
      "A compact reference for joins, aggregation, subqueries, views, set operators, and window functions from the SQL learning record.",
    type: "Guide",
    format: "MD",
    slug: "sql-query-patterns",
  },
  {
    id: "python-automation-notes",
    title: "Python Automation Notes",
    description:
      "Readable scripting patterns for data handling, small automations, and cloud API exploration with Python and Boto3.",
    type: "Guide",
    format: "MD",
    slug: "python-automation-notes",
  },
  {
    id: "adobe-experience-concepts",
    title: "Adobe Experience Concepts",
    description:
      "Sanitized conceptual notes on data collection, Web SDK, tags, event forwarding, and analytics workflows.",
    type: "Reference",
    format: "MD",
    slug: "adobe-experience-concepts",
  },
  {
    id: "aws-glue-workflows",
    title: "AWS Glue Workflow Notes",
    description:
      "A learning reference for how managed data cataloguing, transformation, and orchestration fit into an AWS data platform.",
    type: "Reference",
    format: "MD",
    slug: "aws-glue-workflows",
  },
  {
    id: "linux-cheatsheet",
    title: "Linux Commands Cheatsheet",
    description:
      "50+ essential Linux commands for DevOps engineers — navigation, file management, process control, networking, and system info.",
    type: "Cheatsheet",
    format: "PDF",
    slug: "linux-cheatsheet",
  },
  {
    id: "git-commands",
    title: "Git & GitHub Cheatsheet",
    description:
      "Daily-use Git commands: init, clone, branch, merge, rebase, stash, reset — plus GitHub PR workflow shortcuts.",
    type: "Cheatsheet",
    format: "PDF",
    slug: "git-cheatsheet",
  },
  {
    id: "docker-cheatsheet",
    title: "Docker Commands Cheatsheet",
    description:
      "Essential Docker CLI: build, run, stop, exec, logs, push — plus Docker Compose commands and image management.",
    type: "Cheatsheet",
    format: "PDF",
    slug: "docker-cheatsheet",
  },
  {
    id: "aws-services-map",
    title: "AWS Services Overview Map",
    description:
      "Visual map of 50+ AWS services grouped by category — compute, storage, database, networking, security, and serverless.",
    type: "Reference",
    format: "PDF",
    slug: "aws-services-map",
  },
  {
    id: "kubernetes-glossary",
    title: "Kubernetes Glossary",
    description:
      "Plain-English definitions of K8s terms: Pod, Deployment, Service, Ingress, ConfigMap, Namespace, StatefulSet, and more.",
    type: "Reference",
    format: "PDF",
    slug: "kubernetes-glossary",
  },
  {
    id: "cicd-templates",
    title: "GitHub Actions YAML Templates",
    description:
      "Ready-to-use workflow templates for Node.js, Python, Docker builds, and AWS deployment pipelines.",
    type: "Templates",
    format: "ZIP",
    slug: "github-actions-templates",
  },
  {
    id: "terraform-snippets",
    title: "Terraform HCL Snippets",
    description:
      "Copy-paste Terraform snippets for EC2, S3, IAM roles, VPCs, security groups, and common AWS patterns.",
    type: "Templates",
    format: "ZIP",
    slug: "terraform-snippets",
  },
  {
    id: "devops-interview",
    title: "DevOps Interview Questions (100+)",
    description:
      "Real interview questions for DevOps roles — Linux, Docker, Kubernetes, AWS, CI/CD, Git, and system design.",
    type: "Guide",
    format: "PDF",
    slug: "devops-interview-questions",
  },
];
