import { Link } from 'react-router-dom'

export default function NavBar() {

  return (
    <nav>

      <Link to="/">Welcome</Link>
      <Link to="/about">About</Link>
      <Link to="/your-archive">Your Archive</Link>
      <Link to="/drafting-board">Drafting Board</Link>

    </nav>
  )

}