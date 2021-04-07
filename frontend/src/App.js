import './styles/App.css';
import { useEffect, useState } from 'react'
import Welcome from './components/Welcome'
import About from './components/About'
import NavBar from './components/NavBar'
import YourArchive from './components/YourArchive'
import DraftingBoard from './components/DraftingBoard'
import ViewCraft from './components/ViewCraft'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {

  const [crafts, setCrafts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/crafts')
    .then(res => res.json())
    .then(setCrafts)
  }, [])

  return (
    <div className="App">

      <Router>
        <NavBar />
        <Route exact  path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/your-archive' component={YourArchive}/>
        <Route path='/drafting-board' render={() => <DraftingBoard crafts={crafts} />}/>
        <Route exact path="/crafts/:name" render={routerProps => < ViewCraft crafts={crafts} {...routerProps} />} />

      </Router>
    </div>
  );
}

export default App;
