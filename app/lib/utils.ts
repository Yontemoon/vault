import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { NAVIGATION_LINKS } from "./constants";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// * "return-types" ==> "Return Types"
function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
    .trim();
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

// * RETURN THE PARENT URL IN ROUTES
// * /typescript/grouped-types => /typescript
function getParentUrl(url: string): string {
  const urlArr = url.split("/");
  return "/" + urlArr[1];
}

function backgroundLangStyle(
  currentLang: (typeof NAVIGATION_LINKS)[number]["abbreviation"]
) {
  switch (currentLang) {
    case "js":
      return "bg-backgroundJs";
    case "react":
      return "bg-backgroundReact";
    case "ts":
      return "bg-backgroundTs";
    case "css":
      return "bg-backgroundCss";
    case "html":
      return "bg-backgroundHtml";
    default:
      return "bg-background";
  }
}

export { cn, urlToTitle, getParentUrl, backgroundLangStyle, slugToTitle };
