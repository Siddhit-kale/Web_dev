import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate();

    function handleclick() {
        navigate('/dashboard');
    }

  return (
    <div>
      <h1>This is a ABout us.</h1>
      <br />
      <button onClick={handleclick}>
        Dashbaord
      </button>
    </div>
  )
}

export default About
