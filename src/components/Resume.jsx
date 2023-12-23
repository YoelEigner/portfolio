import { Experience } from './resume/Experience';
import { PersonalInfo } from './resume/PersonalInfo';
import { Skills } from './resume/Skills';
import { Education } from './resume/Education';
import { Citizenships } from './resume/Citizenships';
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


export const Resume = () => {
    const { scrollYProgress } = useScroll();
    const [yProgress, setYProgress] = useState(0);
    const resume = useSelector((state) => state.resume);
    useEffect(() => {
        return scrollYProgress.onChange(p => setYProgress(p));
    }, [scrollYProgress]);
    
    return (
        <motion.div className="main-container-resume"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 1 } }}
        >
            <motion.div
                className="progress-bar"
                animate={{ scaleX: yProgress }}
                transition={{ duration: 0.2 }}
            />
            <PersonalInfo />
            <Experience jsonData={resume && resume.experience} onGoingWorkProjects={resume && resume.experience} title={'Relevant Work Experience'} />
            <Experience jsonData={resume && resume.sideProjects} title={'Additional Development Experience / Side Projects'} />
            <Skills />
            <Education />
            <Citizenships />
        </motion.div>
    )
}
