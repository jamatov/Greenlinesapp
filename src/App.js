import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Head/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors';
import Treatment from './pages/Treatment';
import Technologies from './pages/Technologies';
import Patientguide from './pages/PatientGuide'
import News from './pages/News'
import Contact from './pages/Contact'
import Sitehead from './components/Head/Sitehead';
import Footer from './components/Footer/Footer.jsx'
import ScrollToTop from './components/ScrollToTop';
import { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';

function App() {

  const [navbar, setNavbar] = useState(false);
  function setNav() {
    if (window.scrollY >= 850) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  };

  window.addEventListener("scroll", setNav)

  const top = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className="App">
      <Sitehead/>
      <Navigation/>
      <ScrollToTop/>

      <div className='scrolltotop'>
        <FaAngleUp/>
      </div>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/doctors' element={<Doctors/>}></Route>
        <Route path='/treatment' element={<Treatment/>}></Route>
        <Route path='/technologies' element={<Technologies/>}></Route>
        <Route path='/patientguide' element={<Patientguide/>}></Route>
        <Route path='/news' element={<News/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
