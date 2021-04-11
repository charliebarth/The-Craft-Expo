import {combineReducers} from "redux";  
import handleUsers from "./userReducer";
import handleDemos from "./demoReducer";
import handleCrafts from "./craftReducer";

const rootReducer = combineReducers({
	user: handleUsers,
	demos: handleDemos,
	crafts: handleCrafts,
});

export default rootReducer