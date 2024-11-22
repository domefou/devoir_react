//pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Services from './pages/Service';
import Mention from './pages/Mention';


//feuille de style
import './App.css';

//components
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Bonjour REACT !!</h1>
      <p>de nouveau ici ?</p>
    </div>
  );
}

export default App;
