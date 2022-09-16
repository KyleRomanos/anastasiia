import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Solutions from './components/Solutions';

import Resources from './components/Resources';
import Contact from './components/Contact';

import Footer from './components/Footer';
import {React} from 'react';
import {Helmet} from 'react-helmet';

function App() {

  
  return (
    <div className="App">
      <Helmet>
        <title>Mortgages with Anastasiia</title>
        <meta name="Anastasiia Fedorova" content="Providing solutions for all your mortgage needs in any life situation"/>
        <meta name="description" content="Providing solutions for all your mortgage needs in any life situation" />
          
        <meta property="og:url" content="mortgageswithanastasiia.ca" />
        <meta property="og:name" content="anastasiia fedorova" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="mortgages" />
        <meta property="og:company" content="mortgage ingenuity" />
        <meta property="og:branch" content="mortgage architects" />
        
      </Helmet>
     <Navbar />
     <Home />
     {/* <Solutions /> */}
     <Resources />
    <Contact />
    

     <Footer />
    </div>
  );
}


export default App;
