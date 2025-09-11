import { useState } from "react"
import ToDoInput from "./ToDoInput"
import ToDoList from "./ToDoList"

function ToDoApp() {
  const [ todos, setTodos ] = useState([])

  const addTodoHandler = (todoText) => {
    const newTodo = { id: Math.random().toString(), text: todoText}
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }
  
  return (
    <>
    <h1>My ToDo App</h1>
    <ToDoInput onAddTodo={addTodoHandler}/>
    <ToDoList items={todos}/>
    </>
  )
}

export default ToDoApp