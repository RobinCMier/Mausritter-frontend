import { combineReducers } from "redux";
import user from "./user/reducer";
import sheets from "./sheets/reducer";

export default combineReducers({
  user,
  sheets,
});
