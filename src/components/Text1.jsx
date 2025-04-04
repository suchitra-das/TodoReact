import React from 'react'
import { useNavigate } from 'react-router-dom'

const Text1 = () => {
    const navigate = useNavigate()
const handleClick =()=>{
   navigate("/text3")
}
  return (
    <div>
      <h2>Text</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Text1


