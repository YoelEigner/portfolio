import { Projects } from './Projects';
import { Experience } from './Experience';

export const RightPane = () => {

    return (
        <div className='main-container-right'>
            <div id='experience'>
                <Experience />
            </div>
            <div id='projects'>
                <Projects />
            </div>

        </div>
    );
}