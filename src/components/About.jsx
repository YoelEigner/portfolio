import React, { useEffect, useState } from 'react';
import { animateText } from '../utils/Util';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
export const About = () => {
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
    }
    useEffect(() => {
        animateText(setShow, document)
    }, []);

    return (
        <motion.div className='wrapper'
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            exit={{ x: window.innerWidth, transition: { duration: 1 } }}
        >
            <div className="bouncing-text"></div>

            <div class="col text-center ">
                {show &&
                    <button
                        className=" glow-on-hover"
                        type="button"
                        onClick={handleClick}
                    >EXPLORE MORE</button>
                }
            </div>
        </motion.div>
    );

}