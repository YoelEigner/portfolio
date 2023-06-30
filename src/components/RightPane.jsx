import { Projects } from './Projects';
import { Experience } from './Experience';

export const RightPane = () => {

    return (
        <div className='main-container-right'>
            <div >
                <Experience />
            </div>
            <div id='projects'>
                <Projects />
            </div>

        </div>
    );
}