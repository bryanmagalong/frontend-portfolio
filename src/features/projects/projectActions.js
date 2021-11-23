export const FETCH_PROJECTS = "FETCH_PROJECTS";
export const FETCH_PROJECTS_SUCCESS = "FETCH_PROJECTS_SUCCESS";
export const TOGGLE_LOADING_PROJECTS = "TOGGLE_LOADING_PROJECTS";

export const fetchProjects = () => ({
  type: FETCH_PROJECTS,
});

export const fetchProjectsSuccess = (payload) => ({
  type: FETCH_PROJECTS_SUCCESS,
  payload,
});

export const toggleLoadingProjects = () => ({
  type: TOGGLE_LOADING_PROJECTS,
});
