import './styles/App.css';
import Welcome from './components/Welcome'
import About from './components/About'
import NavBar from './components/NavBar'
import YourArchive from './components/YourArchive'
import DraftingBoard from './components/DraftingBoard'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Route exact  path='/' component={Welcome}/>
        <Route path='/about' component={About}/>
        <Route path='/your-archive' component={YourArchive}/>
        <Route path='/drafting-board' component={DraftingBoard}/>

      </Router>
    </div>
  );
}

export default App;
