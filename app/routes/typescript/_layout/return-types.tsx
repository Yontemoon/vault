import { createFileRoute } from '@tanstack/react-router'
import returnTypes from '@/markdown/ts/returnTypes.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/typescript/_layout/return-types')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={returnTypes} />
}
