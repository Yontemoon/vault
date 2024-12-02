import { createFileRoute } from '@tanstack/react-router'
import MarkdownComp from '@/components/markdown'
import discriminatedUnions from '@/markdown/ts/discriminatedUnions.md'

export const Route = createFileRoute(
  '/typescript/_layout/discriminated-unions',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={discriminatedUnions} />
}
