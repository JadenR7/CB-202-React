import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StudentCard from './StudentCard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StudentCard/>
  </StrictMode>,
)
