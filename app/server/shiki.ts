import { createServerFn } from "@tanstack/start";
import { codeToHtml } from "shiki";
import path from "path";
import fs from "fs";

const getShiki = createServerFn("GET", async (codeStr: string) => {
  "use server";
  try {
    // const content = await fs.readFile(`./app/vaults${codeStr}`, "utf8");
    // const url = path.join(process.cwd(), `/app/vaults${codeStr}`);

    const content = fs.readFileSync(
      path.join(process.cwd(), "app", "vaults", "ts", "awaited.ts"),
      "utf-8"
    );
    // const content = await fs.readFile(url, "utf8");

    const html = await codeToHtml(content, {
      lang: "typescript",
      theme: "vitesse-dark",
    });
    return html;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
});

export { getShiki };
