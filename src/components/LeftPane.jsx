import { useNavigate } from "react-router-dom";
import { handleDivClick, handleScroll } from "../utils/Util";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const LeftPane = () => {
    const navigate = useNavigate()

    return (
        <div className="main-container-left">
            <section className="title">
                <h1>Yoel Eigner</h1>
                <h3>Full stack engineer</h3>
                <h5>Lockheed Martin</h5>
            </section>
            <nav className="custom-list">
                <li onClick={() => navigate('/')} type="button"><a href="#about" >About</a></li>
                <li onClick={() => handleScroll('experience')} type="button" href="#experience"><a  >Experience</a></li>
                <li onClick={() => handleScroll('projects')} type="button" href="#projects"><a href="#projects">Projects</a></li>
                <li onClick={() => handleDivClick('https://github.com/YoelEigner/resume')} type="button" href="#cv"><a>Full Resume</a></li>
            </nav>
            <footer className="footer">
                <AiFillGithub size={35} color="#FFFFFF" onClick={() => handleDivClick('https://github.com/YoelEigner')} className="animate-icons"/>
                <AiFillLinkedin size={35} color="#FFFFFF"  onClick={() => handleDivClick('https://www.linkedin.com/in/yoel-eigner/')} className="animate-icons"/>
            </footer>
        </div >

    );
}