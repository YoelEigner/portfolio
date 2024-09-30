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
        <div className='main-container-resume'>
            <motion.div
                className="progress-bar"
                animate={{ scaleX: yProgress }}
                transition={{ duration: 0.2 }}
            />
            <PersonalInfo />
            <Experience jsonData={resume && resume.experience} onGoingWorkProjects={resume && resume.onGoingWorkProjects} title={'Relevant Work Experience'} />
            <Experience jsonData={resume && resume.sideProjects} title={'Additional Development Experience / Side Projects'} />
            <Skills />
            <Education />
            <Citizenships />
        </div>
    )
}
