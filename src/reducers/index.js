import { combineReducers } from "redux";

import home from "./home";
import auth from "./auth"

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
