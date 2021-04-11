import './styles/App.css';
import { useEffect, useState } from 'react'
import SignupForm from './components/forms/signup'
import LoginForm from './components/forms/login'
import { fetchLogin, postUser } from './services/api'
import { useSelector, useDispatch } from 'react-redux'
import DemosContainer from './containers/demosContainer'
import CraftsContainer from './containers/craftsContainer'
import { getUser, setFetchedUser, clearUser } from './redux/actions/userActions'
import { setToken, clearToken, getToken } from './services/localstorage'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

function App() {

  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const setUserFromToken = () => dispatch(getUser())
  const setUser = username => dispatch(setFetchedUser(username))

  const noUser = () => user === "" ? true : false
  const userExists = () => user !== "" ? true : false

  const checkAuthorization = () => {
    if (getToken() && noUser()) {
      setUserFromToken()  
    } 
  }

  const handleSignup = newUser => {
    console.log(newUser)
    postUser(newUser)
    .then(data => {
      if (data.error) {
        alert(data.messages)
      }
      
      if (data.jwt) {
        setToken(data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogin = credentials => {
    fetchLogin(credentials)
    .then(data => {
      if (data.error) {
        alert(data.error) 
      }

      if (data.jwt) {
        setToken(data.jwt)
        setUser(data.user.username)
      }
    })
  }

  const handleLogout = () => {
    clearToken()
    dispatch(clearUser())
  }

  useEffect(() => {
    checkAuthorization()
  }, [])

  const redirectToLoginPreCheck = (route = "/") => {
    if (userExists()) {
      switch (route) {
        case "drafting-board":
          return <DemosContainer />

        case "your-archive":
          return <CraftsContainer />
        
        default:
          return <DemosContainer />
      }
    } else {
      return <Redirect to="/login" />
    }
  } 

  const redirectToHomePreCheck = route => {
    if (noUser()) {
      switch (route) {
        case "signup":
          return <SignupForm handleSignup={handleSignup} />

        case "login":
        default:
          return <LoginForm handleLogin={handleLogin} />
       }

    } else {
      return <Redirect to="/" />
    }
  }

  const checkForTokenAndUser = () => {
    if (getToken() && noUser()) {
      return null
    } else {
      return (
        <Router>
          {/* <NavBar handleLogout={handleLogout} /> */}

          <Switch>
            
            <Route path="/signup" exact >
              {redirectToHomePreCheck("signup")}
            </Route>

            <Route path="/login" exact >
              {redirectToHomePreCheck("login")}
            </Route>

            <Route path="/drafing-board" exact >
              {redirectToLoginPreCheck("drafting-board")}
            </Route>

            <Route path="/your-archive" exact>
              {redirectToLoginPreCheck("your-archive")}
            </Route>
            
            <Route path="/" exact >
              {redirectToLoginPreCheck()}
            </Route>

            {/* <Route path="*" component={NoMatch} /> */}

          </Switch>
        </Router>
      )
    }
  }

  return (
    <>
      {checkForTokenAndUser()}
    </>
  )
}

  // const [crafts, setCrafts] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/crafts')
  //   .then(res => res.json())
  //   .then(setCrafts)
  // }, [])

//   return (
//     <div className="App">

//       <Router>
//         <NavBar />
//         <Route exact  path='/' component={Welcome}/>
//         <Route path='/about' component={About}/>
//         <Route path='/your-archive' component={YourArchive}/>
//         <Route path='/drafting-board' render={() => <DraftingBoard crafts={crafts} />}/>
//         <Route exact path="/crafts/:name" render={routerProps => < ViewCraft crafts={crafts} {...routerProps} />} />

//       </Router>
//     </div>
//   );
// }

export default App;
