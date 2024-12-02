import viteServer from "#vite-dev-server";
import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  vite: {
    plugins: [
      // TanStackRouterVite({
      //   routeToken: "layout",
      // }),
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      {
        name: "markdown-loader",
        transform(code, id) {
          if (id.slice(-3) === ".md") {
            return `export default ${JSON.stringify(code)}`;
          }
        },
      },
    ],
  },

  server: {
    preset: "vercel",
  },
});
