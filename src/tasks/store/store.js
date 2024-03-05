import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import { tasksReducer } from "./tasksReducer";
import { visibilityFilterReducer } from "./visibilityFilterReducer";

const rootReducer = combineReducers({
  tasks: tasksReducer,
  visiblity: visibilityFilterReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
