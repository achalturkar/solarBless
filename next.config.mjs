/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',        // ✅ static export
  images: {
    unoptimized: true, 
},
};

export default nextConfig;
