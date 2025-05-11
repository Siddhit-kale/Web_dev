import Button from '../components/Button'
import Card from '../components/Card'
import './App.css'
import { useState } from 'react';

function App() {

  const [Count, setCount] = useState(0);
        
    function handleclick() {
      setCount(Count+1);
    }

  return (
    <div>

      <Button handleclick={handleclick} text="Click me">
        <h1>{Count}</h1>
      </Button>
     
     
      {/* <Card name="Siddhit">
        <h1>Best WEB DEV COURSE</h1>
        <p>TRYING TO BE CONSISTENT IN THIS</p>
        <p>SOON BE GOOD IN WEB</p>
      </Card>
      <Card children="Main ek childern hu">
      </Card> */}
      </div>
  )
}

export default App