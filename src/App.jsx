import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/views/Home';
import './App.css'
import Header from '@assets/Sections/Headers/Header'
import Footer from '@assets/Sections/Footers/Footer'


function App() {
  return (
    <React.StrictMode>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
        
    </React.StrictMode>
    
    
  )
}

export default App
