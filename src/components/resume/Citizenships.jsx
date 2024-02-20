import { useSelector } from 'react-redux';

export const Citizenships = () => {
    const resume = useSelector((state) => state.resume);

    return (
        <div>
            <h3 className="color font-subtext" id='experience'>Citizenships</h3>
            <div className="line"></div>
            {resume && resume?.citizenships?.map((item, idx) => {
                return (
                    <ul key={idx}>
                        <li className="color font-subtext">{item}</li>
                    </ul>
                )
            })}
        </div>
    )
}