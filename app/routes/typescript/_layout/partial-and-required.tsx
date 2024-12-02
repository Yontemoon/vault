import { createFileRoute } from '@tanstack/react-router'
import partialAndRequired from '@/markdown/ts/partialAndRequired.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute(
  '/typescript/_layout/partial-and-required',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={partialAndRequired} />
}
