import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todo.reducer";

const rootReducer = combineReducers({
  todo: todoReducer
});

export const store = createStore(rootReducer);

export default rootReducer;
