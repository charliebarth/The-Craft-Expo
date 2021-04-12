import './styles/App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, setFetchedUser, clearUser } from './redux/actions/userActions'
import { setToken, clearToken, getToken } from './services/localstorage'
import { fetchLogin, postUser } from './services/api'

import DemosContainer from './containers/demosContainer'
import CraftsContainer from './containers/craftsContainer'


import NavBar from './components/backupNavBar'
import Welcome from './components/Welcome'
import SignupForm from './components/forms/signup'
import LoginForm from './components/forms/login'
import About from './components/About'

function App() {
	// eslint-disable-next-line
	const state = useSelector((state) => state);
	// used just for "re-rendering"

	const handleLogout = () => {
		clearToken();
		dispatch(clearUser());
	};
    // const user = useSelector(state => state.user)
    const dispatch = useDispatch()
  
    // const setUserFromToken = () => dispatch(getUser())
    // const setUser = username => dispatch(setFetchedUser(username))
  
    // const noUser = () => user === "" ? true : false
    // const userExists = () => user !== "" ? true : false
  
    // const checkAuthorization = () => {
    //   if (getToken() && noUser()) {
    //     setUserFromToken()  
    //   } 
    // }

	return (
		<Router>
			<div className="App">
				{/* <h1> Welcome to Workout Tracker! </h1> */}
                <NavBar />
				<Switch>
					<Route exact path="/" component={Welcome} />

                    <Route exact path="/about" component={About} />

					<Route path="/login" component={LoginForm} />

					<Route path="/drafting-board" component={DemosContainer} />
                    
                    <Route path="/your-archive" component={CraftsContainer} />

					<Route path="/signup" component={SignupForm} />
				</Switch>
				{getToken() ? (
					<button className="LogoutButton" onClick={handleLogout}>
						Logout
					</button>
				) : null}
			</div>
		</Router>
	);
}

export default App;