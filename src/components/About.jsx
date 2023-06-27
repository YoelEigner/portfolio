import aboutData from '../data/about.json'

export const About = () => {
    // console.log(aboutData)
    return (
        <div className="main-contianer-about">
            {aboutData.about}
        </div>
    )
}