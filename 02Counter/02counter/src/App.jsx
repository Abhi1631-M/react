import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleCount=()=>{
    if(count<20)
    {
     setCount(count+1)
    }
  }
  const handledecrease=()=>{
    if(count>0)
    {
    setCount(count-1)
    }
 }

  return (
    <>
     <h1>Abhishek React</h1>
     <h2>Counter Value: 5</h2>
     <p>counting={count}</p>
     <button onClick={handleCount}>Increase me</button>
     <button onClick={handledecrease}>Decrease me</button>
    </>
  )
}

export default App
