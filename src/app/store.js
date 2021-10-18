import { createStore, compose, applyMiddleware } from "redux";
import skillMiddleware from "../features/skills/skillMiddleware";

import rootReducer from "./rootReducer";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(skillMiddleware));

// == Store
const store = createStore(rootReducer, enhancers);

// == Export
export default store;
