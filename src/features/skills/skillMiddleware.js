import { get } from "../../utils/api";
import { fetchSkillsSuccess, FETCH_SKILLS } from "./skillActions";

const skillMiddleware = (store) => (next) => async (action) => {
  switch (action.type) {
    case FETCH_SKILLS:
      try {
        const data = await get(`${process.env.REACT_APP_API_URL}/skills`);
        console.log(data);

        store.dispatch(fetchSkillsSuccess(data.skills));
      } catch (error) {
        if (process.env.NODE_ENV === "development") console.log(error);
      }
      return next(action);
    default:
      return next(action);
  }
};
export default skillMiddleware;
