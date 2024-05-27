import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import App3 from './App3.jsx'
import App4 from './App4.jsx'
import App5 from './App5.jsx'
import App6 from './App6.jsx'
import App7 from './App7.jsx'
import './index.css'
import { BrowserRouter,Routes, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import { store } from './index.js'
import './firebase';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='/internet-shop'>
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/site/basket" element={<App2/>} />
        <Route path="/item/:itemid" element={<App3/>} />        
        <Route path="/site/order" element={<App4/>} />
        <Route path="/site/register" element={<App5/>} />
        <Route path="/site/login" element={<App6/>} />
        <Route path="/site/account" element={<App7/>} />
      </Routes>
      </Provider>
   </BrowserRouter>

   </React.StrictMode>
  
)
