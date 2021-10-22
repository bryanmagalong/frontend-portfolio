import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import skillMiddleware from "../features/skills/skillMiddleware";
import projectMiddleware from "../features/projects/projectMiddleware";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(skillMiddleware, projectMiddleware),
);

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;
