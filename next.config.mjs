import { NextFederationPlugin } from "@module-federation/nextjs-mf";

/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/transfer/:url",
      destination: "/:url",
    },
  ],

  // reactStrictMode: true,
  //Inter
  // output: "export",
  // experimental: {
  //   esmExternals: "loose", // required for the canvas to work
  // },
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.node/,
    //   use: "raw-loader",
    // });

    // config.resolve.alias.canvas = false;

    // const { isServer } = options;
    // config.experiments = { topLevelAwait: true };
    // config.plugins.push(
    //   new NextFederationPlugin({
    //     name: "app1",
    //     remotes: {
    //       app2: `app2@http://localhost:3000/_next/static/${isServer ? "ssr" : "chunks"}/remoteEntry.js`,
    //     },
    //   }),
    // );

    // config.externals = [...config.externals, { canvas: "canvas" }]; // required for the canvas to work
    return config;
  },
  images: {
    domains: [
      "quanticfiles.com",
      "minio.quanticfiles.com",
      "https://minio.quanticfiles.com",
      "https://quanticfiles.com",
    ],
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
      {
        hostname: "quanticfiles.com",

        protocol: "https",
        port: "",
        pathname: "**",
      },
      {
        hostname: "quanticfiles.com",

        protocol: "https",
        port: "443",
        pathname: "**",
      },

      {
        hostname: "minio.quanticfiles.com",

        protocol: "https",
        port: "",
        pathname: "**",
      },

      {
        hostname: "minio.quanticfiles.com",

        protocol: "https",
        port: "443",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        // pathname: ''
      },
      {
        protocol: "http",
        hostname: "193.160.226.130",
        port: "9000",
        // pathname: ''
      },
      {
        protocol: "http",
        hostname: "193.160.226.130",
        port: "5432",
        // pathname: ''
      },
      {
        protocol: "http",
        hostname: "192.168.0.101",
        port: "9000",
        // pathname: ''
      },
      {
        protocol: "https",
        hostname: "minio.quanticfiles.com",
        port: "443",
      },

      {
        protocol: "https",
        hostname: "quanticfiles.com",
        port: "443",
      },
    ],
  },
  env: {
    BACKEND_DOMAIN: process.env.BACKEND_DOMAIN,
    FRONTEND_DOMAIN: process.env.FRONTEND_DOMAIN,
  },
};

export default nextConfig;
