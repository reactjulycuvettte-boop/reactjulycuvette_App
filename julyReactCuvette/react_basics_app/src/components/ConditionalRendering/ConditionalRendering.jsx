import { useState } from "react"

const ConditionalRendering = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  const [ userRole, setUserRole ] = useState("guest")
  const [ showDetails, setShowDetails ] = useState(false)

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn)
    if(!isLoggedIn) {
      setUserRole("admin")
    }
  }

  const toggleRole = () => {
    setUserRole(userRole === "admin" ? "user" : "admin")
  }

  return (
    <>
    <div className="dashboard">
       <h2>Conditional Content Dashboard</h2>

       {
        !isLoggedIn && (
          <div className="loginPrompt">
            <p>Please log in to access the dashboard</p>
            <button onClick={toggleLogin}  className="loginBtn">Login</button>
          </div>
        )
       }


       {
        isLoggedIn ? (
          <div className="dashBoardContainer">
          <div className="header">
            <h2>Welcome, {userRole}!</h2>
            <button style={{ marginRight: 15}}  className="logoutBtn" onClick={toggleLogin}>Logout</button>
            <button className="roleBtn" onClick={toggleRole}>Switch Role</button>
          </div>


          {
            userRole === "admin" && (
              <div className="adminPanel">
                <h3>Admin Controls</h3>
                <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide" : "Show" }</button>

                {
            showDetails && (
              <div className="adminDetails">
                <p>User Management</p>
                <p>User Management Role</p>
                <p>User Management Principles</p>
                <p>UAnalytics Dasboard</p>
              </div>
            )
          }
              </div>

              
            )
          }


          

          <div className="userContent">
            { userRole === "admin" ? (
              <p>you have full access to the system</p>
            ) : 
              <p>you have limited access as a regular user</p>}
          </div>



          </div>
        ) : null
       }

    </div>
    </>
  )
}

export default ConditionalRendering


// ? Dashboard
// Login to Website.
// logged in as a Admin or User.
// Toggle - Admin or User.

// if your admin
// Special Admin Control
// if your User 
