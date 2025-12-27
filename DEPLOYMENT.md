# Deployment Guide

## Deploy to Vercel

This website is optimized for deployment on Vercel.

### Quick Deploy

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Manual Deployment

If you have Vercel CLI installed:

```bash
npm install -g vercel
vercel
```

### Environment Variables

No environment variables are required for the basic deployment.

### Custom Domain

After deployment:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain (e.g., hampsteadrenovations.com)
4. Follow the DNS configuration instructions

### Performance Optimizations

This site includes:
- Server-side rendering with Next.js 15
- Optimized Tailwind CSS
- Smooth scrolling and animations
- Mobile-responsive design
- SEO metadata

### Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site.

### Build Locally

```bash
npm run build
npm start
```

This will create a production build and start the server.
