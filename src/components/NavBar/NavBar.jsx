import React from 'react';
import './NavBar.css';
import {Route,NavLink, Routes, Navigate} from 'react-router-dom';

import Home from '../../pages/Home';
import Contact from '../../pages/Contact';
import Mention from '../../pages/Mention';
import Portfolio from '../../pages/Portfolio';
import Service from '../../pages/Service';


function NavBar(){

    
 //fermeture du burger apres click
    const closeNavbar = () =>{
    document.querySelector('.navbar-collapse').classList.remove('show');
  
  };
    return(
    <div>
        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="#">JOHN DOE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link" aria-current="page" to="/Home" onClick={closeNavbar}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/Contact" onClick={closeNavbar}>Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/Portfolio" onClick={closeNavbar}>Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/Service" onClick={closeNavbar}>Service</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link"  to="/Mention" onClick={closeNavbar}>Mention légales</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

            <Routes>
                <Route path='/Home' element={<Home/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>
                <Route path='/Mention' element={<Mention/>}></Route>
                <Route path='/Portfolio' element={<Portfolio/>}></Route>
                <Route path='/Service' element={<Service/>}></Route>
                <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
            </Routes>
        
    </div>
    );
}
export default NavBar;