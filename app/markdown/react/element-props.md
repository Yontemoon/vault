# Hello from react world.

```tsx
import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/react/element-props")({
  component: RouteComponent,
});

function RouteComponent() {
  return "Hello /react/element-props!";
}
```
