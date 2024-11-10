// vite.config.ts
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    viteReact(),
    // ...,
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "app"),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      // Proxy setup for development
      "/_server": {
        target: "https://vault-git-shiki-test-monte-yoons-projects.vercel.app",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
