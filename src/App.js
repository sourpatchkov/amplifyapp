
import Home from './home.js';
import Contact from './contact.js';
import Card from './cards.js';
import Navbar from './nav.js';

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <BrowserRouter>
         <Navbar />
         <Routes>
           <Route path="/" element={<Home />}></Route>
           <Route path="/card" element={<Card />}></Route>
           <Route path="/contact" element={<Contact />}></Route>
         </Routes>
    </BrowserRouter>
  </div>
 
  );
}

export default App;

