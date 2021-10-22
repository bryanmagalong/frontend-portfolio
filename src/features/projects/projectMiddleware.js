import { FETCH_PROJECTS } from "./projectActions";

const projectMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      try {
      } catch (error) {
        console.log("fetch projects middleware");
        if (process.env.NODE_ENV === "development") console.log(error);
      }

      return next(action);
    default:
      return next(action);
  }
};

export default projectMiddleware;
