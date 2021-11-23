export const FETCH_SKILLS = "FETCH_SKILLS";
export const FETCH_SKILLS_SUCCESS = "FETCH_SKILLS_SUCCESS";
export const TOGGLE_LOADING_SKILLS = "TOGGLE_LOADING_SKILLS";
export const fetchSkills = () => ({
  type: FETCH_SKILLS,
});

export const fetchSkillsSuccess = (payload) => ({
  type: FETCH_SKILLS_SUCCESS,
  payload,
});

export const toggleLoadingSkills = () => ({
  type: TOGGLE_LOADING_SKILLS,
});
