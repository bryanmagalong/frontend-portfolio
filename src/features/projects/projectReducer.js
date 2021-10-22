import { FETCH_PROJECTS_SUCCESS } from "./projectActions";

const initialState = {
  list: [],
};

const projectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
      };
    default:
      return state;
  }
};

export default projectReducer;
