import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AddCountry } from './components/AddCountry';
import { AddCity } from './components/AddCity';
import { Home } from './components/Home';
import { UpdateCity } from './components/UpdateCity';
import { Navbar } from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-country" element={<AddCountry />} />
        <Route path="/add-city" element={<AddCity />} />
        <Route path="/update-city/:id" element={<UpdateCity />} />
      </Routes>
    </div>
  );
}

export default App;
