import React from 'react'

const ToDoList = ({ items}) => {
  return (
    <ul>
      {
        items.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))
      }
    </ul>
  )
}

export default ToDoList
