import React from 'react';
import '../styles/header.css';
import { Routes, Route, Link } from 'react-router-dom';

import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Mention from '../pages/Mention';
import Portfolio from '../pages/Portfolio';
import Service from '../pages/Service';



function NavBar(){
    return(
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarNav" 
                        aria-controls="navbarNav" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/Home ">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/Service" >Service</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/mention" >Mention</Link>
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
    </div>
    );
}

export default NavBar;