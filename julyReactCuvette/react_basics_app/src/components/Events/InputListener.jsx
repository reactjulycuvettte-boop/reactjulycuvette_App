import React, { useState } from 'react'

const InputListener = () => {
  const [ inputValue, setInputValue ] = useState("")

  const handleInputChange = (e) => {
    console.log(e)
    setInputValue(e.target.value)
  }

  return (
    <div>
      <input type='text' value={inputValue} onChange={handleInputChange} placeholder='Type Something...' />
      <p>you typed: {inputValue}</p>
    </div> 
  )
}

export default InputListener
