import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import './index.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/internet-shop'>
      <Routes>
        <Route path="/internet-shop" element={<App/>} />
        <Route path="/internet-shop/basket" element={<App2/>} />
      </Routes>
   </BrowserRouter>

   </React.StrictMode>
  
)
