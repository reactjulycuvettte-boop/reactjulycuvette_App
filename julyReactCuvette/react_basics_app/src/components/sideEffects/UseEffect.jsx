import { useState, useEffect } from "react"

const UseEffect = () => {
  const [ name, setName ] = useState("")
  const [ count, setCount ] = useState(0)

  // On Every render
  useEffect(() => {
    console.log("Component Mounted or Updated")
  })

  // Only runs after Initial Page Loading/Render
  useEffect(() => {
    console.log("Component Mounted")

    // cleanup function when componentUnmounted
    return () => {
      console.log("Component has UNMOUNTED Successfully")
    }
  }, [])

    // Only changes whenever this state dependency changes
    useEffect(() => {
      console.log(`Count Chnages to ${count}`)
    }, [name])

  console.log("Simple Console Text")

  return (
    <div>
      <h1>Learning useEffect</h1>
      <p>{name}</p>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
      <div><button onClick={() => setCount(count + 1)}>Clicked {count} times</button></div>
    </div>
  )
}

export default UseEffect


// Side Effects are operations that affect something outside the scope of function/component being executed.
// Calling data from API
// Manipulate DOM.
// SetTimeout/SetInterval
