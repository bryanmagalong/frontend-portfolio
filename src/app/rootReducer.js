import { combineReducers } from "redux";
import skills from "../features/skills/skillReducer";
import projects from "../features/projects/projectReducer";

export default combineReducers({ skills, projects });
