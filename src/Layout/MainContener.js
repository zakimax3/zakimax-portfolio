import React from 'react'
import NavBar from '../Components/NavBar';

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