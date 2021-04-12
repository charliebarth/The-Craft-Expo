export default function Welcome() {

    return (
      <div className="App">

      <p>{user.username ? `Welcome ${user.username}` : null}</p>

      <h1>JWT with React</h1>

      <LoginForm handleLogin={handleLogin} />

      <button onClick={handleLogout}>Logout</button>

      </div>
    )
  
  }