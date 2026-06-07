export interface Lab {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  tools: string[];
  slug: string;
}

export const labs: Lab[] = [
  {
    id: "deploy-on-ec2",
    title: "Deploy a Web App on AWS EC2",
    description:
      "Launch an EC2 instance, configure security groups, install Nginx, and deploy a static site — end to end from zero.",
    level: "Beginner",
    duration: "45 min",
    tools: ["AWS EC2", "SSH", "Nginx", "Security Groups"],
    slug: "deploy-web-app-ec2",
  },
  {
    id: "github-actions-cicd",
    title: "Build a CI/CD Pipeline with GitHub Actions",
    description:
      "Write a workflow that lints, tests, builds, and deploys your app automatically on every push to main.",
    level: "Intermediate",
    duration: "60 min",
    tools: ["GitHub Actions", "YAML", "Docker", "Node.js"],
    slug: "github-actions-cicd",
  },
  {
    id: "containerize-app",
    title: "Containerize a Node.js App with Docker",
    description:
      "Write a Dockerfile, build the image, run locally with Docker Compose, and push to Docker Hub.",
    level: "Beginner",
    duration: "30 min",
    tools: ["Docker", "Docker Compose", "Docker Hub", "Node.js"],
    slug: "containerize-nodejs-app",
  },
  {
    id: "terraform-ec2",
    title: "Provision AWS EC2 with Terraform",
    description:
      "Write HCL to provision an EC2 instance, security group, and key pair. Apply, destroy, and understand Terraform state.",
    level: "Intermediate",
    duration: "50 min",
    tools: ["Terraform", "AWS EC2", "HCL", "AWS CLI"],
    slug: "terraform-provision-ec2",
  },
  {
    id: "k8s-deploy-app",
    title: "Deploy an App to Kubernetes (Minikube)",
    description:
      "Write a Deployment and Service manifest, deploy to Minikube, expose via NodePort, and roll out updates.",
    level: "Intermediate",
    duration: "55 min",
    tools: ["Kubernetes", "kubectl", "Minikube", "YAML"],
    slug: "kubernetes-deploy-minikube",
  },
  {
    id: "s3-static-site",
    title: "Host a Static Site on AWS S3 + CloudFront",
    description:
      "Deploy a static website to S3, configure a bucket policy, add CloudFront CDN, and set up a custom domain.",
    level: "Beginner",
    duration: "40 min",
    tools: ["AWS S3", "CloudFront", "Route 53", "IAM"],
    slug: "s3-static-site-cloudfront",
  },
];
