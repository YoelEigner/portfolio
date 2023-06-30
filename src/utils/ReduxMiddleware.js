import { GetAboutData, GetProjectsData, GetResumeData } from "../DAL/GetData"

export const SaveAboutData = () => {
    return async (dispatch) => {
        try {
            const about = await GetAboutData()
            dispatch({ type: 'SAVE_ABOUT_DATA', about })
        } catch (err) {
            console.log('About Data: err in Save About Data', err)
        }
    }
}
export const SaveResumeData = () => {
    return async (dispatch) => {
        try {
            const resume = await GetResumeData()
            dispatch({ type: 'SAVE_RESUME_DATA', resume })
        } catch (err) {
            console.log('Resume Data: err in Save Resume Data', err)
        }
    }
}
export const SaveProjectseData = () => {
    return async (dispatch) => {
        try {
            const projects = await GetProjectsData()
            dispatch({ type: 'SAVE_PROJECTS_DATA', projects })
        } catch (err) {
            console.log('Projects Data: err in Save Projects Data', err)
        }
    }
}
export const DeleteAll = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: 'DELETE_ALL' })
        } catch (err) {
            console.log('Delete Data: err in Deleting Data', err)
        }
    }
}