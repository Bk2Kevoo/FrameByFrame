import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import projectRouter from './components/routes';

const rootElemnt = document.getElementById("root");
const root = createRoot(rootElemnt);

root.render(
  <RouterProvider router={projectRouter}/>
)
