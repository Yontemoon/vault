import { createServerFn } from "@tanstack/start";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// const getFile = createServerFn("GET", async (pathUrl: string) => {
//   const __filename = fileURLToPath(import.meta.url);
//   console.log(__filename);
//   const __dirname = path.dirname(__filename);
//   console.log("APTHURL", pathUrl);
//   try {
//     console.log("DIRNAME", __dirname);
//     const filePath = path.resolve(__dirname, `../vaults${pathUrl.payload}`);
//     console.log(filePath);
//     const data = await fs.readFile(filePath, "utf-8");
//     return data;
//   } catch (err) {
//     console.error("File not found or another error:", err);
//     return "Something went wrong";
//   }
// });

const getFile = createServerFn("GET", async (url: string) => {
  try {
    const content = await fs.readFile(`./app/vaults${url}`, "utf8");

    return content;
  } catch (error) {
    console.error(error);
    return "Something went wrong";
  }
});

export { getFile };
