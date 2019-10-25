import { createStore } from "redux";
import { appReducer, initialState } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  appReducer,
  initialState,
  composeWithDevTools()
);
