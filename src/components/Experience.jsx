import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

export const Experience = () => {
    const resume = useSelector((state) => state.resume);

    return (<div>
        <div className='experience-header'>
            <h1 className="color main-header">{'Experience'}</h1>
            <div className="centered-line"></div>
        </div>
        {resume && resume?.experience?.map((data) => {
            return (
                <div className='styled-container' key={data.id}>
                    <Card className="card-container">
                        <div className="col">
                            <div className="row g-0">
                                <div className="col-md-2 date-col font-subtext">
                                    {data.start} - {data.end}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body ">
                                        <h5 className="card-title font-header">{data.title}</h5>
                                        <h3 className='font-subtext'>{data.name}</h3>
                                        <p className="card-text font-subtext">
                                            {data.description}
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
                            </div>
                        </div>
                    </Card>
                </div>
            );
        })}

    </div>)
}