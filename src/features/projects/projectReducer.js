import { FETCH_PROJECTS_SUCCESS, TOGGLE_LOADING } from "./projectActions";

const initialState = {
  list: [],
  loading: false,
};

const projectReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        list: [...action.payload.reverse()],
        loading: false,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default projectReducer;
