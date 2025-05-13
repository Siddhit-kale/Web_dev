import React from 'react'

const Card = (props) => {
  return (
    <div>
        
        <input type='text' onChange={(e) => props.setName(e.target.value)}></input>
        <p>Name State variable ki value inside card = {props.name}</p>

    </div>
  )
}

export default Card

