# Netlify Deployment Guide

## Quick Deploy (Standalone HTML)

1. Go to: **https://app.netlify.com/drop**
2. Drag `landing.html` into the drop zone
3. Wait 30 seconds
4. Your URL will be displayed!

Example: `https://random-name.netlify.app`

---

## Deploy Next.js Version (Recommended)

1. Log in to: **https://app.netlify.com**
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **"GitHub"**
4. Choose repository: `abedinjoynul07/zio-landing`
5. Click **"Deploy site"**

### Build Settings

If manual settings are needed:

| Setting | Value |
|---------|-------|
| **Build command** | `npm run build` |
| **Publish directory** | `out` |

---

## Update Deployed Site

1. Push changes to GitHub: `git push`
2. Netlify will automatically detect the change
3. The site will auto-deploy (takes 1-2 minutes)

Or manually redeploy:
1. Go to your site on Netlify
2. Click **"Deploys"** → **"Trigger deploy"**

---

## Custom Domain (Optional)

1. Go to Netlify site settings
2. Click **"Domain management"**
3. Add custom domain (e.g., `zio.abedinjoynul07.com`)
4. Follow DNS instructions

---

## Preview Deployments

Every time you push to a branch, Netlify creates a preview URL:

`https://random-name--deploy-preview.netlify.app`

---

## Troubleshooting

**Build fails?** Check the build log in Netlify dashboard for errors.

**Page not updating?** Try:
- Purge the build cache
- Redeploy manually
- Check if you're pushing to `main` branch

**Page is blank?**
- Check browser console for errors
- Verify publish directory is set to `out` for Next.js
- Check if `landing.html` is the root file for standalone version