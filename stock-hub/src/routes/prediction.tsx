import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/prediction')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/prediction"!</div>
}
