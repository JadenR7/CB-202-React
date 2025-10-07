import { useState } from 'react'

function FavTeach() {
  const [count, setCount] = useState(0)

  return (
   <div className='favorite-teacher'>
    <h2>Tr. Vinh</h2>
    <p>Subject: Math</p>
    <p>Status: Legendary</p>
   </div>
  )
}

export default FavTeach


