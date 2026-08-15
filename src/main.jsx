import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './about-portraits.css'
import './results.css'
import './premium-polish.css'
createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
