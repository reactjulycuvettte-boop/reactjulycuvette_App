import React from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {

  const users = [
    {id: 1, name: "Suraj"},
    {id: 2, name: "Sourabh"},
    {id: 3, name: "Ajay"}
  ]


  return (
    <div>
      <h1>Users List</h1>
      <ul>
      {
        users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default UserList
