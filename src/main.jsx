import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";
import {Token}from "./Components/Token.jsx";
const router = createBrowserRouter([
    {path:"/",
element: <App/>},{
    path:"generate-invoices.vercel.app/token",
    element:<Token/>
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        
    </RouterProvider>
    
  </React.StrictMode>,
)
