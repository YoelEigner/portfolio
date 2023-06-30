import React, { useEffect, useState } from 'react';
import { animateText } from '../utils/Util';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { GetAboutData } from '../DAL/GetData';
export const About = () => {
    const [show, setShow] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/home')
    }
    useEffect(() => {
        const getData = async () => {
            const json = await GetAboutData()
            setData(json)
            setIsLoading(false)
        }
        setIsLoading(true)
        getData()
    }, []);
    useEffect(() => {
        { data !== null && animateText(setShow, document, data) }
    }, [data])

    return (
        <motion.div className='wrapper'
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            exit={{ x: window.innerWidth, transition: { duration: 1 } }}
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