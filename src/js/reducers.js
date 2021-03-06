import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import core from "./modules/core/index";

console.log("CORE:");
console.log(core);

export default history =>
  combineReducers({
    core: core.reducer,
    router: connectRouter(history)
  });
