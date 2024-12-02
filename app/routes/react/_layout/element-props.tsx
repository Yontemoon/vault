import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import elementProps from '@/markdown/react/element-props.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/react/_layout/element-props')({
  meta: () => [
    {
      title: "Monte's Vault - Element Props",
    },
  ],
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <MarkdownComp content={elementProps} />
    </>
  )
}
