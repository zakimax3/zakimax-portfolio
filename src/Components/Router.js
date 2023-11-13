import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "../Pages/Home";
import About from '../Pages/About';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path:"/about",
      element: <About />
    }
  ])
  

function Test() {
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  )
}

export default Test