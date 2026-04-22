import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './routes/Router';
import { RouterProvider } from "react-router/dom";
import TimelineContext from './context/TimelineContext';
import TimelineProvider from './context/TimelineContext';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
   
  </StrictMode>,
);
