/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",       // ✅ server build, not static export
  trailingSlash: true,
  images: {
    unoptimized: true,         // optional: avoids Next.js image optimization
  },
  env: {
    // you can keep public env vars here if needed
    NEXT_PUBLIC_BASE_PATH: "",
  },
};

export default nextConfig;
