import { createServerFn } from "@tanstack/start";
import { codeToHtml } from "shiki";
import fs from "fs/promises";

const getShiki = createServerFn("GET", async (codeStr: string) => {
  try {
    const content = await fs.readFile(`./app/vaults${codeStr}`, "utf8");
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
