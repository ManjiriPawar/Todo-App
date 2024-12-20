import { createStore, applyMiddleware, combineReducers } from "redux";
//import thunk from "redux-thunk";
import { thunk } from "redux-thunk";

import todoReducer from "./reducers/todoReducer";
import employeeReducer from "./reducers/employeeReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  employees: employeeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
