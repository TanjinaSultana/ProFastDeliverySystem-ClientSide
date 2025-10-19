import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './Router/Routes';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import AuthProvider from './Context/AuthContext/AuthProvider';
// ..
AOS.init();
createRoot(document.getElementById('root')).render(
  <AuthProvider>

  <StrictMode>
     <div className="min-h-screen">
      <div className="font-urbanist max-w-5xl mx-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </StrictMode>,
  </AuthProvider>
)
