import { createServerFn } from "@tanstack/start";
import fs from "node:fs/promises";

const getFile = createServerFn("GET", async (path: string) => {
  try {
    const data = await fs.readFile(`./app/vaults${path}`, {
      encoding: "utf8",
    });
    return data;
  } catch (err) {
    console.error(err);
    return "Something went wrong";
  }
});

export { getFile };
