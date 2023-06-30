import Card from 'react-bootstrap/Card';
import { useSelector } from 'react-redux';

export const Experience = () => {
    const resume = useSelector((state) => state.resume);

    return (<div>
        {resume && resume?.experience?.map((data) => {
            return (
                <div key={data.id}>
                    <Card className="card-container">
                        <div className="col">
                            <div className="row g-0">
                                <div className="col-md-2 date-col font-subtext">
                                    {data.start} - {data.end}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body ">
                                        <h5 className="card-title font-header">{data.title}</h5>
                                        <h6 className='font-subtext'>{data.name}</h6>
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