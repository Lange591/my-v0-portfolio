// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This is the MODERN way to tell Next.js to create the 'out' folder.
  output: 'export',

  // This is needed for static export to work with images.
  images: {
    unoptimized: true,
  },
  
  // This is needed for your site to work on GitHub Pages.
  basePath: '/my-v0-portfolio',
};

export default nextConfig;