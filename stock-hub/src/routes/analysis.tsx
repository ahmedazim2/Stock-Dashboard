import { createFileRoute } from '@tanstack/react-router'
import HeaderText from '../components/analysis/HeaderText'

export const Route = createFileRoute('/analysis')({
    component: RouteComponent,
})

function RouteComponent() {
    return <div><HeaderText /></div>
}
