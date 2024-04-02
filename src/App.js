
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About"
import Menu from "./Pages/Menu"
import Contact from "./Pages/Contact"

import {BrowserRouter,Route, Routes,} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
