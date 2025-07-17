// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Add Google Translate script
const addGoogleTranslateScript = () => {
  const script = document.createElement('script')
  script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'
  script.async = true
  document.body.appendChild(script)
}

window.googleTranslateElementInit = () => {
  new window.google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ja,zh-CN',
    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element')
}

// Observe language changes
const observer = new MutationObserver(() => {
  const lang = document.documentElement.lang || 'en'
  document.body.setAttribute('data-theme', lang)
})

observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] })

addGoogleTranslateScript()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
