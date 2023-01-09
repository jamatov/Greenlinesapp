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

function App() {
  return (
    <div className="App">
      <Sitehead/>
      <Navigation/>
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
