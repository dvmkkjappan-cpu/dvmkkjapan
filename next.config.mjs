/** @type {import('next').NextConfig} */
const nextConfig = {
    // allow images from any domain for debugging initially
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            }
        ]
    }
};
export default nextConfig;
