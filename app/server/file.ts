import { createServerFn } from "@tanstack/start";
import fs from "fs/promises";
import path from "path";

const getFile = createServerFn("GET", async (pathUrl: string) => {
  try {
    const filePath = path.join(process.cwd(), `app/vaults${pathUrl}`);
    const data = await fs.readFile(filePath, "utf-8");
    return data;
  } catch (err) {
    console.error("File not found or another error:", err);
    return "Something went wrong";
  }
});

export { getFile };
