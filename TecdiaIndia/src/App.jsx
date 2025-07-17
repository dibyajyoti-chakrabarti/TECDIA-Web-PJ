// src/App.jsx
import React from 'react'

function App() {
  return (
    <>
      <div id="google_translate_element" style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 9999 }}></div>
      <div className="home-container">
        <h1>🌐 Multilingual Themed Website</h1>
        <p>Switch languages using the top-right Google Translate widget.</p>
        <p>The background and theme colors will change dynamically based on your selected language.</p>
      </div>
    </>
  )
}

export default App
