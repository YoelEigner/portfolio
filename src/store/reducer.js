const rootReducer = (state = {
    about: null,
    resume: null,
    projects: null

}, action) => {
    switch (action.type) {
        case "SAVE_ABOUT_DATA":
            return { ...state, about: action.about }
        case "SAVE_RESUME_DATA":
            return { ...state, resume: action.resume }
        case "SAVE_PROJECTS_DATA":
            return { ...state, projects: action.projects }
        default:
            return state;
    }
};

export default rootReducer;
