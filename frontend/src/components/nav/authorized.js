import { Link } from 'react-router-dom' 

export default function Authorized({ handleLogout }) {
  return (

    <nav>
      <button onClick={handleLogout} id="logout">
        <span>
          LOGOUT
        </span>
      </button>
    </nav>
  )
}