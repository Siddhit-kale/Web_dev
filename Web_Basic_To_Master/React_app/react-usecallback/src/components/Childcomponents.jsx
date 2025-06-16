import React, { useMemo } from 'react'

const Childcomponents = React.memo(
    (props) => {

        console.log("This is a Child Component")
    
      return (
        <div>
          <button>
            {props.buttonname}
          </button>
        </div>
      )
    }
)

export default Childcomponents
