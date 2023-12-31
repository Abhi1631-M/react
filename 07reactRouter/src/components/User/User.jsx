import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const{userid}=useParams()
  return (
    <div className='bg-gray-500'>
      <h1 >User:{userid}</h1>
    </div>
  )
}

export default User
