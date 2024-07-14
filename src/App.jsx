import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/services';
import Projects from './components/projects';
import Testimonials from './components/testimonials';
import Contact from './components/contact';

import Footer from './components/footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Hero />
    <Services />
    <Contact/>
    <Projects />
    <Testimonials />
  
   
    <Footer />
  </div>
  )
};

export default App
