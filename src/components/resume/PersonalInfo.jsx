import jsonData from '../../data/resume.json'

export const PersonalInfo = () => {
    return (
        <div>
            <h1 className="color display-1 font-header">{jsonData.name}</h1>
            <h1 className="color font-header">{jsonData.title}</h1>
            <nav>
                <div className="color font-subtext">{jsonData.about1}</div>
                <div className="color font-subtext">{jsonData.about2}</div>
                <div className="color font-subtext">{jsonData.about3}</div>
            </nav>
        </div>
    )
}