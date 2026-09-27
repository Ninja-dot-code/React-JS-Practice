import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Chia from './chia.jsx'

createRoot(document.getElementById('container')).render(
 
   <>
    <App />
    <Chia/>
   </>
 
)
