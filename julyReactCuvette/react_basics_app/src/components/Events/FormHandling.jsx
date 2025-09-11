import { useState } from "react"

const FormHandling = () => {
  const [ username, setUsername ] = useState("")
  const [ email, setEmail ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted:", { username, email } )
    setUsername("")
    setEmail("")
  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default FormHandling