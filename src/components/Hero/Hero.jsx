import React from 'react';
import HeroImage from '../../assets/img/hero-bg.jpg'
import Modal from '../Modal/Modal';

import './Hero.css';

function openModal(){
    document.querySelector('.overlay').style.display ='block';
    document.querySelector('.viewModal').classList.add('modal--open');
}




const Hero = () =>{

    return(
    <main>
        <Modal/>
    <section>
        <div className="container-Hero"> 
            <img src={HeroImage} className='ImgHero' alt='photo de developpeur web'>
            </img>
            <div className='Text-Hero'>
                <h1>Bonjour, je suis john Doe</h1>
                <h2>Développeur Web Full stack</h2>
                <button className='openModal' onClick={openModal}>En savoir plus</button>
            </div>
        </div>
    </section>
    </main>
    );
}

export default Hero;