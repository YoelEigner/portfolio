import React from 'react';
import { useSelector } from 'react-redux';

export const About = () => {
    const about = useSelector((state) => state.about);

    return (
        <div className='wrapper'>
            <div className="about-text">
                {about.about.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );

}