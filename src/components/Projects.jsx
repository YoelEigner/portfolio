import Card from 'react-bootstrap/Card';
import { handleDivClick } from '../utils/Util';
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector } from 'react-redux';


export const Projects = () => {
    const projects = useSelector((state) => state.projects);

    return (
        <div>
            <div className='experience-header'>
                <h1 className="color main-header">{'Projects'}</h1>
                <div className="centered-line" ></div>
            </div>
            {projects && projects.map((data) => {
                return (
                    <div id='experience' className='styled-container' key={data.id}>
                        <Card className="card-container" onClick={() => handleDivClick(data.link)}>
                            <div className="col">
                                <div className="row g-0 mx-3 my-3">
                                    <div className='data-name'>
                                        <h6 className='card-title font-header'>{data.name}</h6>
                                        <div className='arrow'><FiArrowUpRight /></div>
                                    </div>
                                    <p className="card-text font-subtext">
                                        {data.description}
                                    </p>
                                    <p className="card-text ">
                                        {data?.external?.map((item, index) => {
                                            return (
                                                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                                                <a key={index} className="text-muted font-subtext site-link" onClick={(e) => { e.stopPropagation(); handleDivClick(item.link); }}>{item.title}</a>
                                            )
                                        })}
                                    </p>
                                    <div className="card-text">
                                        <small className="text-muted tech-container">
                                            {data?.tech?.map((item, index) => (
                                                <div className="data-tech font-subtext" key={index}>{item} </div>
                                            ))}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                );
            })}
        </div>
    )
}