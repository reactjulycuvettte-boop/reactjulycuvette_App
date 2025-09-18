import { useState } from "react"

const PostRequest = () => {
  const [ title, setTitle ] = useState("")
  const [ body, setBody ] = useState("")
  const [ loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json",
        },
        body : JSON.stringify({
          title: title,
          body: body,
          userId: 1
        })
      })

      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log("POST CREATED:", data)

      setTitle("")
      setBody("")
    }  catch(err) {
      console.error("Error Creating Post:", err )
    } finally{
      console.log("Code has been executed....")
      setLoading(false)
    }
  }

  return (
    <>
    <h1>PostRequest</h1>
    <div className="App">
      <h1>Creata a New Post</h1>
      <form onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="formItem">
          <label htmlFor="body">Body:</label>
          <textarea id="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button type="submit" disabled={loading}>{loading ? "Creating Post...." : "Create Post"}</button>
      </form>
    </div>
    </>
  )
}

export default PostRequest