import React, { useEffect, useState } from 'react';
import { animateText } from '../utils/Util';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux';
export const About = () => {
    const about = useSelector((state) => state.about);
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/home')
    }

    useEffect(() => {
        {
            about !== null && setIsLoading(false)
            about !== null && animateText(setShow, document, about)
        }
    }, [about])

    return (
        <motion.div className='wrapper'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 2 } }}
        >
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
        </motion.div>
    );

}