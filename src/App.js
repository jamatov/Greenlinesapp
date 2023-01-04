import './App.scss';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
