// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;





/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '1337', // Strapi development server port
          pathname: '/uploads/**', // Path for Strapi image uploads
        },
        {
          protocol: 'https',
          hostname: 'your-live-strapi-domain.com', // Replace with your live Strapi domain
          pathname: '/uploads/**', // Match live Strapi image paths
        },
      ],
      formats: ['image/avif', 'image/webp'], // Serve modern formats for optimization
      deviceSizes: [320, 420, 768, 1024, 1200], // Responsive image breakpoints
      imageSizes: [16, 32, 48, 64, 96], // Sizes for manually defined images
    },
    reactStrictMode: true, // Enable React's strict mode for best practices
  };
  
  export default nextConfig;
  