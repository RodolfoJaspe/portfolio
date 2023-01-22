import { SHOW_SKILLS } from "../actions";

const initialState = {
    skillsState: true
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_SKILLS:
            return {...state, skillsState: !state.skillsState}
        default:
            return state;
    }
}