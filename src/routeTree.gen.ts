/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'
import { Route as TypescriptIndexImport } from './routes/typescript/index'
import { Route as ReactIndexImport } from './routes/react/index'
import { Route as JavascriptIndexImport } from './routes/javascript/index'
import { Route as TypescriptReturnTypesImport } from './routes/typescript/return-types'
import { Route as TypescriptRecordImport } from './routes/typescript/record'
import { Route as TypescriptPickAndOmitImport } from './routes/typescript/pick-and-omit'
import { Route as TypescriptPartialAndRequiredImport } from './routes/typescript/partial-and-required'
import { Route as TypescriptGroupedTypesImport } from './routes/typescript/grouped-types'
import { Route as TypescriptGenericsImport } from './routes/typescript/generics'
import { Route as TypescriptDiscriminatedUnionsImport } from './routes/typescript/discriminated-unions'
import { Route as TypescriptConstReadOnlyImport } from './routes/typescript/const-read-only'
import { Route as TypescriptCheckTypesImport } from './routes/typescript/check-types'
import { Route as TypescriptAwaitedImport } from './routes/typescript/awaited'
import { Route as ReactUseRefImport } from './routes/react/use-ref'
import { Route as ReactGenericComponentsImport } from './routes/react/generic-components'
import { Route as ReactElementPropsImport } from './routes/react/element-props'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptIndexRoute = TypescriptIndexImport.update({
  id: '/typescript/',
  path: '/typescript/',
  getParentRoute: () => rootRoute,
} as any)

const ReactIndexRoute = ReactIndexImport.update({
  id: '/react/',
  path: '/react/',
  getParentRoute: () => rootRoute,
} as any)

const JavascriptIndexRoute = JavascriptIndexImport.update({
  id: '/javascript/',
  path: '/javascript/',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptReturnTypesRoute = TypescriptReturnTypesImport.update({
  id: '/typescript/return-types',
  path: '/typescript/return-types',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptRecordRoute = TypescriptRecordImport.update({
  id: '/typescript/record',
  path: '/typescript/record',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptPickAndOmitRoute = TypescriptPickAndOmitImport.update({
  id: '/typescript/pick-and-omit',
  path: '/typescript/pick-and-omit',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptPartialAndRequiredRoute =
  TypescriptPartialAndRequiredImport.update({
    id: '/typescript/partial-and-required',
    path: '/typescript/partial-and-required',
    getParentRoute: () => rootRoute,
  } as any)

const TypescriptGroupedTypesRoute = TypescriptGroupedTypesImport.update({
  id: '/typescript/grouped-types',
  path: '/typescript/grouped-types',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptGenericsRoute = TypescriptGenericsImport.update({
  id: '/typescript/generics',
  path: '/typescript/generics',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptDiscriminatedUnionsRoute =
  TypescriptDiscriminatedUnionsImport.update({
    id: '/typescript/discriminated-unions',
    path: '/typescript/discriminated-unions',
    getParentRoute: () => rootRoute,
  } as any)

const TypescriptConstReadOnlyRoute = TypescriptConstReadOnlyImport.update({
  id: '/typescript/const-read-only',
  path: '/typescript/const-read-only',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptCheckTypesRoute = TypescriptCheckTypesImport.update({
  id: '/typescript/check-types',
  path: '/typescript/check-types',
  getParentRoute: () => rootRoute,
} as any)

const TypescriptAwaitedRoute = TypescriptAwaitedImport.update({
  id: '/typescript/awaited',
  path: '/typescript/awaited',
  getParentRoute: () => rootRoute,
} as any)

const ReactUseRefRoute = ReactUseRefImport.update({
  id: '/react/use-ref',
  path: '/react/use-ref',
  getParentRoute: () => rootRoute,
} as any)

const ReactGenericComponentsRoute = ReactGenericComponentsImport.update({
  id: '/react/generic-components',
  path: '/react/generic-components',
  getParentRoute: () => rootRoute,
} as any)

const ReactElementPropsRoute = ReactElementPropsImport.update({
  id: '/react/element-props',
  path: '/react/element-props',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/react/element-props': {
      id: '/react/element-props'
      path: '/react/element-props'
      fullPath: '/react/element-props'
      preLoaderRoute: typeof ReactElementPropsImport
      parentRoute: typeof rootRoute
    }
    '/react/generic-components': {
      id: '/react/generic-components'
      path: '/react/generic-components'
      fullPath: '/react/generic-components'
      preLoaderRoute: typeof ReactGenericComponentsImport
      parentRoute: typeof rootRoute
    }
    '/react/use-ref': {
      id: '/react/use-ref'
      path: '/react/use-ref'
      fullPath: '/react/use-ref'
      preLoaderRoute: typeof ReactUseRefImport
      parentRoute: typeof rootRoute
    }
    '/typescript/awaited': {
      id: '/typescript/awaited'
      path: '/typescript/awaited'
      fullPath: '/typescript/awaited'
      preLoaderRoute: typeof TypescriptAwaitedImport
      parentRoute: typeof rootRoute
    }
    '/typescript/check-types': {
      id: '/typescript/check-types'
      path: '/typescript/check-types'
      fullPath: '/typescript/check-types'
      preLoaderRoute: typeof TypescriptCheckTypesImport
      parentRoute: typeof rootRoute
    }
    '/typescript/const-read-only': {
      id: '/typescript/const-read-only'
      path: '/typescript/const-read-only'
      fullPath: '/typescript/const-read-only'
      preLoaderRoute: typeof TypescriptConstReadOnlyImport
      parentRoute: typeof rootRoute
    }
    '/typescript/discriminated-unions': {
      id: '/typescript/discriminated-unions'
      path: '/typescript/discriminated-unions'
      fullPath: '/typescript/discriminated-unions'
      preLoaderRoute: typeof TypescriptDiscriminatedUnionsImport
      parentRoute: typeof rootRoute
    }
    '/typescript/generics': {
      id: '/typescript/generics'
      path: '/typescript/generics'
      fullPath: '/typescript/generics'
      preLoaderRoute: typeof TypescriptGenericsImport
      parentRoute: typeof rootRoute
    }
    '/typescript/grouped-types': {
      id: '/typescript/grouped-types'
      path: '/typescript/grouped-types'
      fullPath: '/typescript/grouped-types'
      preLoaderRoute: typeof TypescriptGroupedTypesImport
      parentRoute: typeof rootRoute
    }
    '/typescript/partial-and-required': {
      id: '/typescript/partial-and-required'
      path: '/typescript/partial-and-required'
      fullPath: '/typescript/partial-and-required'
      preLoaderRoute: typeof TypescriptPartialAndRequiredImport
      parentRoute: typeof rootRoute
    }
    '/typescript/pick-and-omit': {
      id: '/typescript/pick-and-omit'
      path: '/typescript/pick-and-omit'
      fullPath: '/typescript/pick-and-omit'
      preLoaderRoute: typeof TypescriptPickAndOmitImport
      parentRoute: typeof rootRoute
    }
    '/typescript/record': {
      id: '/typescript/record'
      path: '/typescript/record'
      fullPath: '/typescript/record'
      preLoaderRoute: typeof TypescriptRecordImport
      parentRoute: typeof rootRoute
    }
    '/typescript/return-types': {
      id: '/typescript/return-types'
      path: '/typescript/return-types'
      fullPath: '/typescript/return-types'
      preLoaderRoute: typeof TypescriptReturnTypesImport
      parentRoute: typeof rootRoute
    }
    '/javascript/': {
      id: '/javascript/'
      path: '/javascript'
      fullPath: '/javascript'
      preLoaderRoute: typeof JavascriptIndexImport
      parentRoute: typeof rootRoute
    }
    '/react/': {
      id: '/react/'
      path: '/react'
      fullPath: '/react'
      preLoaderRoute: typeof ReactIndexImport
      parentRoute: typeof rootRoute
    }
    '/typescript/': {
      id: '/typescript/'
      path: '/typescript'
      fullPath: '/typescript'
      preLoaderRoute: typeof TypescriptIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/react/element-props': typeof ReactElementPropsRoute
  '/react/generic-components': typeof ReactGenericComponentsRoute
  '/react/use-ref': typeof ReactUseRefRoute
  '/typescript/awaited': typeof TypescriptAwaitedRoute
  '/typescript/check-types': typeof TypescriptCheckTypesRoute
  '/typescript/const-read-only': typeof TypescriptConstReadOnlyRoute
  '/typescript/discriminated-unions': typeof TypescriptDiscriminatedUnionsRoute
  '/typescript/generics': typeof TypescriptGenericsRoute
  '/typescript/grouped-types': typeof TypescriptGroupedTypesRoute
  '/typescript/partial-and-required': typeof TypescriptPartialAndRequiredRoute
  '/typescript/pick-and-omit': typeof TypescriptPickAndOmitRoute
  '/typescript/record': typeof TypescriptRecordRoute
  '/typescript/return-types': typeof TypescriptReturnTypesRoute
  '/javascript': typeof JavascriptIndexRoute
  '/react': typeof ReactIndexRoute
  '/typescript': typeof TypescriptIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/react/element-props': typeof ReactElementPropsRoute
  '/react/generic-components': typeof ReactGenericComponentsRoute
  '/react/use-ref': typeof ReactUseRefRoute
  '/typescript/awaited': typeof TypescriptAwaitedRoute
  '/typescript/check-types': typeof TypescriptCheckTypesRoute
  '/typescript/const-read-only': typeof TypescriptConstReadOnlyRoute
  '/typescript/discriminated-unions': typeof TypescriptDiscriminatedUnionsRoute
  '/typescript/generics': typeof TypescriptGenericsRoute
  '/typescript/grouped-types': typeof TypescriptGroupedTypesRoute
  '/typescript/partial-and-required': typeof TypescriptPartialAndRequiredRoute
  '/typescript/pick-and-omit': typeof TypescriptPickAndOmitRoute
  '/typescript/record': typeof TypescriptRecordRoute
  '/typescript/return-types': typeof TypescriptReturnTypesRoute
  '/javascript': typeof JavascriptIndexRoute
  '/react': typeof ReactIndexRoute
  '/typescript': typeof TypescriptIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/react/element-props': typeof ReactElementPropsRoute
  '/react/generic-components': typeof ReactGenericComponentsRoute
  '/react/use-ref': typeof ReactUseRefRoute
  '/typescript/awaited': typeof TypescriptAwaitedRoute
  '/typescript/check-types': typeof TypescriptCheckTypesRoute
  '/typescript/const-read-only': typeof TypescriptConstReadOnlyRoute
  '/typescript/discriminated-unions': typeof TypescriptDiscriminatedUnionsRoute
  '/typescript/generics': typeof TypescriptGenericsRoute
  '/typescript/grouped-types': typeof TypescriptGroupedTypesRoute
  '/typescript/partial-and-required': typeof TypescriptPartialAndRequiredRoute
  '/typescript/pick-and-omit': typeof TypescriptPickAndOmitRoute
  '/typescript/record': typeof TypescriptRecordRoute
  '/typescript/return-types': typeof TypescriptReturnTypesRoute
  '/javascript/': typeof JavascriptIndexRoute
  '/react/': typeof ReactIndexRoute
  '/typescript/': typeof TypescriptIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/react/element-props'
    | '/react/generic-components'
    | '/react/use-ref'
    | '/typescript/awaited'
    | '/typescript/check-types'
    | '/typescript/const-read-only'
    | '/typescript/discriminated-unions'
    | '/typescript/generics'
    | '/typescript/grouped-types'
    | '/typescript/partial-and-required'
    | '/typescript/pick-and-omit'
    | '/typescript/record'
    | '/typescript/return-types'
    | '/javascript'
    | '/react'
    | '/typescript'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/react/element-props'
    | '/react/generic-components'
    | '/react/use-ref'
    | '/typescript/awaited'
    | '/typescript/check-types'
    | '/typescript/const-read-only'
    | '/typescript/discriminated-unions'
    | '/typescript/generics'
    | '/typescript/grouped-types'
    | '/typescript/partial-and-required'
    | '/typescript/pick-and-omit'
    | '/typescript/record'
    | '/typescript/return-types'
    | '/javascript'
    | '/react'
    | '/typescript'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/react/element-props'
    | '/react/generic-components'
    | '/react/use-ref'
    | '/typescript/awaited'
    | '/typescript/check-types'
    | '/typescript/const-read-only'
    | '/typescript/discriminated-unions'
    | '/typescript/generics'
    | '/typescript/grouped-types'
    | '/typescript/partial-and-required'
    | '/typescript/pick-and-omit'
    | '/typescript/record'
    | '/typescript/return-types'
    | '/javascript/'
    | '/react/'
    | '/typescript/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ReactElementPropsRoute: typeof ReactElementPropsRoute
  ReactGenericComponentsRoute: typeof ReactGenericComponentsRoute
  ReactUseRefRoute: typeof ReactUseRefRoute
  TypescriptAwaitedRoute: typeof TypescriptAwaitedRoute
  TypescriptCheckTypesRoute: typeof TypescriptCheckTypesRoute
  TypescriptConstReadOnlyRoute: typeof TypescriptConstReadOnlyRoute
  TypescriptDiscriminatedUnionsRoute: typeof TypescriptDiscriminatedUnionsRoute
  TypescriptGenericsRoute: typeof TypescriptGenericsRoute
  TypescriptGroupedTypesRoute: typeof TypescriptGroupedTypesRoute
  TypescriptPartialAndRequiredRoute: typeof TypescriptPartialAndRequiredRoute
  TypescriptPickAndOmitRoute: typeof TypescriptPickAndOmitRoute
  TypescriptRecordRoute: typeof TypescriptRecordRoute
  TypescriptReturnTypesRoute: typeof TypescriptReturnTypesRoute
  JavascriptIndexRoute: typeof JavascriptIndexRoute
  ReactIndexRoute: typeof ReactIndexRoute
  TypescriptIndexRoute: typeof TypescriptIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ReactElementPropsRoute: ReactElementPropsRoute,
  ReactGenericComponentsRoute: ReactGenericComponentsRoute,
  ReactUseRefRoute: ReactUseRefRoute,
  TypescriptAwaitedRoute: TypescriptAwaitedRoute,
  TypescriptCheckTypesRoute: TypescriptCheckTypesRoute,
  TypescriptConstReadOnlyRoute: TypescriptConstReadOnlyRoute,
  TypescriptDiscriminatedUnionsRoute: TypescriptDiscriminatedUnionsRoute,
  TypescriptGenericsRoute: TypescriptGenericsRoute,
  TypescriptGroupedTypesRoute: TypescriptGroupedTypesRoute,
  TypescriptPartialAndRequiredRoute: TypescriptPartialAndRequiredRoute,
  TypescriptPickAndOmitRoute: TypescriptPickAndOmitRoute,
  TypescriptRecordRoute: TypescriptRecordRoute,
  TypescriptReturnTypesRoute: TypescriptReturnTypesRoute,
  JavascriptIndexRoute: JavascriptIndexRoute,
  ReactIndexRoute: ReactIndexRoute,
  TypescriptIndexRoute: TypescriptIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/react/element-props",
        "/react/generic-components",
        "/react/use-ref",
        "/typescript/awaited",
        "/typescript/check-types",
        "/typescript/const-read-only",
        "/typescript/discriminated-unions",
        "/typescript/generics",
        "/typescript/grouped-types",
        "/typescript/partial-and-required",
        "/typescript/pick-and-omit",
        "/typescript/record",
        "/typescript/return-types",
        "/javascript/",
        "/react/",
        "/typescript/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/react/element-props": {
      "filePath": "react/element-props.tsx"
    },
    "/react/generic-components": {
      "filePath": "react/generic-components.tsx"
    },
    "/react/use-ref": {
      "filePath": "react/use-ref.tsx"
    },
    "/typescript/awaited": {
      "filePath": "typescript/awaited.tsx"
    },
    "/typescript/check-types": {
      "filePath": "typescript/check-types.tsx"
    },
    "/typescript/const-read-only": {
      "filePath": "typescript/const-read-only.tsx"
    },
    "/typescript/discriminated-unions": {
      "filePath": "typescript/discriminated-unions.tsx"
    },
    "/typescript/generics": {
      "filePath": "typescript/generics.tsx"
    },
    "/typescript/grouped-types": {
      "filePath": "typescript/grouped-types.tsx"
    },
    "/typescript/partial-and-required": {
      "filePath": "typescript/partial-and-required.tsx"
    },
    "/typescript/pick-and-omit": {
      "filePath": "typescript/pick-and-omit.tsx"
    },
    "/typescript/record": {
      "filePath": "typescript/record.tsx"
    },
    "/typescript/return-types": {
      "filePath": "typescript/return-types.tsx"
    },
    "/javascript/": {
      "filePath": "javascript/index.tsx"
    },
    "/react/": {
      "filePath": "react/index.tsx"
    },
    "/typescript/": {
      "filePath": "typescript/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
