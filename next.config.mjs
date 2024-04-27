// @ts-check

/** @type {import('next').NextConfig} */
import { withContentlayer } from "next-contentlayer2";
const nextConfig = {



    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
        // missingSuspenseWithCSRBailout: false,
      },
      eslint: {
        ignoreDuringBuilds: true,
    },

};

export default withContentlayer({ ...nextConfig });

// export default nextConfig;
