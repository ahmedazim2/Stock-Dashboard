


import './App.css'
import { routeTree } from './routeTree.gen'

import { createRouter, RouterProvider } from '@tanstack/react-router'

import StockProvider from './components/StockProvider';
// import { useState } from 'react';


const router = createRouter({ routeTree });



declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {


  // const [stockSymbol, setStockSymbol] = useState("FB");

  return (

    <StockProvider >
      <RouterProvider router={router} />
    </StockProvider>

  );

}

export default App
