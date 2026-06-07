export interface ExamDetails {
  duration: string;
  questions: string;
  passMark: string;
  cost: string;
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  provider: string;
  level: "Foundational" | "Associate" | "Professional" | "Specialty" | "Intermediate";
  description: string;
  examDetails: ExamDetails;
  slug: string;
  recommendedFor: string;
}

export const certifications: Certification[] = [
  {
    id: "aws-clf",
    name: "AWS Cloud Practitioner",
    code: "CLF-C02",
    provider: "Amazon Web Services",
    level: "Foundational",
    description:
      "The ideal first AWS cert. Validates cloud concepts, core services, pricing, security basics. Start here if AWS is new to you.",
    examDetails: {
      duration: "90 minutes",
      questions: "65",
      passMark: "70%",
      cost: "$100 USD",
    },
    slug: "aws-cloud-practitioner",
    recommendedFor: "Complete beginners to cloud",
  },
  {
    id: "aws-saa",
    name: "AWS Solutions Architect Associate",
    code: "SAA-C03",
    provider: "Amazon Web Services",
    level: "Associate",
    description:
      "Design and deploy scalable, highly available systems on AWS. The most popular AWS cert — strong resume value for DevOps roles.",
    examDetails: {
      duration: "130 minutes",
      questions: "65",
      passMark: "72%",
      cost: "$150 USD",
    },
    slug: "aws-solutions-architect-associate",
    recommendedFor: "After AWS Cloud Practitioner",
  },
  {
    id: "cka",
    name: "Certified Kubernetes Administrator",
    code: "CKA",
    provider: "CNCF / Linux Foundation",
    level: "Intermediate",
    description:
      "Practical, hands-on Kubernetes exam. Proves you can deploy, configure and troubleshoot clusters in a live terminal environment.",
    examDetails: {
      duration: "120 minutes",
      questions: "Performance-based tasks",
      passMark: "66%",
      cost: "$395 USD",
    },
    slug: "certified-kubernetes-administrator",
    recommendedFor: "After Docker + Kubernetes basics",
  },
  {
    id: "ckad",
    name: "Certified Kubernetes App Developer",
    code: "CKAD",
    provider: "CNCF / Linux Foundation",
    level: "Intermediate",
    description:
      "For developers who deploy apps to Kubernetes. Focuses on Pod design, config, multi-container patterns and observability.",
    examDetails: {
      duration: "120 minutes",
      questions: "Performance-based tasks",
      passMark: "66%",
      cost: "$395 USD",
    },
    slug: "certified-kubernetes-app-developer",
    recommendedFor: "Developers using Kubernetes daily",
  },
  {
    id: "terraform-associate",
    name: "HashiCorp Terraform Associate",
    code: "003",
    provider: "HashiCorp",
    level: "Foundational",
    description:
      "Validates core Terraform skills: HCL syntax, managing state, modules, workspaces, and Terraform Cloud basics.",
    examDetails: {
      duration: "60 minutes",
      questions: "57",
      passMark: "70%",
      cost: "$70.50 USD",
    },
    slug: "terraform-associate",
    recommendedFor: "Anyone working with IaC",
  },
  {
    id: "linux-lpic1",
    name: "Linux Professional Institute LPIC-1",
    code: "LPIC-1",
    provider: "Linux Professional Institute",
    level: "Foundational",
    description:
      "Vendor-neutral Linux certification. Covers system administration, file systems, shell scripting, and basic networking.",
    examDetails: {
      duration: "90 minutes per exam",
      questions: "60 per exam (2 exams)",
      passMark: "500/800",
      cost: "$200 USD per exam",
    },
    slug: "lpic-1",
    recommendedFor: "Linux beginners targeting sysadmin roles",
  },
];
