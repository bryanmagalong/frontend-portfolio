import { fetchProjectsSuccess, FETCH_PROJECTS } from "./projectActions";
import { get } from "../../utils/api";

const projectMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      try {
        const data = await get(`${process.env.REACT_APP_API_URL}/projects`);
        console.log(data);
        store.dispatch(fetchProjectsSuccess(data.projects));
      } catch (error) {
        if (process.env.NODE_ENV === "development") console.log(error);
      }

      return next(action);
    default:
      return next(action);
  }
};

export default projectMiddleware;
