import { useState, useRef } from "react"

export const ControlledComponent = () => {
  const [ value, setValue ] = useState("")

  return (
    <>
    <h1>ControlledComponent</h1>
    <p>{value}</p>
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </>
  )
}


export const UnControlledComponent = () => {
  const inputRef = useRef()
  console.log(inputRef)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Input Value:", inputRef.current.value)
  }

  return (
    <>
      <h1>UnControlledComponent</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Submit</button>
      </form>
    </>
  )
}