import Card from 'react-bootstrap/Card';
import jsonData from '../data/data.json'

export const Experience = () => {
    return (<div>
        {jsonData.map((data) => {
            return (
                <div key={data.id}>
                    <Card style={{ maxWidth: '40rem' }} className="card-container">
                        <div className="col">
                            <div className="row g-0">
                                <div className="col-md-2 date-col">
                                    {data.start} - {data.end}
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <h6>{data.name}</h6>
                                        <p className="card-text">
                                            {data.description}
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

    </div>)
}