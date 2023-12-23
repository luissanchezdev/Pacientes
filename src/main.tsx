import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "react-toggle/style.css"
import PacientesProvider from './hooks/PacientesProvider.js'

ReactDOM.createRoot(document.getElementById('root') as Element).render(
  <React.StrictMode>
    <PacientesProvider>
      <App />
    </PacientesProvider>
  </React.StrictMode>,
)
