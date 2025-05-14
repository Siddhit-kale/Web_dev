import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Looutbutton from '../components/Looutbutton';
import Loginbutton from '../components/loginbutton';

function App() {
  const[islLoggedin, setloggedIn] = useState(true);

  if(!islLoggedin) {
    return (
      <Loginbutton />
    )
  }

  return (
    <div>
      <h1> Welcome everyone here for web developemnt course</h1>
      <div>
        {islLoggedin && <Looutbutton />}
      </div>
    </div>
  )

  // return (
  //   <div>
  //     {islLoggedin ? <Looutbutton/> : <Loginbutton /> }
  //   </div>
  // )

  // if(islLoggedin) {
  //   return (
  //     <Looutbutton />
  //   )
  // }
  // else{
  //   return (
  //     <Loginbutton />
  //   )
  // }
}

export default App
