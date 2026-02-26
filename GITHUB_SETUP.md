# GitHub Setup Instructions

## IMPORTANT: GitHub Authentication

GitHub now requires a **Personal Access Token (PAT)** for CLI authentication instead of a password.

### Step 1: Create Personal Access Token

1. Go to **https://github.com/settings/tokens**
2. Click **"Generate new token (classic)"**
3. Give it a name (e.g., "Zio Setup")
4. Select scopes: check **`repo`** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Authenticate with GitHub CLI

```bash
cd zio-landing
echo "YOUR_PAT" | gh auth login --with-token
```

Replace `YOUR_PAT` with your actual token.

### Step 3: Create Repository

```bash
gh repo create zio-landing --public --source=. --remote=origin --push
```

### Step 4: Add Collaborator

```bash
gh api repos/:owner/zio-landing/collaborators/shokal.ash21016@gmail.com --method PUT -f permission=admin
```

Or visit: https://github.com/zio-landing/zio-landing/settings/access

### Step 5: Deploy to Netlify

1. Go to **https://app.netlify.com**
2. Click **"Add new site" → "Import an existing project"**
3. Select your `zio-landing` repository
4. Build command: `npm run build`
5. Publish directory: `out`
6. Click **"Deploy site"**

**OR** simply use Netlify Drop:
1. Go to **https://app.netlify.com/drop**
2. Drag and drop `landing.html`
3. Get your URL immediately!

---

## Quick Manual Setup (No Token Required)

### Create Repository Manually

1. Go to https://github.com/new
2. Create repo named `zio-landing`
3. **Don't** add README/gitignore/license
4. Click **"Create repository"**

### Push Code

```bash
cd zio-landing
git remote add origin https://github.com/YOUR_USERNAME/zio-landing.git
git branch -M main
git push -u origin main
```

### Add Collaborator (on GitHub website)

1. Go to repo settings: https://github.com/YOUR_USERNAME/zio-landing/settings/access
2. Click **"Invite Collaborator"**
3. Search: `shokal.ash21016@gmail.com`
4. Select permission level (Admin recommended)
5. Click **"Add collaborator"**