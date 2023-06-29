import { useNavigate } from "react-router-dom";
import { handleDivClick, handleScroll } from "../utils/Util";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const LeftPane = () => {
    const navigate = useNavigate()
    const fontSize = '20px'
    return (
        <div className="main-container-left">
            <section className="title">
                <h1 className="color display-1 font-header">Yoel Eigner</h1>
                <h3 className="color display-5 font-header">Full stack engineer</h3>
                <h5 className="color font-subtext" style={{ fontSize: '28px' }}>Lockheed Martin</h5>
            </section>
            <nav className="custom-list">
                <li className="color" style={{ fontSize: fontSize }} onClick={() => navigate('/')} type="button" ><a href="#about" className="font-subtext">About</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => handleScroll('experience')} type="button" href="#experience"><a className="font-subtext" >Experience</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => handleScroll('projects')} type="button" href="#projects"><a href="#projects" className="font-subtext">Projects</a></li>
                <li className="color" style={{ fontSize: fontSize }} onClick={() => navigate('/resume')} type="button" href="#cv"><a className="font-subtext">Full Resume</a></li>
                {/* <li className="color" style={{ fontSize: fontSize }} onClick={() => handleDivClick('https://github.com/YoelEigner/resume')} type="button" href="#cv"><a className="font-subtext">Full Resume</a></li> */}
            </nav>
            <footer className="footer">
                <AiFillGithub size={35} color="#FFFFFF" onClick={() => handleDivClick('https://github.com/YoelEigner')} className="animate-icons" />
                <AiFillLinkedin size={35} color="#FFFFFF" onClick={() => handleDivClick('https://www.linkedin.com/in/yoel-eigner/')} className="animate-icons" />
            </footer>
        </div >

    );
}