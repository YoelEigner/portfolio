import Card from 'react-bootstrap/Card';
import jsonData from '../data/data.json'
import { About } from './About';
import { Projects } from './Projects';
import { Experience } from './Experience';


export const RightPane = () => {
    return (
        <div className='main-container-right'>
            <div id='about'>
                <About />
            </div>
            <div id='experience'>
                <Experience />
            </div>
            <div id='projects'>
                <Projects />
            </div>

        </div>
    );
}