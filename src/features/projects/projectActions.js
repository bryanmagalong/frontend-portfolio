export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const fetchProjectsSuccess = (payload) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload,
});
