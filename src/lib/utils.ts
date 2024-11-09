import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: FIGURE OUT THE url param type here.
// TODO: INSTEAD OF STRING, SHOULD BE ENUM OF URLS
function urlToTitle(url: string): string {
  let title = "";
  const urlArr = url.split("/");

  urlArr.forEach((str) => {
    const firstLetter = str.charAt(0).toUpperCase();

    title += ` ${firstLetter + str.slice(1)}`;
  });
  return title.trim();
}

// RETURN THE PARENT URL IN ROUTES
// /typescript/grouped-types => /typescript
function getParentUrl(url: string): string {
  const urlArr = url.split("/");
  return "/" + urlArr[1];
}

export { cn, urlToTitle, getParentUrl };
