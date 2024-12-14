
import React from 'react';

//utilisation de HelmetProvider afin de donner une description a toutes les pages react
//utiliser Helmet dans le contenu pour creer un title et une meta description
import {HelmetProvider } from 'react-helmet-async';


//feuille de style
import './styles/main.css';

import {Route, Routes, Navigate} from 'react-router-dom';

//components
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home';
import Service from './pages/Service';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Mention from './pages/Mention';



/* Pages */

function App() {

  return (
    <HelmetProvider>
      <div>
      <header>
        <NavBar/> 
      </header>
        <Routes>
          
            <Route path='/' element={<Navigate to='/home' />}/>
            <Route path='/home' element={<Home />}/>
            <Route path='/service' element={<Service />}/>                 
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/mention' element={<Mention />}/>
        </Routes>
      <footer>
        <Footer/>
      </footer> 
    </div>

    </HelmetProvider>
    
      
  );
}

export default App;
