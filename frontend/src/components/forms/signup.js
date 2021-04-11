import { useState } from 'react'

export default function SignupForm({ handleSignup }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = e => {
    switch (e.target.name) {
      case 'username':
        setUsername(e.target.value)
        break

      case 'password':
        setPassword(e.target.value)
        break

      default:
        return null
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    handleSignup({user: {username, password}})
  }

  return (
    <main>
      <div id="signup-form-container">
        <form id="signup-form" onSubmit={handleSubmit}>

          <div id="signup-header-container">
            <h2 id="signup-header">SIGNUP</h2> 
          </div>

          <div >
            <label >username</label>

            <input 
              
              type="text"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </div>

          <div >
            <label >password</label>

            <input 
              
              type="password"
              name="password"
              onChange={handleChange}
              value={password}
            />
          </div>

          <div >
            <input 
              
              type="submit" 
              value="Create Account" 
            />
          </div>

        </form>
      </div>
    </main>
  )

}