import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    endPoint: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      new URL(
        "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ),
    ],
  },
};

export default nextConfig;
