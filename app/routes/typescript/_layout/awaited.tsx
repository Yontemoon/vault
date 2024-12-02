import { createFileRoute } from '@tanstack/react-router'
import MarkdownComp from '@/components/markdown'
import awaited from '@/markdown/ts/awaited.md'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Link } from '@tanstack/react-router'
import BreadcrumbComponent from '@/components/breadcrumb'

// TODO - Come back to this... in production causes errors.
// import { transformerTwoslash, rendererClassic } from "@shikijs/twoslash";

export const Route = createFileRoute('/typescript/_layout/awaited')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      {/* <BreadcrumbComponent /> */}

      <MarkdownComp content={awaited as string} />
    </>
  )
}
