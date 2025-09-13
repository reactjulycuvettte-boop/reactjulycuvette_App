import { useEffect, useState } from 'react'

const ApiCall = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    console.log("Fetching users from API....")

    fetch("https://jsonplaceholder.typicode.com/users").then(response => {
      if(!response.ok) {
        throw new Error("Failed to fetch users...")
      }
      console.log(response);
      return response.json()
    }).then(data => {
      setUsers(data)
    }).catch(error => {
      console.error("Error in fetching users", error)
    })
  }, [])

  console.log(users)

  return (
    <div>
      <h1>API</h1>
      <div>
        <h2>Users List from a Dummy API</h2>
        <ul>
          {
            users.map(user => (
              <li>{user.name} --- {user.email}</li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default ApiCall
