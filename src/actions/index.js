export const SHOW_SKILLS="SHOW_SKILLS";

export const showSkills = (skillsState) => dispatch => {
    dispatch({type:SHOW_SKILLS, payload:skillsState})
}