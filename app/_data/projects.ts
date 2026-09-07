export type ProjectRecord = {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  level: string;
  time: string;
  status: string;
  problem: string;
  architecture: string;
  lessons: string[];
};

export const projects: ProjectRecord[] = [
  {
    slug: "serverless-flow",
    title: "Serverless request flow",
    description: "Trace a request through a static frontend, authenticated API, function, and managed persistence layer.",
    topics: ["AWS", "Amplify", "Cognito", "Lambda", "DynamoDB"],
    level: "Intermediate",
    time: "2 hrs",
    status: "Portfolio lab · created now",
    problem: "Make a small application boundary easy to explain from the browser to the data store, including where identity and least privilege belong.",
    architecture: "browser → Amplify frontend → API Gateway → Lambda → DynamoDB\n                 ↓\n             Cognito + IAM + CloudWatch",
    lessons: ["Managed services reduce operational work but increase the need for clear boundaries.", "Identity and least privilege belong in the request design, not as a final checklist.", "A short architecture note makes a small demo easier to review and reproduce."],
  },
  {
    slug: "terraform-networking",
    title: "Terraform AWS network baseline",
    description: "Express a small AWS network as code and explain the relationship between its subnets, routes, gateway, and compute boundary.",
    topics: ["Terraform", "AWS", "VPC", "EC2", "Networking"],
    level: "Intermediate",
    time: "2 hrs",
    status: "Portfolio lab · created now",
    problem: "Turn a familiar VPC shape into reviewable configuration so each network decision can be recreated without clicking through a console.",
    architecture: "VPC → public/private subnets → route tables\n  ↓                 ↓\nIGW / NAT       EC2 boundary + security groups",
    lessons: ["Naming and outputs make infrastructure easier to inspect than a flat set of resources.", "Routes, subnet placement, and security groups answer different questions and should stay distinct.", "A small baseline is a better teaching surface than an oversized platform diagram."],
  },
  {
    slug: "container-delivery",
    title: "Containerized service delivery",
    description: "A sanitized architecture study connecting Docker, an orchestrator, managed data services, infrastructure as code, and delivery automation.",
    topics: ["Docker", "Kubernetes", "Terraform", "CI/CD", "Observability"],
    level: "Advanced",
    time: "3 hrs",
    status: "Architecture study · sanitized portfolio outline",
    problem: "Understand how a containerized service moves from source code to a managed runtime while keeping data, identity, and operational feedback visible.",
    architecture: "source → CI/CD → image registry → managed runtime\n                         ↓\n              data services + logs + metrics",
    lessons: ["Container packaging and workload orchestration solve different layers of the delivery problem.", "Runtime health, logs, and metrics complete the path from deployment to operations.", "Sanitized architecture notes can explain the pattern without exposing client or internal information."],
  },
];
