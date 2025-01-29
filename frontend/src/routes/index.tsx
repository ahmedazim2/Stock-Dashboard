import { createFileRoute } from '@tanstack/react-router'
// import { Link } from '@tanstack/react-router'

import HomePage from './home'

export const Route = createFileRoute('/')({
    component: HomePage,
})

// function GridSystem() {
//     return (
//         <Grid2 container spacing={2} sx={{

//             margin: '30px 20px 10px 20px'
//         }}>
//             <Grid2 size={12}><HeaderTag /></Grid2>
//             <Grid2 size={7}>Hello</Grid2>
//             <Grid2 size={5}>Hello</Grid2>
//         </Grid2>)
// }

// function RouteComponent() {

//     return <GridSystem />
// }
