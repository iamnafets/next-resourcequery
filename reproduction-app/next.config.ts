import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  /* config options here */
  reactStrictMode: true,
  turbopack: {
    rules: {
      "*\\?raw": {
        loaders: [require.resolve("./loader.js")],
        as: "*.js"
      },
      /*
      // This doesn't work
      {
        "*.txt\\?raw": {
        loaders: ['raw-loader'],
      },

      // This doesn't work either and crashes turbopack
      "*?raw": {
        loaders: ['raw-loader'],
      }
      */
    }
  },
  webpack: (config) => {
    config.module.rules.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
