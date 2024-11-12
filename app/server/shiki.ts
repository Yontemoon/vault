import { createServerFn } from "@tanstack/start";
import { codeToHtml } from "shiki";
import path from "path";
import fs from "fs/promises";
import { awaited, checkTypes, constReadOnly } from "@/vaults";

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
    const content = await fs.readFile(`./app/vaults${codeStr}`, "utf8");
    // const url = path.join(process.cwd(), `/app/vaults${codeStr}`);
    // console.log("Current working directory:", process.cwd());
    // const dataPath = path.resolve(
    //   process.cwd(),
    //   "app",
    //   "vaults",
    //   "ts",
    //   "awaited.ts"
    // );

    // const content = fs.readFileSync(dataPath, "utf-8");
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
