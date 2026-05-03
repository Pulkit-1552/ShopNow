import React from 'react';
import { RouterProvider } from "react-router-dom";
import { routes } from './routes/browserRoutes.js'

export default function App() {
  return (
      <RouterProvider router={routes}/>
  )
}
