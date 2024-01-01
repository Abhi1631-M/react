import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>Hello Abhishek</h1>
     <h2>Happy New Year</h2>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
