import React from 'react'

const Event2 = () => {

        function handle() {
            alert("Button is been clicked");
        }

        function mouses() {
            alert("This is mouse event");
        }

        function text(e) {
            e.target.value();
        }

    return (
    <div>

        <input type='text' onChange={text}></input>
      
        <p onMouseOver={mouses}>This is a mouse event</p>
        <br></br>
        <button onClick={handle}>ON Click</button>

    </div>
  )
}

export default Event2
