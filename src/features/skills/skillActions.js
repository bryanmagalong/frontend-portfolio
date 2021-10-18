export const FETCH_SKILLS = "FETCH_SKILLS";
export const FETCH_SKILLS_SUCCESS = "FETCH_SKILLS_SUCCESS";

export const fetchSkills = () => ({
  type: FETCH_SKILLS,
});

export const fetchSkillsSuccess = (payload) => ({
  type: FETCH_SKILLS_SUCCESS,
  payload,
});
