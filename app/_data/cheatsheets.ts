// Everyday commands for beginners. Placeholders are in <angle brackets>.
export type Command = { cmd: string; does: string };
export type Sheet = { id: string; name: string; intro: string; groups: { title: string; commands: Command[] }[] };

export const sheets: Sheet[] = [
  {
    id: "linux", name: "Linux", intro: "Moving around, reading files, permissions and processes.",
    groups: [
      { title: "Navigate & inspect", commands: [
        { cmd: "pwd", does: "Print the directory you are in" },
        { cmd: "ls -lah", does: "List files with sizes, permissions and hidden files" },
        { cmd: "cd -", does: "Jump back to the previous directory" },
        { cmd: "tree -L 2", does: "Show folders two levels deep (install tree first)" },
        { cmd: "du -sh *", does: "Size of each item in the current folder" },
        { cmd: "df -h", does: "Free disk space per mounted filesystem" },
      ] },
      { title: "Read & search", commands: [
        { cmd: "less <file>", does: "Page through a file (q to quit, / to search)" },
        { cmd: "tail -f <file>", does: "Follow a log file as new lines arrive" },
        { cmd: "grep -rn \"<text>\" .", does: "Find text in every file below this folder, with line numbers" },
        { cmd: "find . -name \"*.log\" -mtime -1", does: "Files ending in .log changed in the last day" },
      ] },
      { title: "Permissions & users", commands: [
        { cmd: "chmod 755 <file>", does: "Owner can do everything; others can read and run" },
        { cmd: "chown <user>:<group> <file>", does: "Change who owns a file" },
        { cmd: "sudo -i", does: "Open a root shell (use sparingly)" },
        { cmd: "id", does: "Show your user, group and group memberships" },
      ] },
      { title: "Processes & services", commands: [
        { cmd: "ps aux | grep <name>", does: "Find a running process" },
        { cmd: "top", does: "Live CPU and memory usage (htop is friendlier)" },
        { cmd: "kill <pid>", does: "Ask a process to stop (add -9 only as a last resort)" },
        { cmd: "systemctl status <service>", does: "Is a service running, and its latest logs" },
        { cmd: "journalctl -u <service> -f", does: "Follow a service's logs" },
      ] },
      { title: "Network", commands: [
        { cmd: "ip a", does: "Your network interfaces and IP addresses" },
        { cmd: "ss -tulpn", does: "Which ports are listening, and by which process" },
        { cmd: "curl -I https://example.com", does: "Fetch only the HTTP response headers" },
        { cmd: "dig +short <domain>", does: "Look up a domain's IP address" },
      ] },
    ],
  },
  {
    id: "git", name: "Git", intro: "Daily version control, from first commit to fixing mistakes.",
    groups: [
      { title: "Start & save", commands: [
        { cmd: "git init", does: "Turn the current folder into a repository" },
        { cmd: "git clone <url>", does: "Copy a remote repository to your machine" },
        { cmd: "git status", does: "What changed and what is staged" },
        { cmd: "git add -p", does: "Stage changes piece by piece, reviewing each one" },
        { cmd: "git commit -m \"<message>\"", does: "Save the staged changes as a commit" },
      ] },
      { title: "Branches", commands: [
        { cmd: "git switch -c <branch>", does: "Create a branch and move to it" },
        { cmd: "git switch main", does: "Go back to main" },
        { cmd: "git merge <branch>", does: "Bring another branch's commits into this one" },
        { cmd: "git rebase main", does: "Replay your branch on top of the latest main" },
        { cmd: "git branch -d <branch>", does: "Delete a branch that is already merged" },
      ] },
      { title: "Remote", commands: [
        { cmd: "git pull --rebase", does: "Get the latest changes without a merge commit" },
        { cmd: "git push -u origin <branch>", does: "Publish a new branch and track it" },
        { cmd: "git fetch --prune", does: "Update remote branches, drop deleted ones" },
      ] },
      { title: "Inspect & undo", commands: [
        { cmd: "git log --oneline --graph", does: "Compact history with branch lines" },
        { cmd: "git diff --staged", does: "What you are about to commit" },
        { cmd: "git restore <file>", does: "Throw away unstaged changes to a file" },
        { cmd: "git commit --amend", does: "Fix the last commit's message or contents (before pushing)" },
        { cmd: "git revert <commit>", does: "Undo a pushed commit safely with a new commit" },
        { cmd: "git stash", does: "Put work aside; git stash pop brings it back" },
      ] },
    ],
  },
  {
    id: "docker", name: "Docker", intro: "Build images, run containers and clean up after yourself.",
    groups: [
      { title: "Images", commands: [
        { cmd: "docker build -t <name>:<tag> .", does: "Build an image from the Dockerfile here" },
        { cmd: "docker images", does: "List local images" },
        { cmd: "docker pull <image>", does: "Download an image from a registry" },
        { cmd: "docker push <user>/<name>:<tag>", does: "Upload an image (log in first)" },
      ] },
      { title: "Containers", commands: [
        { cmd: "docker run -d -p 8080:80 --name web nginx", does: "Run nginx in the background on localhost:8080" },
        { cmd: "docker ps -a", does: "All containers, including stopped ones" },
        { cmd: "docker logs -f <container>", does: "Follow a container's output" },
        { cmd: "docker exec -it <container> sh", does: "Open a shell inside a running container" },
        { cmd: "docker stop <container>", does: "Stop a container gracefully" },
      ] },
      { title: "Compose", commands: [
        { cmd: "docker compose up -d", does: "Start every service in compose.yaml" },
        { cmd: "docker compose logs -f", does: "Follow logs from all services" },
        { cmd: "docker compose down", does: "Stop and remove the services and their network" },
      ] },
      { title: "Clean up", commands: [
        { cmd: "docker system df", does: "How much disk Docker is using" },
        { cmd: "docker system prune", does: "Remove stopped containers, unused networks and dangling images" },
      ] },
    ],
  },
  {
    id: "kubectl", name: "kubectl", intro: "Look around a Kubernetes cluster and debug what you deployed.",
    groups: [
      { title: "Context", commands: [
        { cmd: "kubectl config get-contexts", does: "Which clusters you can talk to" },
        { cmd: "kubectl config use-context <name>", does: "Switch cluster" },
        { cmd: "kubectl config set-context --current --namespace=<ns>", does: "Change your default namespace" },
      ] },
      { title: "Look around", commands: [
        { cmd: "kubectl get pods -o wide", does: "Pods with their node and IP" },
        { cmd: "kubectl get all -n <ns>", does: "Common resources in a namespace" },
        { cmd: "kubectl describe pod <pod>", does: "Details and recent events (start here when debugging)" },
        { cmd: "kubectl get events --sort-by=.lastTimestamp", does: "What happened recently, newest last" },
      ] },
      { title: "Deploy & change", commands: [
        { cmd: "kubectl apply -f <file>.yaml", does: "Create or update resources from a file" },
        { cmd: "kubectl create deployment web --image=nginx --dry-run=client -o yaml", does: "Print a starter Deployment manifest" },
        { cmd: "kubectl scale deployment <name> --replicas=3", does: "Run three copies" },
        { cmd: "kubectl rollout status deployment <name>", does: "Watch a rollout finish" },
        { cmd: "kubectl rollout undo deployment <name>", does: "Go back to the previous version" },
      ] },
      { title: "Debug", commands: [
        { cmd: "kubectl logs <pod> -f", does: "Follow a pod's logs (add -c for a container)" },
        { cmd: "kubectl logs <pod> --previous", does: "Logs from the last crashed container" },
        { cmd: "kubectl exec -it <pod> -- sh", does: "Shell inside a pod" },
        { cmd: "kubectl port-forward svc/<service> 8080:80", does: "Reach a service on localhost:8080" },
      ] },
    ],
  },
  {
    id: "terraform", name: "Terraform", intro: "The plan-apply loop, state and workspaces.",
    groups: [
      { title: "Core loop", commands: [
        { cmd: "terraform init", does: "Download providers and set up the backend" },
        { cmd: "terraform fmt -recursive", does: "Format every .tf file" },
        { cmd: "terraform validate", does: "Check the configuration is valid" },
        { cmd: "terraform plan -out=tfplan", does: "Preview changes and save the plan" },
        { cmd: "terraform apply tfplan", does: "Apply exactly the saved plan" },
        { cmd: "terraform destroy", does: "Delete everything this configuration manages" },
      ] },
      { title: "State", commands: [
        { cmd: "terraform state list", does: "Every resource Terraform is tracking" },
        { cmd: "terraform state show <address>", does: "Details of one tracked resource" },
        { cmd: "terraform output", does: "Print the configuration's outputs" },
        { cmd: "terraform import <address> <id>", does: "Bring an existing resource under Terraform" },
      ] },
      { title: "Workspaces", commands: [
        { cmd: "terraform workspace list", does: "List workspaces" },
        { cmd: "terraform workspace new <name>", does: "Create a workspace, e.g. dev or prod" },
      ] },
    ],
  },
];

export const commandCount = sheets.reduce((n, s) => n + s.groups.reduce((m, g) => m + g.commands.length, 0), 0);
