
export const GetAboutData = async () => {
    return (await fetch(`${process.env.REACT_APP_GITHUB_URL}/about.json`)).json()
}
export const GetResumeData = async () => {
    return (await fetch(`${process.env.REACT_APP_GITHUB_URL}/resume.json`)).json()
}
export const GetProjectsData = async () => {
    return (await fetch(`${process.env.REACT_APP_GITHUB_URL}/projects.json`)).json()
}