import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,

} from "react-router-dom";

import {Token} from "./Components/Token.jsx";
import Preview from "./Components/Preview.jsx"


const router = createBrowserRouter([
    {path:"/",
element: <App/>},{
    path:"/token",
    element:<Token/>
},
{path:'/preview',
element:<Preview/>}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
        
    </RouterProvider>
    
  </React.StrictMode>,
)
