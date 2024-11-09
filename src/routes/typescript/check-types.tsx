import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/typescript/check-types')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /typescript/check-types!'
}
