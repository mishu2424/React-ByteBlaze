import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/route.jsx';
// import 'react-tooltip/dist/react-tooltip.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster></Toaster>
  </StrictMode>,
)
