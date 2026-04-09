# Deploy Halo Health Site

## Step 1: Auth GitHub CLI
```bash
gh auth login
```
Choose: GitHub.com → HTTPS → Yes → Login with a web browser. Follow the prompts.

## Step 2: Create the GitHub repo
```bash
gh repo create halo-health-site --public --description "Halo Health — GLP-1 telehealth website" --source . --remote origin --push
```
This creates the repo, sets the remote, and pushes in one command.

## Step 3: Install Vercel CLI and deploy
```bash
npm i -g vercel
vercel login
vercel --prod
```
When prompted: link to existing project? **No** → project name: **halo-health-site** → directory: **./** → override settings? **No**

## Step 4: Add custom domain (optional)
```bash
vercel domains add yourdomain.com
```
Then update your DNS records as Vercel instructs.

---

That's it. Three commands to go from folder → live site.
