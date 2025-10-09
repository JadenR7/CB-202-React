import { useState } from 'react'
import StudentCard from './StudentCard'

function FavoriteTeacher({teacher, subject, status}) {
  const [count, setCount] = useState(0)

  return (
  <div className='favorite-teacher'>
    <p>Favorite Teacher: {teacher} {subject} {status}</p>
  </div>
  )
}

export default FavoriteTeacher


