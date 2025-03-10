import React from 'react';

import {Helmet } from 'react-helmet-async';

/* Assets */
import JohnDoesAbout from '../assets/img/john-doe-about.jpg';
/* Components */

import Hero from '../components/Hero/Hero';

/* Styles */
import '../styles/pagesCSS/Home.css';





const Home = () =>{
    return(
        <main>
            
            <Helmet> 
                <title>Accueil - John Doe</title> 
                <meta name="description" content="Bienvenue sur la page d'accueil de mon site web.Apprenez en plus sur moi,grace a ma déscription."/>
            </Helmet>
                {/* composant HERO pas indispensable mais plus paratique pour la lisibilité*/}
            <Hero/>
            
            <div className='Accueil'>
                <article className='About'>
                    <h3>A propos</h3>
                    <img src={JohnDoesAbout} className='JohnDoesAbout' alt="photo de profil john does"></img>
                    <div className='About-text'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Voluptas ducimus qui corrupti nam, voluptatem tenetur 
                            obcaecati maxime repellat autem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Voluptas ducimus qui corrupti nam, voluptatem tenetur 
                            obcaecati maxime repellat autem.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Voluptas ducimus qui corrupti nam, voluptatem tenetur 
                            obcaecati maxime repellat autem.
                        </p>
                    </div>
                    
                    
                </article>
                <article className='Competences'>
                    <h3>Mes compétences</h3>
                    <div>
                        <p className='progress-text m-0'>HTML5 90%</p>
                        <div className="progress">                    
                            <div className="progress-bar-HTML bg-danger" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <p className='progress-text m-0'>CSS 80%</p>
                        <div className="progress">                          
                            <div className="progress-bar-CSS bg-info" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <p className='progress-text m-0'>JAVASCRIPT 70%</p>
                        <div className="progress">
                            <div className="progress-bar-JS bg-warning" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <p className='progress-text m-0'>REACT 60%</p>
                        <div className="progress">
                            <div className="progress-bar-REACT bg-success" role="progressbar" aria-label="Success"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div>
                        <p className='progress-text m-0'>PHP 50%</p>
                        <div className="progress">
                            <div className="progress-bar-PHP bg-primary" role="progressbar" aria-label="Success"  aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    


                </article>
            </div>
        </main>
    );
}

export default Home;