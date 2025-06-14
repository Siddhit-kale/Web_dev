import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, reset } from './features/counter/counterSlice';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispactch = useDispatch();

  function handlclickInc() {
    dispactch(increment());
  }

  function handlclickDec() {
    dispactch(decrement());
  }

  function handlerest() {
    dispactch(reset());
  }

  return (
    
    <div>
      <button onClick={handlclickInc}> + </button>
      <p>Count: {count}</p>
      <button onClick={handlclickDec}> - </button>
      <br />
      <br />
      <button onClick={handlerest}> Reset </button>
    </div>
     
  )
}

export default App
