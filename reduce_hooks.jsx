import React from 'react'
import { useReducer } from 'react'

function reduce_hooks() {

  const initialState = { count: 0 }

  const reducer = (state, action) => {
    switch(action.type){
      case 'in' : {
        return { count : state.count + 1 }
      }
      case 'de' : {
        return { count : state.count - 1 }
      }
      case 'input' : {
        return { count : action.payload }
      }
      default : state
    } 
  }

  const [state, dispatch ] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : 'in'})}>Increase</button>
      <button onClick={() => dispatch({type : 'de'})}>Decrease</button>
      <br />
      <input value={state.count}
        type="number" 
        onChange={(e) => dispatch({type:'input' ,payload:Number(e.target.value)})} />
    </div>
  )
}

export default reduce_hooks
