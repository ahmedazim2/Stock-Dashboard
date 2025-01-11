import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/_global.scss"
// import App from './App.tsx'
import { routeTree } from './routeTree.gen'
// import ButtonAppBar from './components/menubar'
// import Sidebar from './components/sidebar'
// import Sidebar from './components/sidebar'

import { createRouter, RouterProvider } from '@tanstack/react-router'


const router = createRouter({ routeTree });



declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ButtonAppBar />
    <Sidebar /> */}


    <RouterProvider router={router} />
  </StrictMode>,
)
