# Deployment Guide - Static Build

This portfolio is configured for static deployment. The build output is pure HTML, CSS, and JavaScript with no backend required.

## Build Process

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with all static files.

## Deployment Options

### 1. GitHub Pages (Recommended)

**Method A: Using gh-pages branch**
```bash
# Install gh-pages
npm install -g gh-pages

# Deploy to GitHub Pages
gh-pages -d dist
```

**Method B: Manual**
1. Build the project: `npm run build`
2. Push `dist` folder contents to `gh-pages` branch
3. Enable GitHub Pages in repository settings
4. Your site will be at: `https://username.github.io/repo-name`

**For custom domain:**
Add a `CNAME` file in `public` folder with your domain name.

---

### 2. Netlify

**Option A: Drag & Drop**
1. Build: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to Netlify

**Option B: Continuous Deployment**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

---

### 3. Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect via Vercel dashboard:
- Build command: `npm run build`
- Output directory: `dist`

---

### 4. Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Build
npm run build

# Deploy
firebase deploy
```

Firebase configuration:
- Public directory: `dist`
- Single-page app: `Yes`

---

### 5. Cloudflare Pages

1. Connect your GitHub repository
2. Build command: `npm run build`
3. Build output directory: `dist`

---

### 6. Traditional Web Hosting (cPanel, etc)

1. Build: `npm run build`
2. Upload entire `dist` folder contents to public_html or www folder
3. Done! Your site is live

**Important:** Make sure to upload the **contents** of dist folder, not the dist folder itself.

---

## Build Output Structure

After running `npm run build`, the `dist` folder contains:

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
└── vite.svg
```

All files are:
- ✅ Minified and optimized
- ✅ Bundled with hashed filenames for caching
- ✅ Ready for production
- ✅ No server required
- ✅ Works on any static host

## Testing Build Locally

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Then open http://localhost:4173

## Important Notes

1. **Base Path**: Already configured with `base: './'` for maximum compatibility
2. **No Environment Variables**: All content is hardcoded (no .env needed)
3. **SPA Routing**: If using a subdirectory, update `base` in vite.config.ts
4. **Asset Paths**: All paths are relative, works anywhere
5. **File Size**: Entire build is typically < 500KB (gzipped)

## Troubleshooting

**Issue**: White screen after deployment
- Solution: Check browser console, likely a base path issue
- Fix: Update `base` in vite.config.ts to match your deployment path

**Issue**: Assets not loading
- Solution: Ensure `base: './'` in vite.config.ts
- Or set to absolute path like `base: '/your-repo-name/'`

**Issue**: 404 on refresh
- Solution: Configure hosting for SPA (redirect all to index.html)
- GitHub Pages: Add `.nojekyll` file in public folder
- Netlify: Add `_redirects` file: `/* /index.html 200`
- Vercel: Auto-configured
- Firebase: Set `rewrites` in firebase.json

## Quick Deploy Commands

```bash
# Build
npm run build

# Deploy to Netlify (if CLI installed)
netlify deploy --prod --dir=dist

# Deploy to Vercel (if CLI installed)
vercel --prod

# Deploy to GitHub Pages
gh-pages -d dist

# Deploy to Firebase
firebase deploy
```

---

**Your website is 100% static and can be hosted anywhere!** 🚀
