import { createServerFn } from "@tanstack/start";
// import { codeToHtml } from "shiki";
// import { createHighlighterCore } from "shiki/core";
import path from "path";
import fs from "fs";
import { awaited, checkTypes, constReadOnly } from "@/vaults";

import {
  // BundledLanguage,
  // BundledTheme,
  // codeToHtml,
  createHighlighter,
} from "shiki/bundle/web";

const getHighlighter = async () => {
  const highlighter = await createHighlighter({
    langs: ["html", "css", "js", "ts"],
    themes: ["vitesse-dark"],
  });
  return highlighter;
};

// const loadFile = async (fileName: string) => {
//   try {
//     const module = await import(`./app/vaults/ts/${fileName}`);
//     return module;
//   } catch (error) {
//     console.error("Error loading file:", error);
//   }
// };
// loadFile("awaited.ts");

console.log(awaited, checkTypes, constReadOnly);

const getShiki = createServerFn("GET", async (codeStr: string) => {
  try {
    // const content = await fs.readFile(`./app/vaults${codeStr}`, "utf8");
    // const url = path.join(process.cwd(), `/app/vaults${codeStr}`);
    // console.log("Current working directory:", process.cwd());

    let dataPath = "";

    if (import.meta.env.PROD) {
      dataPath = path.resolve("awaited.ts");
    } else {
      dataPath = path.resolve(process.cwd(), "public", "awaited.ts");
    }

    console.log(dataPath);

    const content = fs.readFileSync(dataPath, "utf-8");
    console.log(content);
    // const content = await fs.readFile(url, "utf8");
    const highligher = await getHighlighter();
    const html = highligher.codeToHtml(content, {
      lang: "ts",
      theme: "vitesse-dark",
    });
    return html;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
});

export { getShiki };
