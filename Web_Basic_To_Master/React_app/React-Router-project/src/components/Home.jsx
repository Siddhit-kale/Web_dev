import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();

    function handleclick(){
        navigate('/about');
    }
    
  return (
    <div>
      <h1>this is a home page.</h1>
      <br></br>
      <button onClick={handleclick}>
        About US
      </button>
    </div>
  )
}

export default Home