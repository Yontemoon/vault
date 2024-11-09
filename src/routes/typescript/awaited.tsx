import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/typescript/awaited')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /typescript/awaited!'
}
