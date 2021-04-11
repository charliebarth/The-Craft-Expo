import { fetchCrafts, destroyCraft } from '../../services/api'

export const getCrafts = craftName => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    fetchCrafts().then(response => {
      if (response.crafts) {
        dispatch({ type: "SET_CRAFTS", payload: response.crafts })
      } else {
        dispatch({ type: "SET_CRAFTS" })
      }
    })
  }
}

export const addCraft = craft => {
  return dispatch => {
   dispatch({ type: "ADD_CRAFT", payload: craft })
  }
}

export const removeCraft = id => {
  return dispatch => {
    dispatch({ type: "FETCHING" })
    destroyCraft(id)
    .then(response => {
      dispatch({ type: "REMOVE_CRAFT", payload: id})
    })
  }
}