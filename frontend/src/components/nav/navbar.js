import Authorized from './authorized'
import Unauthorized from './unauthorized'
// import Logo from './logo'
// import Dummy from './dummy'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function NavBar({ handleLogout }) {

  const user = useSelector(state => state.user)

  return (
    <header>
      {/* <Logo /> */}
      
      <div className="sub-header">
          {/* <Dummy /> */}
          <Link to="/your-archive">Your Archive</Link>
          <Link to="/drafting-board">Drafting Board</Link>

        { user !== "" ? 
          <Authorized handleLogout={handleLogout} /> 
          : 
          <Unauthorized /> 
        }
      </div>
    </header>
  )
}