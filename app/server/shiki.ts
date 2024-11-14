import { createServerFn } from "@tanstack/start";

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

const getShiki = createServerFn("GET", async (codeStr: string) => {
  "use server";
  try {
    // const content = await fs.readFile(`./app/vaults${codeStr}`, "utf8");
    // const url = path.join(process.cwd(), `/app/vaults${codeStr}`);
    // console.log("Current working directory:", process.cwd());
    // const content = await fs.readFile(url, "utf8");
    const highligher = await getHighlighter();
    const html = highligher.codeToHtml(codeStr, {
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
