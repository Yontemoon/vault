import { createFileRoute } from '@tanstack/react-router'
import generics from '@/markdown/ts/generics.md'
import MarkdownComp from '@/components/markdown'

export const Route = createFileRoute('/typescript/_layout/generics')({
  component: RouteComponent,
})

function RouteComponent() {
  return <MarkdownComp content={generics} />
}
