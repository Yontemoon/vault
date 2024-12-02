import { createFileRoute } from '@tanstack/react-router'
import groupedTypes from '@/markdown/ts/groupedTypes.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/typescript/_layout/grouped-types')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={groupedTypes} />
}
