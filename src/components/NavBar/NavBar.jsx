import React from 'react';


import {NavLink} from 'react-router-dom';

import './NavBar.css';

 //fermeture du burger apres click

 const closeNavbar = () => {
    let navbarCollapse = document.querySelector('.collapse');
    if (navbarCollapse) { 
        navbarCollapse.classList.remove('show');
    }
};


function NavBar (){

    
    return(
    <div>
        

        <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="https://github.com/github-john-doe" rel='nofollow'>JOHN DOE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/Home" onClick={closeNavbar}>home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/Service" onClick={closeNavbar}>service</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/Portfolio" onClick={closeNavbar}>portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link"  to="/Contact" onClick={closeNavbar}>contact</NavLink>
                        </li>
                        <li className="nav-item">
                        <   NavLink className="nav-link"  to="/Mention" onClick={closeNavbar}>mention légales</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}
export default NavBar;

