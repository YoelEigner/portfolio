import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { handleDivClick, } from '../../utils/Util';
import { useSelector } from 'react-redux';

export const PersonalInfo = () => {
    const resume = useSelector((state) => state.resume);

    return (
        <>
            {resume &&
                <div>
                    <h1 className="color display-1 font-header">{resume.name}</h1>
                    <h1 className="color font-header col" >{resume.title}</h1>
                    <AiFillGithub size={35} color="#FFFFFF" onClick={() => handleDivClick(resume.github)} className="animate-icons" style={{ display: 'inline-block', marginRight: '10px' }} />
                    <AiFillLinkedin size={35} color="#FFFFFF" onClick={() => handleDivClick(resume.linkedin)} className="animate-icons" style={{ display: 'inline-block', marginRight: '10px' }} />
                    <AiOutlineMail size={35} color="#FFFFFF" onClick={() => handleDivClick(resume.emailLink)} className="animate-icons" style={{ display: 'inline-block' }} />



                    <div className='personal-info-container'>
                        <div className="color font-subtext">{resume.about1}</div>

                        <div className="color font-subtext">{resume.about2}</div>
                        <div className="color font-subtext">{resume.about3}</div>
                    </div>
                </div>
            }
        </>
    )
}