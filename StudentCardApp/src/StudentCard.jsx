import { useState } from 'react'
import './App.css'
import FavoriteTeacher from './FavoriteTeacher.jsx'
import FavSubject from './FavSubject.jsx'

function StudentCard() {
  const [grade, setGrade] = useState(1000)

  const increaseGrade = () => {
    setGrade(grade => grade + 1000)
  }

  return (
  <>
    <div className='student-card'>
      <h1>Jaden Richardson</h1>
      <h3>Grade: {grade} You think im getting into Harvard?</h3>

      <button onClick={increaseGrade}>Increase Grade</button>
      <FavSubject classSubject="English" subjectGrade="Grade: 100"/>
      <FavoriteTeacher teacher="Tr.Vinh" subject="Subject: Math" status="Status: Legendary"/>
    </div>
   </>
  )
}

export default StudentCard
