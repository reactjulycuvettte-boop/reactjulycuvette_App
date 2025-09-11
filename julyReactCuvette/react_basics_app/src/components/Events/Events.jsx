import { useState } from "react"

const Events = () => {
  const [ message, setMessage ] = useState("")

  const handleClick = () => {
    setMessage("Button was clicked!")
  }

  const handleButtonClick = (buttonName) => {
    setMessage(`${buttonName} was clicked`)
  }
  
  return (
    <>
      <p>{message}</p>
      {/* Inline Arrow Function */}
      <button onClick={() => setMessage("Inline Handler")}>Inline Handler</button>
      <button onClick={handleClick}>Function Reference</button>
      <button onClick={() => handleButtonClick("Special Button")}>Function Reference with Parameters</button>
    </>
  )
}

export default Events
