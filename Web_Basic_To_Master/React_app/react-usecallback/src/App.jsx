import { useCallback, useState } from 'react'
import './App.css'
import Childcomponents from './components/Childcomponents';

function App() {

  const [count, setcount] = useState(0);

  // function handleclick() {
  //   setcount(count + 1);
  // }

  const handleclick = useCallback(() => {
    setcount(count + 1);
  }, [count]);

  return (
    <div>

      <button onClick={handleclick}>
        Increment
      </button>

      <br />

      <h1>Count: {count}</h1>

      <br>
      </br>

      <div>
      <Childcomponents buttonname="Child2" />
      </div>


    </div>
  )
}

export default App
