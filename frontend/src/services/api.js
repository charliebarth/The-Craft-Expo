import { getToken } from './localstorage'

const URL = 'http://localhost:3000/'

const headers = { 'Content-Type': 'application/json', 'Accepts': 'application/json' }
const authHeaders = { Authorization: `Bearer ${getToken()}` }
const fullHeaders = {
  'Content-Type': 'application/json', 
  'Accepts': 'application/json',
  'Authorization': `Bearer ${getToken()}`
}

const parseJSON = res => res.json()

export const postUser = user => {
  return fetch(URL + 'users', {
    method: "POST",
    headers,
    body: JSON.stringify(user),
  })
  .then(parseJSON)
}

export const fetchLogin = credentials => {
  return fetch(URL + 'auth', {
    method: 'POST',
    headers,
    body: JSON.stringify(credentials)
  })
  .then(parseJSON)
} 

export const postCraft = craft => {
  return fetch(URL + "crafts", {
    method: 'POST',
    headers: fullHeaders,
    body: JSON.stringify(craft)
  })
  .then(parseJSON)
}

export const destroyCraft = id => {
  return fetch(URL + `crafts/${id}`, {
    method: "DELETE",
    headers: fullHeaders
  })
  .then(parseJSON)
}

const authFetch = path => {
  return fetch(URL + path, {
    headers: authHeaders
  })
  .then(parseJSON)
}

export const fetchProfile = () => authFetch("profile")
export const fetchDemos = () => authFetch("demos")
export const fetchUser = id => authFetch(`users/${id}`)
export const fetchCrafts = () => authFetch("crafts")
