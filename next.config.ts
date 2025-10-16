// next.config.ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // ป้องกัน error ตอน export รูปภาพ
};

export default nextConfig;
