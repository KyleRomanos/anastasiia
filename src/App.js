import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Solutions from './components/Solutions';
import Faq from './components/Faq';
import Resources from './components/Resources';
import Contact from './components/Contact';
import Calculators from './components/Calculators';
import Links from './components/Links';
import Footer from './components/Footer';
import {React} from 'react';

function App() {


  
  return (
    <div className="App">
     <Navbar />
     <Home />
     <Solutions />
     <Resources />
    <Contact />
     
     <Calculators /> 
     <Faq />
     <Links />
     <Footer />
    </div>
  );
}


export default App;
