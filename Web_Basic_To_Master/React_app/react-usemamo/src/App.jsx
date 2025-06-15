import { useState } from 'react'
import './App.css'
import { useMemo } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const [input, setinput] = useState();

  function clickhandle() {
    setcount(count + 1);
  }

  function expensiveTask(num) {
    console.log("Inside Expensive Task");
    for(let i=0; i<100000; i++){

    }
    return num*2;
  }

  let doublevalue = useMemo(() => expensiveTask(input), [input]);

  return (
    <div> 
      <button onClick={clickhandle}>
        Increment
      </button>

      <div>
        <p>Count: {count}</p>
      </div>

      <div>
        <input 
          type='number'
          value={input}
          placeholder='Enter the number'
          onChange={(e) => setinput(e.target.value)}
        />
      </div>

      <div>
        <p>Double: {doublevalue}</p>
      </div>
    </div>
  )
}

export default App
