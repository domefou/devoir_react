import React from 'react';
import '../styles/NavBar.css';
import {Route,NavLink, Routes} from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Mention from '../pages/Mention';
import Portfolio from '../pages/Portfolio';
import Service from '../pages/Service';



function NavBar(){
    return(
    <header>
        
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">JOHN DOE</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <NavLink className="nav-link text-white" aria-current="page" to="/Home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-white"  to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-white"  to="/Portfolio">Portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-white"  to="/Service" >Service</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link text-white"  to="/Mention" >Mention</NavLink>
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
        </Routes>
    </header>
    );
}

export default NavBar;