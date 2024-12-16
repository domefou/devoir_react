import React from 'react';

import {Link} from 'react-router-dom';

/* Styles */
import './Footer.css';

/* Pages */


function Footer (){
        return(
            <div className="footer-contain"> 
                <div className="footer-row"> 
                    <div className="footer-column col-12 col-md-4">
                        
                        <h4 className='footer_title'>John Doe</h4>
                        <ul>
                            <li><a href="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel='nofollow'>40 rue Laure Diebold </a></li>
                            <li><a href="https://www.google.fr/maps/place/40+Rue+Laure+Diebold,+69009+Lyon/@45.7786657,4.796404,17z/data=!3m1!4b1!4m6!3m5!1s0x47f4eb65edac5b3f:0xe01c47049cb2e2b9!8m2!3d45.778662!4d4.7989789!16s%2Fg%2F11c24790th?entry=ttu&g_ep=EgoyMDI0MTIwMi4wIKXMDSoASAFQAw%3D%3D" target='_blank' rel='nofollow'>69009 Lyon, France</a></li>
                            <li><a href='tel:1020304050' target='_blank' rel='nofollow' >10 20 30 40 50</a></li>
                            <li><a href="mailto:john.doe@gmail.com" target='_blank' >john.doe@gmail.com</a></li>
                        </ul>
                            
                        <div className='footer_social-network'>
                            <a className='social-github' href='https://github.com/github-john-doe' rel='nofollow'>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25"  className="bi bi-github" viewBox="0 0 16 16">
                                    <path className='icon_social' d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                            </a>
                            <a className='social-X' href='https://x.com/' rel='nofollow'>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25"  className="bi bi-twitter-x" viewBox="0 0 16 16">
                                    <path className='icon_social' d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                                </svg>
                            </a>
                            <a className='social-linkedin' href='https://www.linkedin.com/home' rel='nofollow'>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="25" height="25"  className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path className='icon_social' d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                            </a>
                        </div>
                    </div> 

                    <div className="footer-column col-12 col-md-4">
                        <h4 className='footer_title'>Lien utiles</h4>
                        <ul>
                            <li><Link className="footer_nav-link" aria-current="page" to="/Home">Accueil</Link></li>
                            <li><Link className="footer_nav-link"  to="/Service">Service</Link></li>
                            <li><Link className="footer_nav-link"  to="/Portfolio">Portfolio</Link></li>
                            <li><Link className="footer_nav-link"  to="/Contact" >Contact</Link></li>                
                            <li><Link className="footer_nav-link"  to="/Mention">Mention légales</Link></li>
                        </ul>
                    </div> 


                    <div className="footer-column col-12 col-md-4">
                        <h4 className='footer_title'>Mes dernieres réalisation</h4>
                        <ul>
                            <li><Link className='footer_portfolio'to="/Portfolio">Fresh Food</Link></li>
                            <li><Link className='footer_portfolio'to="/Portfolio">Restaurant Akira</Link></li>
                            <li><Link className='footer_portfolio'to="/Portfolio">Espace bien-être</Link></li>
                            <li><Link className='footer_portfolio'to="/Portfolio">SEO</Link></li>
                            <li><Link className='footer_portfolio'to="/Portfolio">Création d'une API</Link></li>
                            <li><Link className='footer_portfolio'to="/Portfolio">Maquette d'un site</Link></li>
                        </ul>
                    </div> 
                </div>
            </div>
                
        );
}

export default Footer;