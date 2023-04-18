import './App.css';
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NewsDetails from './components/NewsDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/:id' element={<NewsDetails/>} />
      </Routes>
    </div>
  );
}

export default App;
