import React, { useEffect, useState } from 'react';
import { animateText } from '../utils/Util';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../utils/routes';
export const About = () => {
    const about = useSelector((state) => state.about);
    const [show, setShow] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/${BASE_URL}`)
    }

    useEffect(() => {
        about !== null && animateText(setShow, document, about)
    }, [about])

    return (
        <div className='wrapper'>
            <div className="bouncing-text "></div>

            <div className="col text-center ">
                {show &&
                    <button
                        className=" glow-on-hover font-subtext "
                        type="button"
                        onClick={handleClick}
                    >EXPLORE MORE</button>
                }
            </div>
        </div>
    );

}