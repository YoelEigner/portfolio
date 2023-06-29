import jsonData from '../../data/resume.json'


export const Skills = () => {
    return (
        <div  className='skills'>
            <h5 className="color font-subtext" id='experience'>Skills</h5>
            <div className="line"></div>
            <div className="d-flex flex-row flex-wrap">
                {jsonData?.skills?.map((item) => {
                    return (
                        <div key={item.id} className="p-2 ">
                            <div className="data-tech font-subtext skill-item">{item.name + " - " + item.level} </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}