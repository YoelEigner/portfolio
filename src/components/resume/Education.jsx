import { useSelector } from 'react-redux';


export const Education = () => {
    const resume = useSelector((state) => state.resume);

    return (
        <div>
            <h3 className="color font-subtext" id='experience'>Education</h3>
            <div className="line"></div>
            {resume && resume?.education?.map((item) => {
                return (
                    <div key={item.id} className='my-4 pop-out experience-items'>
                        <div className={`experience-item d-flex flex-row`} key={item.id}>
                            <div className="color font-subtext experience-item">{item.institute}</div>
                            {item.name && <b className="color font-subtext experience-item  mx-2">|</b>}
                            <div className="color font-subtext experience-item">{item.name}</div>
                            <div className="color font-subtext experience-item-date">{item.year}</div>

                        </div>

                    </div>

                )
            })}

        </div>
    )
}