import React from 'react';
import HeroImage from '../assets/img/hero-bg.jpg'

const Hero = () =>{
    return(

        <section className="container-Hero"> 
            <img src={HeroImage} className='ImgHero' alt='photo de developpeur web'>
            </img>
            <div className='Text-Hero'>
                <h1>Bonjour,je suis john Does</h1>
                <h2>Developpeur Web Full stack</h2>
                <a href='#'>En savoir plus</a>
            </div>
                
            
        </section>
    );
}

export default Hero;