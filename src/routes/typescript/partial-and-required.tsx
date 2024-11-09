import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/typescript/partial-and-required')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /typescript/partial-and-required!'
}
