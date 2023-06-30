import { useNavigate } from "react-router-dom";
import { handleDivClick, handleScroll } from "../utils/Util";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import jssonData from '../data/resume.json'
import { useSelector } from "react-redux";

export const LeftPane = () => {
    const navigate = useNavigate()
    const { resume } = useSelector((state) => state);

    const fontSize = '20px'
    return (
        <div className="main-container-left">
            <section className="title">
                <h1 className="color display-1 font-header">{resume.name}</h1>
                <h3 className="color display-5 font-header">{resume.title}</h3>
                <h5 className="color font-subtext" style={{ fontSize: '28px' }}>{resume.company}</h5>
            </section>

            <nav className="custom-list">
                <li className="color" style={{ fontSize: fontSize }} onClick={() => navigate('/portfolio')} type="button" ><a className="font-subtext">About</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => handleScroll('experience')} type="button" ><a href="#experience" className="font-subtext" >Experience</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => handleScroll('projects')} type="button" ><a href="#projects" className="font-subtext">Projects</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => navigate('/resume')} type="button"><a className="font-subtext">Full Resume</a></li>
            </nav>
            <div className="social-icons">
                <AiFillGithub size={35} color="#FFFFFF" onClick={() => handleDivClick(jssonData.github)} className="animate-icons" />
                <AiFillLinkedin size={35} color="#FFFFFF" onClick={() => handleDivClick(jssonData.linkedin)} className="animate-icons" />
            </div>
        </div >

    );
}