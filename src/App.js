import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Futer from './components/Futer';
import Header from './components/Header';
import Slider from './components/Slider';
import Contacts from './pages/Contacts';
import Services from './pages/Services';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Header/>
          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/services' element={<Services/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
          </Routes>
       <Slider/>
       <Futer/>
       </BrowserRouter>
    </div>
  );
}

export default App;
