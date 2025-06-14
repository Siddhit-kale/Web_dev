import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  // const [count, setcount] = useState(0);
  // let val = useRef(0);

  // function handlecount() {
  //   val.current = val.current + 1;
  //   console.log("VAL IS: ", val.current);
  //   setcount(count + 1);
  // }

  // useEffect(() => {
  //   console.log("This is rending everythime");
  // })

  const [time, setTime] = useState(0);

  let useref = useRef(null);

  function starttime() {
    useref.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }

  function stoptime() {
    clearInterval(useref.current);
    useref.current = null;
  }

  function resettime() {
    stoptime();
    setTime(0);
  }

  return (

    <div>

      <div>
        <h1>Stopwatch: {time} seconds</h1>
      </div>

      <br></br>

      <div>
        <button onClick={starttime}>
          Start Timer
        </button>
      </div>

      <br />

      <div>
        <button onClick={stoptime}>
          Stop Timer
        </button>
      </div>

      <br />

      <div>
        <button onClick={resettime}>
          Reset Timer
        </button>
      </div>

      <br />

    </div>


    // <div>
    //   <button onClick={handlecount}>
    //     Increment
    //   </button>

    //   <br /> 
    //   <div>
    //     Count: {count}
    //   </div>


    // </div>

  )
}

export default App
