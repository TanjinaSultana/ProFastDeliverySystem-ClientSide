import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="bg-gray-300 min-h-screen">
      <div className="font-urbanist max-w-5xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
)
