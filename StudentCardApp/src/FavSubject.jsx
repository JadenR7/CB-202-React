import { useState } from 'react'

function FavSubject({classSubject, subjectGrade}) {
  const [count, setCount] = useState(0)

  return (
   <div className='favorite-subjectt'>
    <p>Favorite Subject: {classSubject}{subjectGrade}</p>
   </div>
  )
}



export default FavSubject