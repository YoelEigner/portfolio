import aboutData from '../data/about.json'

export const About = () => {
    return (
        <div className="main-contianer-about">
            {aboutData.about}
        </div>
    )
}