import { createFileRoute, pick } from '@tanstack/react-router'
import pickAndOmit from '@/markdown/ts/pickAndOmit.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/typescript/_layout/pick-and-omit')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={pickAndOmit} />
}
