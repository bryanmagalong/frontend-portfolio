import {
  fetchProjectsSuccess,
  FETCH_PROJECTS,
  toggleLogin,
} from "./projectActions";
import { get } from "../../utils/api";

const projectMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      try {
        const { loading, list } = store.getState().projects;
        if (!list.length && !loading) store.dispatch(toggleLogin(true));

        const data = await get(`${process.env.REACT_APP_API_URL}/projects`);
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
