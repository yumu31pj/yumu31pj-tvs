import type { NextConfig } from "next";
const path = require('path');

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), './sass')],
  },
};

export default nextConfig;
