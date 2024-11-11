import { createServerFn } from "@tanstack/start";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(__filename);

const getFile = createServerFn("GET", async (pathUrl: string) => {
  try {
    const filePath = path.resolve(dirname, `../vaults${pathUrl}`);
    console.log(filePath);
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("File not found or another error:", err);
    return "Something went wrong";
  }
});

export { getFile };
