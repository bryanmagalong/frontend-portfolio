import { FETCH_SKILLS_SUCCESS } from "./skillActions";

const initialState = {
  frontend: [],
  backend: [],
  tools: [],
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
      };
    default:
      return state;
  }
};

export default skillReducer;
