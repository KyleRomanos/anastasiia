import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Solutions from './components/Solutions';

import Resources from './components/Resources';
import Contact from './components/Contact';

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
    

     <Footer />
    </div>
  );
}


export default App;
