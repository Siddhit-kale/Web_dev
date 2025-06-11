import React from 'react'

function ChildB() {
  return (
    <div>
      <ChildB></ChildB>
    </div>
  )
}

export default ChildB
