import { FETCH_SKILLS_SUCCESS, TOGGLE_LOADING_SKILLS } from "./skillActions";

const initialState = {
  frontend: [],
  backend: [],
  tools: [],
  loading: false,
};

const skillReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SKILLS_SUCCESS:
      return {
        ...state,
        frontend: [
          ...action.payload.filter((skill) => skill.category === "frontend"),
        ],
        backend: [
          ...action.payload.filter((skill) => skill.category === "backend"),
        ],
        tools: [
          ...action.payload.filter((skill) => skill.category === "tools"),
        ],
        loading: false,
      };
    case TOGGLE_LOADING_SKILLS:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default skillReducer;
