import React from 'react'
import NavBar from '../Components/NavBar';
import { RouterProvider } from 'react-router-dom';

function MainContener(props) {
  return (
    <div >

        <div>
            {props.children}
        </div>
        <NavBar />

    </div>
  )
}

export default MainContener