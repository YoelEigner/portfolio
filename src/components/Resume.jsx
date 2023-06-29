import { useEffect, useState } from 'react';
import jsonData from '../data/resume.json'
import { gradientStyle, handleDivClick } from '../utils/Util'
import { Experience } from './resume/Experience';
import { PersonalInfo } from './resume/PersonalInfo';
import { PersonalLinks } from './resume/PersonalLinks';
import { Skills } from './resume/Skills';
import { Education } from './resume/Education';


export const Resume = () => {

    return (
        <div className="main-container-resume" >
            <PersonalInfo />
            <PersonalLinks />
            <Experience jsonData={jsonData.experience} onGoingWorkProjects={jsonData.onGoingWorkProjects} title={'Relevant Work Experience'} />
            <Experience jsonData={jsonData.sideProjects} title={'Additional Development Experience / Side Projects'} />
            <Skills />
            <Education />
        </div>
    )
}