// Certification roadmaps. Exam facts checked on the official pages on 13 Nov 2026;
// providers change prices and versions, so every page links to the official source.
export type ResourceKind = "Official" | "Video" | "Docs" | "Practice" | "Hands-on";
export type Resource = { title: string; kind: ResourceKind; href: string; note?: string };
export type Step = { id: string; title: string; why: string; resources: Resource[] };
export type Stage = "Start here" | "Get hired" | "Level up";
export type Cert = {
  slug: string; code: string; name: string; provider: "AWS" | "Microsoft" | "Google" | "CNCF" | "HashiCorp" | "Anthropic"; stage: Stage;
  level: "Beginner" | "Intermediate"; weeks: string; summary: string; forWho: string;
  facts: { label: string; value: string }[]; official: string; feedTopic: string; next?: string;
  steps: Step[];
};

const yt = (id: string) => `https://www.youtube.com/watch?v=${id}`;
const eb = (s: string) => `https://www.escbash.com/skills/${s}`;

export const certs: Cert[] = [
  {
    slug: "aws-cloud-practitioner", stage: "Start here", code: "CLF-C02", name: "AWS Certified Cloud Practitioner", provider: "AWS", level: "Beginner", weeks: "3–5 weeks",
    summary: "The friendliest first cloud exam: what the cloud is, the core AWS services, security basics and how AWS charges you.",
    forWho: "Complete beginners, career switchers, and anyone who works next to cloud teams.",
    facts: [{ label: "Exam", value: "CLF-C02" }, { label: "Time", value: "90 min" }, { label: "Questions", value: "65, multiple choice / response" }, { label: "Price", value: "USD 100" }, { label: "Pass mark", value: "700 / 1000" }],
    official: "https://aws.amazon.com/certification/certified-cloud-practitioner/", feedTopic: "aws", next: "aws-solutions-architect-associate",
    steps: [
      { id: "guide", title: "Read the official exam guide", why: "It lists the four domains and their weights, so you know what to spend time on.", resources: [
        { title: "CLF-C02 exam guide", kind: "Official", href: "https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html" },
        { title: "Exam page and booking", kind: "Official", href: "https://aws.amazon.com/certification/certified-cloud-practitioner/" } ] },
      { id: "course", title: "Watch one full course, start to finish", why: "A single structured course beats ten playlists. Take notes per domain.", resources: [
        { title: "AWS Cloud Practitioner course 2026 (CLF-C02)", kind: "Video", href: yt("7HKot-brXFE"), note: "freeCodeCamp · 13h 46m" } ] },
      { id: "account", title: "Open a Free Tier account and click around", why: "Seeing EC2, S3 and IAM in the console makes the questions concrete. Set a billing alarm first.", resources: [
        { title: "AWS Free Tier", kind: "Hands-on", href: "https://aws.amazon.com/free/" },
        { title: "AWS Pricing Calculator", kind: "Hands-on", href: "https://calculator.aws/" },
        { title: "AWS Fundamentals labs on real AWS (first topic free)", kind: "Hands-on", href: eb("aws-fundamentals"), note: "EscBash" } ] },
      { id: "security", title: "Get the shared responsibility model right", why: "It shows up in many questions: who secures what, AWS or you.", resources: [
        { title: "Shared responsibility model", kind: "Docs", href: "https://aws.amazon.com/compliance/shared-responsibility-model/" },
        { title: "Well-Architected Framework", kind: "Docs", href: "https://aws.amazon.com/architecture/well-architected/" } ] },
      { id: "practice", title: "Do timed practice questions", why: "Aim for 80%+ on fresh questions before booking. Review every wrong answer.", resources: [
        { title: "AWS Skill Builder (official practice questions)", kind: "Practice", href: "https://skillbuilder.aws/" } ] },
      { id: "book", title: "Book the exam", why: "Pick a date two weeks out so revision has a deadline.", resources: [
        { title: "Schedule on the exam page", kind: "Official", href: "https://aws.amazon.com/certification/certified-cloud-practitioner/" } ] },
    ],
  },
  {
    slug: "aws-solutions-architect-associate", stage: "Get hired", code: "SAA-C03", name: "AWS Certified Solutions Architect – Associate", provider: "AWS", level: "Intermediate", weeks: "8–12 weeks",
    summary: "The most requested AWS certification: designing secure, resilient, fast and cost-aware systems on AWS.",
    forWho: "People with Cloud Practitioner level knowledge, or some hands-on AWS time.",
    facts: [{ label: "Exam", value: "SAA-C03" }, { label: "Time", value: "130 min" }, { label: "Questions", value: "65, multiple choice / response" }, { label: "Price", value: "USD 150" }, { label: "Pass mark", value: "720 / 1000" }],
    official: "https://aws.amazon.com/certification/certified-solutions-architect-associate/", feedTopic: "aws",
    steps: [
      { id: "guide", title: "Read the exam guide and note the four domains", why: "Secure, resilient, high-performing and cost-optimised architectures. Every question maps to one.", resources: [
        { title: "Exam page", kind: "Official", href: "https://aws.amazon.com/certification/certified-solutions-architect-associate/" } ] },
      { id: "course", title: "Work through a full course", why: "It is long. Do a section a day and pause to try things in the console.", resources: [
        { title: "Solutions Architect Associate full course (SAA-C03)", kind: "Video", href: yt("c3Cn4xYfxJY"), note: "freeCodeCamp · 50h" } ] },
      { id: "vpc", title: "Build a VPC by hand", why: "Networking is where most people lose marks: subnets, route tables, NAT, security groups.", resources: [
        { title: "What is Amazon VPC?", kind: "Docs", href: "https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html" },
        { title: "KultKloud subnet calculator", kind: "Hands-on", href: "/tools#subnet" } ] },
      { id: "wa", title: "Learn the Well-Architected pillars", why: "The exam's 'best answer' is usually the most well-architected one.", resources: [
        { title: "Well-Architected Framework", kind: "Docs", href: "https://aws.amazon.com/architecture/well-architected/" } ] },
      { id: "workshops", title: "Do two hands-on workshops", why: "Building a real multi-tier app locks the services together in your head.", resources: [
        { title: "AWS Workshops catalogue", kind: "Hands-on", href: "https://workshops.aws/" },
        { title: "AWS Fundamentals labs (first topic free)", kind: "Hands-on", href: eb("aws-fundamentals"), note: "EscBash" } ] },
      { id: "practice", title: "Timed practice exams", why: "Read the scenario twice. Eliminate answers that are expensive or not highly available.", resources: [
        { title: "AWS Skill Builder practice", kind: "Practice", href: "https://skillbuilder.aws/" } ] },
    ],
  },
  {
    slug: "azure-fundamentals", stage: "Start here", code: "AZ-900", name: "Microsoft Azure Fundamentals", provider: "Microsoft", level: "Beginner", weeks: "2–4 weeks",
    summary: "Cloud concepts plus the core Azure services, security, governance and pricing. A gentle first Microsoft exam.",
    forWho: "Beginners, and anyone heading towards AZ-104 or a role in a Microsoft shop.",
    facts: [{ label: "Exam", value: "AZ-900" }, { label: "Time", value: "45 min" }, { label: "Pass mark", value: "700 / 1000" }, { label: "Price", value: "Varies by country" }, { label: "Expires", value: "Never" }],
    official: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/", feedTopic: "azure", next: "azure-administrator",
    steps: [
      { id: "guide", title: "Read the study guide", why: "Three areas: cloud concepts, architecture and services, management and governance.", resources: [
        { title: "AZ-900 study guide", kind: "Official", href: "https://aka.ms/AZ900-StudyGuide" } ] },
      { id: "course", title: "Watch a full course", why: "Eight hours, easy to split over a week of evenings.", resources: [
        { title: "Azure Fundamentals AZ-900 course (updated)", kind: "Video", href: yt("5abffC-K40c"), note: "freeCodeCamp · 8h 22m" } ] },
      { id: "learn", title: "Do the free Microsoft Learn modules", why: "Short reading with built-in knowledge checks, written by the people who write the exam.", resources: [
        { title: "Microsoft Learn: Azure Fundamentals training", kind: "Docs", href: "https://learn.microsoft.com/en-us/training/courses/az-900t00" } ] },
      { id: "account", title: "Create a free Azure account", why: "Create a resource group, a VM and a storage account, then delete them.", resources: [
        { title: "Azure free account", kind: "Hands-on", href: "https://azure.microsoft.com/free/" },
        { title: "KultKloud cloud translator (AWS ⇄ Azure names)", kind: "Hands-on", href: "/tools#cloud-map" } ] },
      { id: "practice", title: "Take the free official practice assessment", why: "Retake it until you score above 80% twice in a row.", resources: [
        { title: "Official practice assessment", kind: "Practice", href: "https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/practice/assessment?assessment-type=practice&assessmentId=23" },
        { title: "Exam sandbox (try the exam interface)", kind: "Practice", href: "https://go.microsoft.com/fwlink/?linkid=2226877" } ] },
    ],
  },
  {
    slug: "azure-administrator", stage: "Get hired", code: "AZ-104", name: "Microsoft Azure Administrator Associate", provider: "Microsoft", level: "Intermediate", weeks: "8–10 weeks",
    summary: "Run Azure for real: identities, governance, storage, compute, networking and monitoring.",
    forWho: "People who passed AZ-900 or already use Azure, and are comfortable with a terminal.",
    facts: [{ label: "Exam", value: "AZ-104" }, { label: "Time", value: "100 min" }, { label: "Pass mark", value: "700 / 1000" }, { label: "Price", value: "Varies by country" }, { label: "Renewal", value: "Free, every 12 months" }],
    official: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/", feedTopic: "azure",
    steps: [
      { id: "guide", title: "Read the study guide", why: "Five domains, from identity and governance to monitoring. Note the weights.", resources: [
        { title: "AZ-104 study guide", kind: "Official", href: "https://aka.ms/AZ104-StudyGuide" } ] },
      { id: "course", title: "Watch a full course", why: "Follow the demos in your own subscription as you go.", resources: [
        { title: "Azure Administrator AZ-104 full course", kind: "Video", href: yt("10PbGbTUSAg"), note: "freeCodeCamp · 11h 16m · older, pair with the study guide" },
        { title: "Official AZ-104 exam prep videos", kind: "Video", href: "https://aka.ms/AZ104-ExamPrep" } ] },
      { id: "labs", title: "Do the official hands-on labs", why: "AZ-104 rewards doing. The official lab instructions are public on GitHub.", resources: [
        { title: "AZ-104 lab exercises (Microsoft Learning)", kind: "Hands-on", href: "https://microsoftlearning.github.io/AZ-104-MicrosoftAzureAdministrator/" } ] },
      { id: "network", title: "Practise networking until it is boring", why: "VNets, peering, NSGs and DNS appear everywhere in the exam.", resources: [
        { title: "Azure Virtual Network docs", kind: "Docs", href: "https://learn.microsoft.com/en-us/azure/virtual-network/" },
        { title: "KultKloud subnet calculator", kind: "Hands-on", href: "/tools#subnet" } ] },
      { id: "practice", title: "Take the practice assessment", why: "Then re-read the study guide sections where you scored lowest.", resources: [
        { title: "Official AZ-104 practice assessment", kind: "Practice", href: "https://aka.ms/az104-learnpa" } ] },
    ],
  },
  {
    slug: "cka", stage: "Level up", code: "CKA", name: "Certified Kubernetes Administrator", provider: "CNCF", level: "Intermediate", weeks: "8–12 weeks",
    summary: "A hands-on exam in a real terminal: install, configure, troubleshoot and run Kubernetes clusters.",
    forWho: "People comfortable with Linux and Docker who want to prove real Kubernetes skills.",
    facts: [{ label: "Format", value: "Performance-based, in a terminal" }, { label: "Time", value: "2 hours" }, { label: "Price", value: "USD 445, one retake included" }, { label: "Kubernetes", value: "v1.37" }, { label: "Valid", value: "2 years" }],
    official: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/", feedTopic: "kubernetes",
    steps: [
      { id: "curriculum", title: "Read the curriculum and domain weights", why: "Troubleshooting is 30% and cluster architecture 25%. Spend your time there.", resources: [
        { title: "CKA exam page", kind: "Official", href: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/" },
        { title: "Open-source CNCF curriculum", kind: "Official", href: "https://github.com/cncf/curriculum" } ] },
      { id: "basics", title: "Get the fundamentals in one sitting", why: "A short course first, so the long one makes sense.", resources: [
        { title: "Kubernetes course: CKA exam preparation (2026 update)", kind: "Video", href: yt("l57xKN6OBhY"), note: "freeCodeCamp · 2h 6m" } ] },
      { id: "course", title: "Work through a complete CKA course", why: "Type every command yourself. Muscle memory is the exam.", resources: [
        { title: "Complete CKA certification course", kind: "Video", href: yt("_LH5HdczZNc"), note: "Cloud With VarJosh · 43h 54m" } ] },
      { id: "kubectl", title: "Get fast with kubectl", why: "Use --dry-run=client -o yaml to generate manifests instead of writing them.", resources: [
        { title: "kubectl quick reference", kind: "Docs", href: "https://kubernetes.io/docs/reference/kubectl/quick-reference/" },
        { title: "KultKloud kubectl cheat sheet", kind: "Hands-on", href: "/cheatsheets" },
        { title: "Kubernetes skill on real machines (first topic free)", kind: "Hands-on", href: eb("kubernetes"), note: "EscBash" } ] },
      { id: "cluster", title: "Build a cluster with kubeadm", why: "Installing and upgrading a cluster is part of the exam.", resources: [
        { title: "Creating a cluster with kubeadm", kind: "Docs", href: "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/" } ] },
      { id: "debug", title: "Practise troubleshooting broken clusters", why: "Free browser scenarios let you break and fix things without a cloud bill.", resources: [
        { title: "Killercoda CKA scenarios", kind: "Practice", href: "https://killercoda.com/killer-shell-cka" },
        { title: "Kubernetes debugging tasks", kind: "Docs", href: "https://kubernetes.io/docs/tasks/debug/" } ] },
    ],
  },
  {
    slug: "terraform-associate", stage: "Get hired", code: "004", name: "HashiCorp Certified: Terraform Associate", provider: "HashiCorp", level: "Beginner", weeks: "3–5 weeks",
    summary: "Infrastructure as code basics: the Terraform workflow, state, modules and HCP Terraform.",
    forWho: "Anyone who has clicked through a cloud console and wants to stop doing that.",
    facts: [{ label: "Exam", value: "Terraform Associate (004)" }, { label: "Time", value: "1 hour" }, { label: "Format", value: "Multiple choice, online" }, { label: "Terraform", value: "1.12" }, { label: "Price", value: "See official page" }],
    official: "https://developer.hashicorp.com/certifications/infrastructure-automation", feedTopic: "terraform",
    steps: [
      { id: "study", title: "Follow the official study guide", why: "HashiCorp maps every objective to a tutorial. It is the best free plan there is.", resources: [
        { title: "Associate 004 study guide", kind: "Official", href: "https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-study-004" } ] },
      { id: "course", title: "Watch a full 004 course", why: "One end-to-end course to tie the objectives together.", resources: [
        { title: "Terraform Associate (004) full course", kind: "Video", href: yt("hjI1934H0F4"), note: "sthithapragna · 6h 58m" },
        { title: "Terraform Associate course (003)", kind: "Video", href: yt("SPcwo0Gq9T8"), note: "freeCodeCamp · 7h · previous version, still useful" } ] },
      { id: "build", title: "Build real infrastructure on AWS", why: "Init, plan, apply, destroy, for real. Then do it again from a clean folder.", resources: [
        { title: "Get started with Terraform on AWS", kind: "Hands-on", href: "https://developer.hashicorp.com/terraform/tutorials/aws-get-started" },
        { title: "KultKloud Terraform cheat sheet", kind: "Hands-on", href: "/cheatsheets" },
        { title: "Terraform with AWS skill (first topic free)", kind: "Hands-on", href: eb("terraform"), note: "EscBash" } ] },
      { id: "state", title: "Understand state and modules deeply", why: "State and modules are where most questions get tricky.", resources: [
        { title: "Terraform state", kind: "Docs", href: "https://developer.hashicorp.com/terraform/language/state" },
        { title: "Modules", kind: "Docs", href: "https://developer.hashicorp.com/terraform/language/modules" } ] },
      { id: "review", title: "Do the official exam review", why: "A final pass over every objective with links back to the docs.", resources: [
        { title: "Associate 004 exam review", kind: "Practice", href: "https://developer.hashicorp.com/terraform/tutorials/certification-004/associate-review-004" } ] },
    ],
  },
  {
    slug: "aws-ai-practitioner", stage: "Start here", code: "AIF-C01", name: "AWS Certified AI Practitioner", provider: "AWS", level: "Beginner", weeks: "3–4 weeks",
    summary: "AI and generative AI fundamentals on AWS: models, prompts, RAG, responsible AI and the AWS services behind them.",
    forWho: "Anyone heading towards AI infrastructure or MLOps, and cloud people who keep hearing about Bedrock.",
    facts: [{ label: "Exam", value: "AIF-C01" }, { label: "Time", value: "90 min" }, { label: "Questions", value: "65" }, { label: "Price", value: "USD 100" }, { label: "Delivery", value: "Pearson VUE, test centre or online" }],
    official: "https://aws.amazon.com/certification/certified-ai-practitioner/", feedTopic: "ai",
    steps: [
      { id: "guide", title: "Read the exam guide", why: "Five domains, from AI fundamentals to security and governance.", resources: [
        { title: "AIF-C01 exam guide", kind: "Official", href: "https://docs.aws.amazon.com/aws-certification/latest/ai-practitioner-01/ai-practitioner-01.html" } ] },
      { id: "course", title: "Watch a full course", why: "Covers every domain with diagrams of the AWS AI services.", resources: [
        { title: "AWS AI Practitioner (AIF-C01) full course", kind: "Video", href: yt("WZeZZ8_W-M4"), note: "freeCodeCamp · 14h 59m" },
        { title: "AIF-C01 full course (more recent)", kind: "Video", href: yt("wrlYYRgaW5w"), note: "sthithapragna · 5h 52m" } ] },
      { id: "bedrock", title: "Try Bedrock for real", why: "Calling a model and building a tiny RAG app makes the theory stick.", resources: [
        { title: "Getting started with Amazon Bedrock", kind: "Hands-on", href: "https://aws.amazon.com/bedrock/getting-started/" },
        { title: "AI Fundamentals skill (first topic free)", kind: "Hands-on", href: eb("ai-fundamentals"), note: "EscBash" } ] },
      { id: "practice", title: "Practice questions", why: "Focus on responsible AI and security; people lose easy marks there.", resources: [
        { title: "AWS Skill Builder practice", kind: "Practice", href: "https://skillbuilder.aws/" } ] },
    ],
  },
  {
    slug: "kcna", stage: "Start here", code: "KCNA", name: "Kubernetes and Cloud Native Associate", provider: "CNCF", level: "Beginner", weeks: "3–5 weeks",
    summary: "The entry ticket to Kubernetes: core concepts, container orchestration and the cloud-native landscape.",
    forWho: "People new to Kubernetes who want a structured first step before CKA or CKAD.",
    facts: [{ label: "Format", value: "Multiple choice, online" }, { label: "Time", value: "90 min" }, { label: "Price", value: "USD 250" }, { label: "Valid", value: "2 years" }, { label: "Biggest domain", value: "Kubernetes Fundamentals 44%" }],
    official: "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/", feedTopic: "kubernetes", next: "cka",
    steps: [
      { id: "curriculum", title: "Read the domains", why: "Kubernetes fundamentals are 44% of the exam. Start there.", resources: [
        { title: "KCNA exam page", kind: "Official", href: "https://training.linuxfoundation.org/certification/kubernetes-cloud-native-associate/" } ] },
      { id: "course", title: "Watch a full course", why: "It covers the whole landscape, not just Kubernetes.", resources: [
        { title: "KCNA full course", kind: "Video", href: yt("AplluksKvzI"), note: "freeCodeCamp · 14h 6m" },
        { title: "Kubernetes tutorial for beginners", kind: "Video", href: yt("X48VuDVv0do"), note: "TechWorld with Nana · 3h 37m" } ] },
      { id: "hands-on", title: "Run a cluster yourself", why: "Even a multiple-choice exam is easier once you have typed kubectl.", resources: [
        { title: "Learn Kubernetes basics", kind: "Docs", href: "https://kubernetes.io/docs/tutorials/kubernetes-basics/" },
        { title: "Kubernetes labs", kind: "Hands-on", href: "https://kodekloud.com/studio/labs/kubernetes", note: "KodeKloud" } ] },
      { id: "landscape", title: "Learn the cloud-native landscape", why: "Observability, GitOps and service mesh questions show up.", resources: [
        { title: "Kubernetes overview", kind: "Docs", href: "https://kubernetes.io/docs/concepts/overview/" } ] },
    ],
  },
  {
    slug: "google-associate-cloud-engineer", stage: "Get hired", code: "ACE", name: "Google Cloud Associate Cloud Engineer", provider: "Google", level: "Intermediate", weeks: "6–8 weeks",
    summary: "Deploy, secure and run workloads on Google Cloud. The core hands-on Google Cloud certification.",
    forWho: "People targeting companies on Google Cloud, or adding a second cloud to their CV.",
    facts: [{ label: "Time", value: "2 hours" }, { label: "Questions", value: "50–60" }, { label: "Price", value: "USD 125" }, { label: "Valid", value: "3 years" }, { label: "Recommended", value: "6+ months on Google Cloud" }],
    official: "https://cloud.google.com/learn/certification/cloud-engineer", feedTopic: "kubernetes",
    steps: [
      { id: "guide", title: "Read the exam guide", why: "Four sections, from setting up an environment to access and security.", resources: [
        { title: "ACE exam guide (PDF)", kind: "Official", href: "https://services.google.com/fh/files/misc/associate_cloud_engineer_exam_guide_english.pdf" } ] },
      { id: "course", title: "Watch a full course", why: "Follow along in the free trial as you go.", resources: [
        { title: "Associate Cloud Engineer course [2025]", kind: "Video", href: yt("OlAmyf8_4O4"), note: "freeCodeCamp · 11h 30m" } ] },
      { id: "labs", title: "Do the official learning path", why: "Google's own hands-on labs mirror the exam tasks.", resources: [
        { title: "Cloud Engineer learning path", kind: "Hands-on", href: "https://www.cloudskillsboost.google/paths/11" },
        { title: "KultKloud cloud translator (AWS ⇄ GCP)", kind: "Hands-on", href: "/tools#cloud-map" } ] },
      { id: "practice", title: "Sample questions", why: "Official samples show the style of scenario questions.", resources: [
        { title: "Exam page with sample questions", kind: "Practice", href: "https://cloud.google.com/learn/certification/cloud-engineer" } ] },
    ],
  },
  {
    slug: "ckad", stage: "Get hired", code: "CKAD", name: "Certified Kubernetes Application Developer", provider: "CNCF", level: "Intermediate", weeks: "6–8 weeks",
    summary: "Build, configure and deploy applications on Kubernetes, in a real terminal under time pressure.",
    forWho: "Developers and DevOps engineers who ship apps to Kubernetes.",
    facts: [{ label: "Format", value: "Performance-based, in a terminal" }, { label: "Time", value: "2 hours" }, { label: "Price", value: "USD 445, one retake included" }, { label: "Kubernetes", value: "v1.37" }, { label: "Valid", value: "2 years" }],
    official: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/", feedTopic: "kubernetes", next: "cka",
    steps: [
      { id: "curriculum", title: "Read the domains", why: "Environment, configuration and security is the biggest at 25%.", resources: [
        { title: "CKAD exam page", kind: "Official", href: "https://training.linuxfoundation.org/certification/certified-kubernetes-application-developer-ckad/" } ] },
      { id: "course", title: "Learn Kubernetes properly first", why: "CKAD assumes you are comfortable with the core objects.", resources: [
        { title: "Kubernetes tutorial for beginners", kind: "Video", href: yt("X48VuDVv0do"), note: "TechWorld with Nana · 3h 37m" },
        { title: "Kubernetes skill (first topic free)", kind: "Hands-on", href: eb("kubernetes"), note: "EscBash" } ] },
      { id: "exercises", title: "Grind the exercises", why: "Speed wins this exam. Do each exercise until it takes under five minutes.", resources: [
        { title: "CKAD exercises", kind: "Practice", href: "https://github.com/dgkanatsios/CKAD-exercises" },
        { title: "Killercoda CKAD scenarios", kind: "Practice", href: "https://killercoda.com/killer-shell-ckad" } ] },
      { id: "docs", title: "Get fast with the docs", why: "You may use kubernetes.io during the exam. Know where things are.", resources: [
        { title: "Kubernetes tasks", kind: "Docs", href: "https://kubernetes.io/docs/tasks/" },
        { title: "KultKloud kubectl cheat sheet", kind: "Hands-on", href: "/cheatsheets" } ] },
    ],
  },
  {
    slug: "claude-certified-architect", stage: "Get hired", code: "CCAR-F", name: "Claude Certified Architect – Foundations", provider: "Anthropic", level: "Intermediate", weeks: "3–4 weeks",
    summary: "Anthropic's architecture certification: agents, Claude Code, prompting, tool design and MCP.",
    forWho: "Engineers building AI features or agents, and DevOps people moving into AI infrastructure.",
    facts: [{ label: "Exam", value: "CCAR-F" }, { label: "Time", value: "120 min" }, { label: "Questions", value: "60" }, { label: "Pass mark", value: "72%" }, { label: "Eligibility", value: "Check Anthropic's FAQ" }],
    official: "https://anthropic-partners.skilljar.com/page/faq-certifications", feedTopic: "ai",
    steps: [
      { id: "eligibility", title: "Check eligibility and booking", why: "Registration runs through Anthropic's academy. Confirm you can sit it before studying.", resources: [
        { title: "Anthropic certification FAQ", kind: "Official", href: "https://anthropic-partners.skilljar.com/page/faq-certifications" } ] },
      { id: "course", title: "Watch a full prep course", why: "Covers all five domains with examples.", resources: [
        { title: "Claude Certified Architect – Foundations prep", kind: "Video", href: yt("reDRM0tqhNs"), note: "freeCodeCamp · 12h 39m" } ] },
      { id: "build", title: "Build with Claude Code and MCP", why: "Agentic architecture and Claude Code are almost half the exam.", resources: [
        { title: "Anthropic courses (free)", kind: "Docs", href: "https://github.com/anthropics/courses" },
        { title: "Model Context Protocol introduction", kind: "Docs", href: "https://modelcontextprotocol.io/introduction" },
        { title: "Claude Code Fundamentals (first topic free)", kind: "Hands-on", href: eb("claude-code-fundamentals"), note: "EscBash" } ] },
      { id: "practice", title: "Domain drills and timed practice exams", why: "EscBash has a study guide, domain practice and 10 timed practice exams.", resources: [
        { title: "CCAR-F practice", kind: "Practice", href: "https://www.escbash.com/certifications/ccar-f", note: "EscBash · paid plans" } ] },
    ],
  },
  {
    slug: "aws-devops-engineer-professional", stage: "Level up", code: "DOP-C02", name: "AWS Certified DevOps Engineer – Professional", provider: "AWS", level: "Intermediate", weeks: "10–12 weeks",
    summary: "The senior AWS DevOps exam: CI/CD, infrastructure as code, monitoring, incident response and resilience at scale.",
    forWho: "Engineers with an associate AWS certification and real time running workloads.",
    facts: [{ label: "Exam", value: "DOP-C02" }, { label: "Time", value: "180 min" }, { label: "Questions", value: "75" }, { label: "Price", value: "USD 300" }, { label: "Format", value: "Multiple choice / response" }],
    official: "https://aws.amazon.com/certification/certified-devops-engineer-professional/", feedTopic: "aws",
    steps: [
      { id: "guide", title: "Read the exam page and domains", why: "Long scenarios across SDLC automation, IaC, monitoring and resilience.", resources: [
        { title: "DOP-C02 exam page", kind: "Official", href: "https://aws.amazon.com/certification/certified-devops-engineer-professional/" } ] },
      { id: "course", title: "Watch a full course", why: "A recent end-to-end course for the current version.", resources: [
        { title: "DOP-C02 full course", kind: "Video", href: yt("j4Kzfk_ACPY"), note: "sthithapragna · 9h 20m" } ] },
      { id: "build", title: "Run a real pipeline on AWS", why: "Build a CodePipeline or GitHub Actions deploy with blue/green and rollbacks.", resources: [
        { title: "AWS Workshops catalogue", kind: "Hands-on", href: "https://workshops.aws/" },
        { title: "Project: CI/CD pipeline to Kubernetes", kind: "Hands-on", href: "/projects/ci-cd-pipeline" } ] },
      { id: "practice", title: "Timed practice exams", why: "180 minutes is long. Practise stamina as well as knowledge.", resources: [
        { title: "AWS Skill Builder practice", kind: "Practice", href: "https://skillbuilder.aws/" } ] },
    ],
  },
  {
    slug: "azure-devops-engineer", stage: "Level up", code: "AZ-400", name: "Microsoft Certified: DevOps Engineer Expert", provider: "Microsoft", level: "Intermediate", weeks: "8–10 weeks",
    summary: "Design and run DevOps on Azure and GitHub: source control, pipelines, security and instrumentation.",
    forWho: "Engineers who already hold AZ-104 or AZ-204 (one is required for the Expert title).",
    facts: [{ label: "Exam", value: "AZ-400" }, { label: "Prerequisite", value: "AZ-104 or AZ-204" }, { label: "Price", value: "Varies by country" }, { label: "Renewal", value: "Free, yearly" }, { label: "Covers", value: "Azure DevOps and GitHub" }],
    official: "https://learn.microsoft.com/en-us/credentials/certifications/devops-engineer/", feedTopic: "azure",
    steps: [
      { id: "prereq", title: "Get AZ-104 (or AZ-204) first", why: "The Expert certification needs one of them.", resources: [
        { title: "AZ-104 roadmap", kind: "Hands-on", href: "/certifications/azure-administrator" } ] },
      { id: "course", title: "Watch a full course", why: "Covers Azure Pipelines and GitHub Actions side by side.", resources: [
        { title: "AZ-400 full course", kind: "Video", href: yt("11KT1hPNkY4"), note: "freeCodeCamp · 7h 38m" } ] },
      { id: "learn", title: "Do the Microsoft Learn paths", why: "Official, free and closely matched to the exam.", resources: [
        { title: "AZ-400: Git for enterprise DevOps", kind: "Docs", href: "https://learn.microsoft.com/en-us/training/paths/az-400-work-git-for-enterprise-devops/" } ] },
      { id: "practice", title: "Take the practice assessment", why: "Free and official. Retake until you clear it comfortably.", resources: [
        { title: "AZ-400 practice assessment", kind: "Practice", href: "https://aka.ms/AZ400-LearnPA" } ] },
    ],
  },
];

export const certsCheckedOn = "13 Nov 2026";
export const STAGES: { stage: Stage; blurb: string }[] = [
  { stage: "Start here", blurb: "Foundational exams. Prove you speak cloud." },
  { stage: "Get hired", blurb: "Associate-level exams employers ask for in job posts." },
  { stage: "Level up", blurb: "Hands-on and professional exams for your next role." },
];
