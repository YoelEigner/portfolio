import jsonData from '../../data/resume.json'


export const Citizenships = () => {
    return (
        <div>
            <h3 className="color font-subtext" id='experience'>Citizenships</h3>
            <div className="line"></div>
            {jsonData?.citizenships?.map((item, idx) => {
                return (
                    <ul key={idx}>
                        <li className="color font-subtext">{item}</li>
                    </ul>
                )
            })}
        </div>
    )
}