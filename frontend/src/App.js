import './styles/App.css'
import SignupForm from './components/forms/signup'
import LoginForm from './components/forms/login'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchLogin, postUser } from './services/api'
import { getUser, setFetchedUser, clearUser } from './redux/actions/userActions'
import { setToken, clearToken, getToken } from './services/localstorage'
import NavBar from './components/nav/navbar'
import { useEffect } from 'react'
// import PostContainer from './containers/postsContainer'
// import PostShowContainer from './containers/postShowContainer'
// import BoardsContainer from './containers/boardsContainer'
// import NoMatch from './components/noMatch'
import DemosContainer from './containers/demosContainer'
import CraftsContainer from './containers/craftsContainer'
import DemoCraft from './components/demoCraft'

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
        case "drafing-board":
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
          <NavBar handleLogout={handleLogout} />

          <Switch>
            
            <Route path="/signup" exact >
              {redirectToHomePreCheck("signup")}
            </Route>

            <Route path="/login" exact >
              {redirectToHomePreCheck("login")}
            </Route>

            <Route path="/drafting-board" exact >
              {redirectToLoginPreCheck("drafting-board")}
            </Route>

            <Route path="/your-archive" exact>
              {redirectToLoginPreCheck("your-archive")}
            </Route>
            
            <Route path="/" exact >
              {redirectToLoginPreCheck()}
            </Route>

            <Route path="/crafts/" component={DemoCraft}/>

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

export default App