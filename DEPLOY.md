# Zio 3D Landing Page

A clean, minimal 3D landing page built with Next.js and React Three Fiber.

## Files Created

- **app/page.tsx** - Next.js page with React Three Fiber 3D scene
- **app/layout.tsx** - Root layout with metadata
- **app/globals.css** - Global styles with Tailwind CSS
- **landing.html** - Standalone HTML file with Three.js (can be deployed anywhere)

## Running Locally

```bash
npm install
npm run dev
```

## Deployment

### Option 1: Netlify Drop (Easiest - No Login Required)

1. Go to https://app.netlify.com/drop
2. Drag and drop the `landing.html` file
3. Get your unique URL immediately

### Option 2: Next.js Deploy

To deploy the Next.js version:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login and deploy
netlify login
netlify deploy --prod --dir=.
```

### Option 3: Vercel Deploy

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
npx vercel --prod
```

### Option 4: GitHub Pages

1. Push this repo to GitHub
2. Enable GitHub Pages in settings
3. Deploy

## 3D Features

- Rotating icosahedron with metallic material
- Floating particles
- Mouse interaction (parallax effect)
- Smooth animations
- Responsive design

## Credits

- Built with Next.js 16 + React 19
- Three.js for 3D rendering
- Tailwind CSS for styling