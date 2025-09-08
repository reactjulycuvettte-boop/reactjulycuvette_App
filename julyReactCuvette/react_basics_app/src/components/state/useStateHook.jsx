import { useState } from "react"

const useStateHook = () => {
  // let count = 0
  const [count, setCount] = useState(0);
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")

  function incrementHandler() {
    // console.log(count)
    setCount(count + 1)
  }

  function decrementHandler() {
    setCount(count - 1)
  }

  function resetHandler() {
    setCount(0)
  }

  console.log("I am being called...")

  function firstNameChangeHandler(e) {
    setFirstName(e.target.value)
  }

  function lastNameChangeHandler(e) {
    setLastName(e.target.value)
  }




  return (
    <div>
      <h1>Counter App</h1>
      <p>Current Count: <b>{count}</b></p>
      <button onClick={incrementHandler}>+1</button>
      <button onClick={decrementHandler}>-1</button>
      <button onClick={resetHandler}>Reset</button>
      <p>{`${firstName} ${lastName}`}</p>
      <input type="text" placeholder="First Name" value={firstName} onChange={firstNameChangeHandler} />
      <input type="text" placeholder="Last Name" value={lastName} onChange={lastNameChangeHandler} />
    </div>
  )
}

export default useStateHook
