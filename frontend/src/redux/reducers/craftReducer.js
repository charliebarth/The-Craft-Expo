function handleCrafts(state = [], action) {
    switch (action.type) {
      case "SET_CRAFTS":
        return action.payload || state
  
      case "ADD_CRAFT":
        return [...state, action.payload]
  
      case "REMOVE_CRAFT":
        return state.filter(craft => craft.id !== action.payload)
  
      default:
        return state
    }
  }
  
  export default handleCrafts