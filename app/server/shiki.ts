import { createServerFn } from "@tanstack/start";
import { codeToHtml } from "shiki";

const getShiki = createServerFn("GET", async (codeStr: string) => {
  try {
    const html = await codeToHtml(codeStr, {
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
