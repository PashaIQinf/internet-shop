import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import './index.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/internet-shop'>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/basket" element={<App2/>} />
        <Route path="/item" element={<App3/>} />
      </Routes>
   </BrowserRouter>

   </React.StrictMode>
  
)
