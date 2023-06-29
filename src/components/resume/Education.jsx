import jsonData from '../../data/resume.json'


export const Education = () => {
    return (
        <div>
            <h3 className="color font-subtext" id='experience'>Education</h3>
            <div className="line"></div>
            {jsonData?.education?.map((item) => {
                return (
                    <div key={item.id} className='my-4 pop-out experience-items'>
                        <div className='d-flex flex-row experience-item' key={item.id}>
                            <div className="color font-subtext experience-item">{item.institute}</div>
                            {item.name && <b className="color font-subtext separate experience-item  mx-2">|</b>}
                            <div className="color font-subtext experience-item">{item.name}</div>
                            <div className="color font-subtext experience-item-date">{item.year}</div>

                        </div>

                    </div>

                )
            })}

        </div>
    )
}