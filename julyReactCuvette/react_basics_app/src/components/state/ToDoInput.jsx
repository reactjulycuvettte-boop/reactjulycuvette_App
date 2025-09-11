import { useState } from 'react'

const ToDoInput = (props) => {
  const [ inputText, setInputText ] = useState("")

  const submitHandler = (event) => {
    event.preventDefault()
    if(inputText.trim().length === 0) return

    props.onAddTodo(inputText)
    setInputText("")
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default ToDoInput





"Shubham Shribvastavava"  