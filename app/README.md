# Wafi Fahruzzaman - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a professional blue theme (#3967ed) and interactive animations.

## Features

- 🎨 Modern UI with blue theme (#3967ed)
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast performance with Vite
- 🎭 Smooth animations and transitions
- 📧 Contact form with email integration
- 🔗 Social media integration
- 💼 Professional project showcase
- 📊 Skills visualization

## Tech Stack

- **Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Pure CSS with CSS Variables
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the files

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production (Static Files)

```bash
npm run build
```

The built files will be in the `dist` directory. This is a **fully static build** ready to deploy anywhere!

### Preview Production Build

```bash
npm run preview
```

## Deployment

This is a **static website** that can be deployed to any hosting platform. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guides.

**Quick Deploy Options:**
- GitHub Pages (free)
- Netlify (free)
- Vercel (free)
- Cloudflare Pages (free)
- Any static hosting (cPanel, etc.)

**Simple deployment:**
1. Run `npm run build`
2. Upload the `dist` folder contents to your hosting
3. Done! ✅

## Customization

### Colors

The main blue color (#3967ed) can be changed in `/src/index.css`:

```css
:root {
  --primary-blue: #3967ed;
  --dark-blue: #2448c7;
  --light-blue: #5a8aff;
}
```

### Content

Update your personal information in the following files:
- `/src/components/Hero.tsx` - Main hero section
- `/src/components/About.tsx` - About section
- `/src/components/Experience.tsx` - Work experience
- `/src/components/Skills.tsx` - Skills and expertise
- `/src/components/Projects.tsx` - Projects and achievements
- `/src/components/Contact.tsx` - Contact information

### CV Download

Replace the CV link in `/src/components/Hero.tsx`:
```typescript
const downloadCV = () => {
  window.open('/CV_Wafi_Fahruzzaman.pdf', '_blank')
}
```

Place your CV file in the `public` directory.

## Project Structure

```
wafi-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx/css
│   │   ├── Hero.tsx/css
│   │   ├── About.tsx/css
│   │   ├── Experience.tsx/css
│   │   ├── Skills.tsx/css
│   │   ├── Projects.tsx/css
│   │   ├── Contact.tsx/css
│   │   └── Footer.tsx/css
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Sections

1. **Hero** - Introduction with animated typing effect
2. **About** - Personal information, education, and organization experience
3. **Experience** - Work history with tabbed interface
4. **Skills** - Technical and soft skills with progress bars
5. **Projects** - Portfolio projects with links
6. **Contact** - Contact form and information
7. **Footer** - Quick links and social media

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

- Email: wafifahruz@gmail.com
- LinkedIn: [wafi-fahruzzaman](https://www.linkedin.com/in/wafi-fahruzzaman/)
- Phone: +62 896-5637-7911

---

Built with ❤️ using React & TypeScript
