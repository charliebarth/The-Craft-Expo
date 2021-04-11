function handleDemos(state = [], action) {
    switch (action.type) {
      case "SET_DEMOS":
        return action.payload
  
      default:
        return state
    }
  }
  
  export default handleDemos