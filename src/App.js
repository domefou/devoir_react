
import React from 'react';
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
      
  );
}

export default App;
