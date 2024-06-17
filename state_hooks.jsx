import React, { useState } from 'react'


export default function Hooks() {
    const [car, setCar ] =useState({
      brand : "ferrari",
      color:"red"
        
    });

/*     const chngColor = () =>{
      setCar((prev) => {
        return {
          ...prev,
          color: "blue"
        }
      })
    } */
   
  return (
    <div>
      <h1>My {car.brand} color is {car.color}</h1>
      <button onClick={()=>setCar({...car,color: "blue"})}>
        To Color Blue
      </button>
    </div>
  )
}
