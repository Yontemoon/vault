import { defineConfig } from "@tanstack/start/config";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
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
    compatibilityDate: "2024-12-03",
    preset: "vercel",
    prerender: {
      routes: ["/", "/react", "/typescript", "/html", "/css", "javascript"],
      crawlLinks: true,
    },
  },
});
