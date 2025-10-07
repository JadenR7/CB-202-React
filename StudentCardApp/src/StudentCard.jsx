import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './FavoriteTeacher.jsx'
import FavTeach from './FavoriteTeacher.jsx'

function StudentCard() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className='student-card'>
      <h2>Jaden Richadson</h2>
      <p>Grade: 12</p>
    </div>

    <div>
      <FavTeach/>
    </div>
   </>
  )
}

export default StudentCard
