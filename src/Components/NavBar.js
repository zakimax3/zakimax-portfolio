import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Link } from "react-router-dom";
import Home from '../Pages/Home';
import './NavBar.css';



function NavBar(){


    return(
        <div >

                <nav className="navbar navbar-expand-lg bg-body-tertiary NavBarF">
                    <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <Link to="/" >
                                    <p className="navbar-brand">Zaki Max</p>
                                </Link>

                                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                        <li className="nav-item">
                                            <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                                        </li>




                                    </ul>

                                </div>
                    </div>
                </nav>
        </div>
    );
};

export default NavBar ;

