import Card from 'react-bootstrap/Card';
import jsonData from '../data/projects.json'
import { handleDivClick } from '../utils/Util';
import { FiArrowUpRight } from "react-icons/fi";


export const Projects = () => {
    return (
        <div className='project-container'>
            {jsonData.map((data) => {
                return (
                    <div id='experience' key={data.id} onClick={() => handleDivClick(data.link)}>
                        <Card style={{ maxWidth: '40rem'}} className="card-container">
                            <div className="col">
                                <div className="row g-0">
                                    <div className="col-md-8">
                                        <div className="card-body ">
                                            <div className='data-name'>
                                                <h6>{data.name}</h6>
                                                <div className='arrow'><FiArrowUpRight /></div>
                                            </div>
                                            <p className="card-text">
                                                {data.description}
                                            </p>
                                            <p className="card-text">
                                                {data.live && <a className="text-muted" onClick={(e) => { e.stopPropagation(); handleDivClick(data.live); }}>{'Live site'}</a>}{' '}
                                                {data.api && <a className="text-muted" onClick={(e) => { e.stopPropagation(); handleDivClick(data.api); }}>{'API'}</a>}
                                            </p>
                                            <p className="card-text">
                                                <small className="text-muted tech-container">
                                                    {data?.tech?.map((item, index) => (
                                                        <div className="data-tech" key={index}>{item} </div>
                                                    ))}
                                                </small>
                                            </p>
                                        </div>
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