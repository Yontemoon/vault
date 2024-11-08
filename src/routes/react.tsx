import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/react')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /react!'
}
