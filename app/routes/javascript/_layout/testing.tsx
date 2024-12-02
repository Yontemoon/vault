import { createFileRoute } from '@tanstack/react-router'
import testing from '@/markdown/js/testing.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/javascript/_layout/testing')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={testing} />
}
