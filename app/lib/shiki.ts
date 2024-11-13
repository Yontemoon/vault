// import * as fs from "fs/promises";
// import { join as pathJoin } from "path";
// import rehypeCode, { Options as RehypeCodeOptions } from "rehype-pretty-code";
// import * as shiki from "shiki";
// import { PluggableList } from "unified";

// const getShikiPath = (): string => {
//   return pathJoin(process.cwd(), "app/lib/shiki");
// };

// const touched = { current: false };

// // "Touch" the shiki assets so that Vercel will include them in the production
// // bundle. This is required because shiki itself dynamically access these files,
// // so Vercel doesn't know about them by default
// const touchShikiPath = (): void => {
//   if (touched.current) return; // only need to do once
//   fs.readdir(getShikiPath()); // fire and forget
//   touched.current = true;
// };

// const getHighlighter = async (options) => {
//   touchShikiPath();

//   const highlighter = await shiki.getHighlighter({
//     // This is technically not compatible with shiki's interface but
//     // necessary for rehype-pretty-code to work
//     // - https://rehype-pretty-code.netlify.app/ (see Custom Highlighter)
//     ...(options as any),
//     paths: {
//       languages: `${getShikiPath()}/languages/`,
//       themes: `${getShikiPath()}/themes/`,
//     },
//   });

//   return highlighter;
// };

// const getRehypeCodeOptions = (): Partial<RehypeCodeOptions> => ({
//   // Requirements for theme:
//   // - Has light and dark version
//   // - Uses italic in several places
//   theme: { light: "vitesse-dark", dark: "vitesse-dark" },
//   // Need to use a custom highlighter because rehype-pretty-code doesn't
//   // let us customize "paths".
//   getHighlighter,
// });

// export const getMdxCode = (): PluggableList => [
//   [rehypeCode, getRehypeCodeOptions()],
// ];
