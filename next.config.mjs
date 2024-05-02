// @ts-check

/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer2";
const nextConfig = {

images: {
  remotePatterns: [
    {
      protocol: "http",
      hostname: "pathfinder-c03g.onrender.com",
      port: "",
      pathname: "/public/**"
    },
    {
      protocol: "https",
      hostname: "res.cloudinary.com",
      port: "",
      pathname: "/dc0zfjjea/**"
    }
  ]
},

    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
        // missingSuspenseWithCSRBailout: false,
      },
      eslint: {
        ignoreDuringBuilds: true,
    },

};

// @ts-ignore
export default withContentlayer({ ...nextConfig })

// export default nextConfig;
