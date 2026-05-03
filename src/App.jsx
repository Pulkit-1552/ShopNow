import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routes } from './routes/browserRoutes.jsx'
import { CartProvider } from './context/CartContext.jsx';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={routes}/>
    </CartProvider>
  )
}
