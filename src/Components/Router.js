import React from 'react'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from '../Pages/Home';



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
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