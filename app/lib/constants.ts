const NAVIGATION_LINKS = [
  {
    name: "Home",
    href: "/",
    slug: "home",
    abbreviation: "home",
  },
  {
    name: "Javascript",
    href: "/javascript",
    slug: "javascript",
    abbreviation: "js",
  },
  {
    name: "Typescript",
    href: "/typescript",
    slug: "typescript",
    abbreviation: "ts",
  },
  {
    name: "React",
    href: "/react",
    slug: "react",
    abbreviation: "react",
  },
  {
    name: "CSS",
    href: "/css",
    slug: "css",
    abbreviation: "css",
  },
  {
    name: "HTML",
    href: "/html",
    slug: "html",
    abbreviation: "html",
  },
] as const;

type TAbbreviations = (typeof NAVIGATION_LINKS)[number]["abbreviation"];

const TYPESCRIPT_ROUTES = [
  {
    title: "Awaited",
    href: "/typescript/awaited",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Check Types",
    href: "/typescript/check-types",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Const Read Only",
    href: "/typescript/const-read-only",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Discriminated Unions",
    href: "/typescript/discriminated-unions",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Generics",
    href: "/typescript/generics",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Grouped Types",
    href: "/typescript/grouped-types",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Partial and Required",
    href: "/typescript/partial-and-required",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Pick and Omit",
    href: "/typescript/pick-and-omit",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Record",
    href: "/typescript/record",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
  {
    title: "Return Types",
    href: "/typescript/return-types",
    description: "Learn about the 'Awaited' Generic in Typescript.",
    date: "November 2nd, 2024",
  },
];

const JAVASCRIPT_ROUTES = [
  {
    title: "testing",
    href: "/javascript/testing",
    description: "Some kind of description",
    date: "December 4th, 2024",
  },
];

const REACT_ROUTES = [
  {
    title: "Element Props",
    href: "/react/element-props",
    description: "Element Description",
    date: "December 4th, 2024",
  },
  {
    title: "Generic Components",
    href: "/react/generic-components",
    description: "generic-components Description",
    date: "December 4th, 2024",
  },
  {
    title: "useRef",
    href: "/react/use-ref",
    description: "useRef description.",
    date: "December 4th, 2024",
  },
];

export type { TAbbreviations };
export { NAVIGATION_LINKS, TYPESCRIPT_ROUTES, JAVASCRIPT_ROUTES, REACT_ROUTES };
