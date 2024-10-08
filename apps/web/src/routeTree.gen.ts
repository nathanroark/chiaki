/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const TracksIndexLazyImport = createFileRoute('/tracks/')()
const SkadiIndexLazyImport = createFileRoute('/skadi/')()
const RiskInformationSheetIndexLazyImport = createFileRoute(
  '/risk-information-sheet/',
)()
const MissionBuilderIndexLazyImport = createFileRoute('/mission-builder/')()
const EmittersIndexLazyImport = createFileRoute('/emitters/')()
const AgentsIndexLazyImport = createFileRoute('/agents/')()
const AboutIndexLazyImport = createFileRoute('/about/')()

// Create/Update Routes

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TracksIndexLazyRoute = TracksIndexLazyImport.update({
  path: '/tracks/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/tracks/index.lazy').then((d) => d.Route))

const SkadiIndexLazyRoute = SkadiIndexLazyImport.update({
  path: '/skadi/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/skadi/index.lazy').then((d) => d.Route))

const RiskInformationSheetIndexLazyRoute =
  RiskInformationSheetIndexLazyImport.update({
    path: '/risk-information-sheet/',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/risk-information-sheet/index.lazy').then((d) => d.Route),
  )

const MissionBuilderIndexLazyRoute = MissionBuilderIndexLazyImport.update({
  path: '/mission-builder/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/mission-builder/index.lazy').then((d) => d.Route),
)

const EmittersIndexLazyRoute = EmittersIndexLazyImport.update({
  path: '/emitters/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/emitters/index.lazy').then((d) => d.Route),
)

const AgentsIndexLazyRoute = AgentsIndexLazyImport.update({
  path: '/agents/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/agents/index.lazy').then((d) => d.Route))

const AboutIndexLazyRoute = AboutIndexLazyImport.update({
  path: '/about/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about/': {
      id: '/about/'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/agents/': {
      id: '/agents/'
      path: '/agents'
      fullPath: '/agents'
      preLoaderRoute: typeof AgentsIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/emitters/': {
      id: '/emitters/'
      path: '/emitters'
      fullPath: '/emitters'
      preLoaderRoute: typeof EmittersIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/mission-builder/': {
      id: '/mission-builder/'
      path: '/mission-builder'
      fullPath: '/mission-builder'
      preLoaderRoute: typeof MissionBuilderIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/risk-information-sheet/': {
      id: '/risk-information-sheet/'
      path: '/risk-information-sheet'
      fullPath: '/risk-information-sheet'
      preLoaderRoute: typeof RiskInformationSheetIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/skadi/': {
      id: '/skadi/'
      path: '/skadi'
      fullPath: '/skadi'
      preLoaderRoute: typeof SkadiIndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/tracks/': {
      id: '/tracks/'
      path: '/tracks'
      fullPath: '/tracks'
      preLoaderRoute: typeof TracksIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutIndexLazyRoute
  '/agents': typeof AgentsIndexLazyRoute
  '/emitters': typeof EmittersIndexLazyRoute
  '/mission-builder': typeof MissionBuilderIndexLazyRoute
  '/risk-information-sheet': typeof RiskInformationSheetIndexLazyRoute
  '/skadi': typeof SkadiIndexLazyRoute
  '/tracks': typeof TracksIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutIndexLazyRoute
  '/agents': typeof AgentsIndexLazyRoute
  '/emitters': typeof EmittersIndexLazyRoute
  '/mission-builder': typeof MissionBuilderIndexLazyRoute
  '/risk-information-sheet': typeof RiskInformationSheetIndexLazyRoute
  '/skadi': typeof SkadiIndexLazyRoute
  '/tracks': typeof TracksIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about/': typeof AboutIndexLazyRoute
  '/agents/': typeof AgentsIndexLazyRoute
  '/emitters/': typeof EmittersIndexLazyRoute
  '/mission-builder/': typeof MissionBuilderIndexLazyRoute
  '/risk-information-sheet/': typeof RiskInformationSheetIndexLazyRoute
  '/skadi/': typeof SkadiIndexLazyRoute
  '/tracks/': typeof TracksIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/agents'
    | '/emitters'
    | '/mission-builder'
    | '/risk-information-sheet'
    | '/skadi'
    | '/tracks'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/agents'
    | '/emitters'
    | '/mission-builder'
    | '/risk-information-sheet'
    | '/skadi'
    | '/tracks'
  id:
    | '__root__'
    | '/'
    | '/about/'
    | '/agents/'
    | '/emitters/'
    | '/mission-builder/'
    | '/risk-information-sheet/'
    | '/skadi/'
    | '/tracks/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutIndexLazyRoute: typeof AboutIndexLazyRoute
  AgentsIndexLazyRoute: typeof AgentsIndexLazyRoute
  EmittersIndexLazyRoute: typeof EmittersIndexLazyRoute
  MissionBuilderIndexLazyRoute: typeof MissionBuilderIndexLazyRoute
  RiskInformationSheetIndexLazyRoute: typeof RiskInformationSheetIndexLazyRoute
  SkadiIndexLazyRoute: typeof SkadiIndexLazyRoute
  TracksIndexLazyRoute: typeof TracksIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutIndexLazyRoute: AboutIndexLazyRoute,
  AgentsIndexLazyRoute: AgentsIndexLazyRoute,
  EmittersIndexLazyRoute: EmittersIndexLazyRoute,
  MissionBuilderIndexLazyRoute: MissionBuilderIndexLazyRoute,
  RiskInformationSheetIndexLazyRoute: RiskInformationSheetIndexLazyRoute,
  SkadiIndexLazyRoute: SkadiIndexLazyRoute,
  TracksIndexLazyRoute: TracksIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about/",
        "/agents/",
        "/emitters/",
        "/mission-builder/",
        "/risk-information-sheet/",
        "/skadi/",
        "/tracks/"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about/": {
      "filePath": "about/index.lazy.tsx"
    },
    "/agents/": {
      "filePath": "agents/index.lazy.tsx"
    },
    "/emitters/": {
      "filePath": "emitters/index.lazy.tsx"
    },
    "/mission-builder/": {
      "filePath": "mission-builder/index.lazy.tsx"
    },
    "/risk-information-sheet/": {
      "filePath": "risk-information-sheet/index.lazy.tsx"
    },
    "/skadi/": {
      "filePath": "skadi/index.lazy.tsx"
    },
    "/tracks/": {
      "filePath": "tracks/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
