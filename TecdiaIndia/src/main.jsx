import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form.jsx'
import Product from './components/Product.jsx'
import TrackApp from './components/TrackApp.jsx'
import Contact from './components/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />} />
        <Route path="/form" element={<Form />} />
        <Route path="/product" element={<Product />} />
        <Route path="/track" element={<TrackApp />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
