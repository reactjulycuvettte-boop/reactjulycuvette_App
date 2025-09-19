import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const UserProfile = () => {
  const { userId } = useParams()
  const navigate = useNavigate()

  const users = {
    1: { name: "Suraj Kumar", email: "suraj@InputDeviceInfo.com"},
    2: { name: "Sourabh Kumar", email: "sourabh@InputDeviceInfo.com"},
    3: { name: "Ajay Kumar", email: "ajay@InputDeviceInfo.com"},
  }

  const user = users[userId]
  console.log(user)

  if(!user) {
    return <div>User not found!</div>
  }


  return (
    <>
      <h1>User Profile</h1>
      <h2>ID: {userId}</h2>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>


      <button onClick={() => navigate("/users")}>Back to UserList</button>

      {
        userId === "2" && (
          <button onClick={() => navigate("/about")}>Special offer for Sourabh!</button>
        )
      }
    </>
  )
}

export default UserProfile
