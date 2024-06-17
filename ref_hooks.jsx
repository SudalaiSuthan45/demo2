import React, { useEffect, useRef, useState } from 'react'

export default function ref_hooks() {

  const [value, setValue ] =useState(0)
  const counter = useRef(0)

  // useEffect(() => {
  //   setCounter(counter+1)
  // },[value])

  useEffect ( () =>{
    counter.current = counter.current + 1
  })
 
return (
  <div>
    <button onClick={()=>setValue(prev => prev -1 )}> -1 </button>
    <h1>{value}</h1>
    <button onClick={()=>setValue(prev => prev + 1 )}> +1 </button>
    <h1>Render Count : {counter.current}</h1>
  </div>
)

}
