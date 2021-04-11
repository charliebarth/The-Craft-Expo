import { fetchDemos } from '../../services/api'

export const getCrafts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING" })
    fetchDemos().then(response => {
      dispatch({type: "SET_DEMOS", payload: response.demos})
    })
  }
}