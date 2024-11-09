import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/typescript/pick-and-omit')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /typescript/pick-and-omit!'
}
