import jsonData from '../data/resume.json'
import { Experience } from './resume/Experience';
import { PersonalInfo } from './resume/PersonalInfo';
import { Skills } from './resume/Skills';
import { Education } from './resume/Education';
import { Citizenships } from './resume/Citizenships';
import { motion } from 'framer-motion'


export const Resume = () => {

    return (
        <motion.div className="main-container-resume"
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{ y: window.innerHeight, transition: { duration: 1 } }}
        >
            <PersonalInfo />
            <Experience jsonData={jsonData.experience} onGoingWorkProjects={jsonData.onGoingWorkProjects} title={'Relevant Work Experience'} />
            <Experience jsonData={jsonData.sideProjects} title={'Additional Development Experience / Side Projects'} />
            <Skills />
            <Education />
            <Citizenships />
        </motion.div>
    )
}
