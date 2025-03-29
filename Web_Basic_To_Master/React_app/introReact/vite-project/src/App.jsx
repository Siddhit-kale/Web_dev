import { useState } from 'react'
import './App.css'
import UserCard from './components/Usercard'  // Corrected import

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard id='title' name='love rana'/>  
      <UserCard id='img' name='Maharana Pratap'/>
      <UserCard id='desc' name="Pritihviraj chauhan"/>
    </div>
  )
}

export default App
