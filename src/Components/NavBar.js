import React from 'react';
// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link } from "react-router-dom";
import './NavBar.css';



function NavBar(){
    let [ state , setstate ] = React.useReducer((s,d)=>({...s,...d}),{ selectedMenu:null })
    let pathname = window.location.pathname;
    React.useEffect(()=>{
        setstate({ selectedMenu:`/${window.location.pathname.split('/').filter(s=>s.length>0)[0]||''}` }) // / /home
    },[pathname])

    return(
        <div >
                <nav className="navbar navbar-expand-lg bg-body-tertiary NavBarMain">
                    <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <Link to="/" className='NavBarName' >
                                    <p className="navbar-brand" ><img className='Icons' src="Files/ICONS/manager.png" alt="No" />  Zaki Max </p>
                                </Link>

                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 FlexContainer">

                                        <li  className="nav-item " >
                                            <Link  to="/home" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/home')} ><img className='Icons' src="Files/ICONS/home.png" alt="No" /> Home</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/about" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/about')} ><img className='Icons' src="Files/ICONS/resume.png" alt="No" /> About</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/posts" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/posts')} ><img className='Icons' src="Files/ICONS/blogging.png" alt="No" /> Posts</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/projects" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/projects')} ><img className='Icons' src="Files/ICONS/project-plan.png" alt="No" /> Projects</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/services" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/services')} ><img className='Icons' src="Files/ICONS/digital-services.png" alt="No" /> Services</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/events" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/events')} ><img className='Icons' src="Files/ICONS/event.png" alt="No" /> Events</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/mycv" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/mycv')} ><img className='Icons' src="Files/ICONS/cv.png" alt="No" /> My CV</Link>
                                        </li>

                                        <li  className="nav-item " >
                                            <Link  to="/contact" className="nav-link active NavElement" aria-current="page" s={String(state.selectedMenu==='/contact')} ><img className='Icons' src="Files/ICONS/contact.png" alt="No" /> Contact</Link>
                                        </li>



                                        





                                    </ul>

                                </div>
                    </div>
                </nav>

                
        </div>
    );
};

export default NavBar ;

