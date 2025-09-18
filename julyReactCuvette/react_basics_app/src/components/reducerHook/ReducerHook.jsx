import React, { useReducer } from 'react'

const initialState = {
  count: 0,
  loading: false,
  error: null
}

const counterReducer = (state, action) => {
  switch(action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      }
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1
      }
    case "RESET":
      return {
        ...state,
        count: 0
      }
    case "SET_COUNT":
      return {
        ...state,
        count: action.payload
      }
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state  
  }
}

const ReducerHook = () => {
  const [ state, dispatch ] = useReducer(counterReducer, initialState)
  // const [ count, setCount] = useState(0)

  const increment = () => {
    dispatch({ type: "INCREMENT"})
  }
  const decrement = () => {
    dispatch({ type: "DECREMENT"})
  }
  const reset = () => {
    dispatch({ type: "RESET"})
  }

  const setCustomValue = (value) => {
    if(isNaN(value)) {
      dispatch({
        type: "SET_ERROR",
        payload: "Please enter a valid number"
      })
      return
    }
    
    dispatch({
      type: "SET_ERROR",
      payload: null
    })
    dispatch({
      type: "SET_COUNT",
      payload: parseInt(value)
    })
  }

  return (
    <div>
      <h1>Reducer Hook</h1>
      <h2>Counter: {state.count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <div>
        <input type='text' placeholder='Set Custom value'  onChange={(e) => setCustomValue(e.target.value)}/>
      </div>

      { state.error ? <p style={{ color : "red"}}>{state.error}</p> : <></>}
    </div>
  )
}

export default ReducerHook
