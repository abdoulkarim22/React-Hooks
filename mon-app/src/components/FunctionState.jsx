import React, { useState } from 'react'

function FunctionState() {

 const [counter, setCounter] = useState(0);

 const addOne = () => {
    setCounter(counter + 1)
 }

  return (
    <div className='text-center mt-5'>
      <p>Function State: {counter} </p>
      <button onClick={addOne} >State Function</button>
    </div>
  )
}

export default FunctionState