import { useEffect, useState } from "react";
import { gradientStyle } from "../../utils/Util"
// import jsonData from '../../data/resume.json'


export const Experience = (props) => {
    const { jsonData, onGoingWorkProjects, title } = props
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (event) => { setCursorPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY, }); };
        document.addEventListener('mousemove', handleMouseMove);
    }, []);
    return (
        <div>
            <h3 className="color font-subtext" id='experience'>{title}</h3>
            <div class="line"></div>
            {jsonData && jsonData.map((data, idx) => {
                return (
                    <div key={data.id} className='my-4 pop-out' style={gradientStyle(cursorPosition)}>
                        <div className='d-flex flex-row ' key={data.id}>
                            <h4 className="color font-header">{data.title}</h4>
                            <b className="color font-header separate  mx-2">|</b>
                            <h4 className="color font-header">{data.name}</h4>
                            <b className="color font-header separate  mx-4">-</b>
                            <h4 className="color font-header">{data.start + " - " + data.end}</h4>

                        </div>
                        <div>
                            {data?.bullets.map((item, index) => {
                                return (
                                    <>
                                        <li key={index} className="color font-subtext">{item}</li>
                                        {index === 0 && onGoingWorkProjects?.find(p => p.jobId === data.id) &&
                                            onGoingWorkProjects.map((p) => {
                                                return (
                                                    <li className="color font-subtext">{p.title}</li>
                                                )
                                            })
                                        }
                                        {index === 0 && onGoingWorkProjects?.find(p => p.jobId === data.id) &&
                                            onGoingWorkProjects.map((p) => {
                                                return (
                                                    <ul>
                                                        {p.bullets.map((item, index) => {
                                                            return (
                                                                <li key={index} className="color font-subtext">{item}</li>
                                                            )
                                                        })}
                                                    </ul>
                                                )
                                            })
                                        }
                                    </>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div >
    )
}