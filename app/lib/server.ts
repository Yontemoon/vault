import { getShiki } from "@/server/shiki";
import { getFile } from "@/server/file";

async function createShiki(url: string) {
  try {
    const fileContent = await getFile(url);
    return getShiki(fileContent);
  } catch (error) {
    console.error(error);
    return "Something went wrong!";
  }
}

export { createShiki };
