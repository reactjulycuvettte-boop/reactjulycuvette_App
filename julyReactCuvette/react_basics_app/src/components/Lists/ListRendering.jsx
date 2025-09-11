import React, {useState} from 'react'

const ListRendering = () => {
  const [ users, setUsers ] = useState([
    {id: 1, name: "New User 1", age: 26, isActive: true},
    {id: 2, name: "New User 2", age: 24, isActive: false},
    {id: 3, name: "New User 3", age: 25, isActive: true},
    {id: 4, name: "New User 4", age: 28, isActive: false},
  ])

  function addUser() {
    const newUser = {
      id: users.length + 1,
      name: `New User ${users.length + 1}`,
      age: Math.floor(Math.random() * 30) + 20,
      isActive: Math.random() > 0.5
    }
    setUsers([...users, newUser])
  }

  return (
    <div>
      <h1>List Rendering</h1>
      <div className='userList'>
        <h2>User List with Keys</h2>
        <button onClick={addUser} className='addUser'>Add New User</button>

        <div className='usersContainer' style={{ display: "flex", flexWrap: "wrap"}}>
          {
            users.map((user) => (
              <div key={user.id}  className="userCard" style={{ backgroundColor: "aqua", padding: "10px", margin: "10px", color: "#000"}}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Status: {user.isActive ? "Active" : "InActive"}</p>
          </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ListRendering
