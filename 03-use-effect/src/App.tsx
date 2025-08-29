import { useState, useEffect } from 'react'
import './App.css'

const FAKE_API_URL = 'https://jsonplaceholder.typicode.com'

function App() {
  const [users, setUsers] = useState([])
  const [post, setPost] = useState('')
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    fetch(`${FAKE_API_URL}/users`)
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  const searchPost = () => {
    if (!post) return
    fetch(`${FAKE_API_URL}/posts/${post}`)
      .then(response => response.json())
      .then(data => {
        if (!data.title) {
          setPostData(null)
        } else {
          setPostData(data)
        }})
      .catch(error => console.log(error))
  }

  return (
    <>
      <div>
          {
            users.map((user) => {
              return <p key={user.id}>{user.name}</p>
            })
          }
      </div>

      <div>
        <input value={post} onChange={(e) => {
          setPost(e.target.value)
        }} />
        <button onClick={searchPost}>Buscar</button>

        {postData ? (
          <div>
            <h2>{postData.title}</h2>
          </div>
        ) : (
          post && <p>No se encontró el post</p>
        )}
      </div>
    </>
  )
}

export default App
