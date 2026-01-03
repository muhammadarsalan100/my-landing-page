/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // server build
  trailingSlash: true,  // optional, fine
  images: {
    unoptimized: true,  // avoids image optimization issues
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  experimental: {
    optimizeCss: true,   // optional: optimizes Tailwind CSS
    optimizeFonts: true, // optional: optimizes Google Fonts
  },
};

export default nextConfig;
