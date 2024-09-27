// src/App.jsx
import React from 'react';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar';
import Midpart from './components/Midpart.jsx'; 
import Footer from './components/Footer';
import './App.css';
function App() {
  return (
    <div>
    
     <Navbar />
     <Home/>
     <Midpart/>
     <Footer/>
     
      
    </div>
  );
}

export default App;
