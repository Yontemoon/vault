import { createFileRoute } from '@tanstack/react-router'
import record from '@/markdown/ts/record.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/typescript/_layout/record')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={record} />
}
