import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const [count, setCount] = useState(0);
  return (
    <div className='counter-contaienr'>
        <p id='para'>
            You have Clicked {count} times
        </p>
        <button id='button' onClick={() => {
            setCount(count + 1)
            }
        }>Click Me</button>
        
        <button id='button' onClick={() => {
            setCount(count - 1);
            }
        }>Minuns</button>

        <button id='button' onClick={() => {
            setCount(0)
            }
        }>Reset</button>

        <button id='button' onClick={() => {
            for(let i=0; i<=5; i++){
                setCount(count + i);
            }
            }
        }>+5</button>

        <button id='button' onClick={() => {
            for(let i=0; i<=5; i++){
                setCount(count - i);
            }
            }
        }>-5</button>

    </div>
  )
}

export default Counter