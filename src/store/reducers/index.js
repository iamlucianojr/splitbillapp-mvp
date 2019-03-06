import { combineReducers } from "redux";

import { consumers, items } from "./orders";

export default combineReducers({
  consumers, items
});
