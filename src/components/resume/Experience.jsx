import { useEffect, useState } from "react";
import { gradientStyle } from "../../utils/Util"

export const Experience = (props) => {
    const { jsonData, onGoingWorkProjects, title } = props
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => { setCursorPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY, }); };
        document.addEventListener('mousemove', handleMouseMove);
    }, []);
    
    return (
        <div className="experience-section">
            <h3 className="color font-subtext" id='experience'>{title}</h3>
            <div className="line"></div>
            {jsonData && jsonData.map((data, idx) => {
                return (
                    <div key={idx} className='my-4 pop-out' style={gradientStyle(cursorPosition)}>
                        <div className={`d-flex`} key={data.id}>
                            <h4 className="color font-header">{data.title}</h4>
                            <h4 className="color font-header">{data.name}</h4>
                            <h4 className="color font-header">{data.start + " - " + data.end}</h4>
                        </div>
                        <div>
                            {data?.bullets.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <li className="color font-subtext">{item}</li>
                                        {index === 0 && onGoingWorkProjects?.find(p => p.jobId === data.id) &&
                                            onGoingWorkProjects.map((p, i) => {
                                                return (
                                                    <li key={i} className="color font-subtext">{p.title}</li>
                                                )
                                            })
                                        }
                                        {index === 0 && onGoingWorkProjects?.find(p => p.jobId === data.id) &&
                                            onGoingWorkProjects.map((p, idx) => {
                                                return (
                                                    <ul key={idx} className="nested-bullets">
                                                        {p.bullets.map((item, id) => {
                                                            return (
                                                                <li key={id} className="color font-subtext empty-bullet">{item}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}