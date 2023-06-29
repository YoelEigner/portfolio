import jsonData from '../../data/resume.json'
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { handleDivClick, } from '../../utils/Util';

export const PersonalInfo = () => {
    return (
        <div>
            <h1 className="color display-1 font-header">{jsonData.name}</h1>
            <h1 className="color font-header col" >{jsonData.title}</h1>
            <AiFillGithub size={35} color="#FFFFFF" onClick={() => handleDivClick(jsonData.github)} className="animate-icons" style={{ display: 'inline-block', marginRight: '10px' }} />
            <AiFillLinkedin size={35} color="#FFFFFF" onClick={() => handleDivClick(jsonData.linkedin)} className="animate-icons" style={{ display: 'inline-block', marginRight: '10px' }} />
            <AiOutlineMail size={35} color="#FFFFFF" onClick={() => handleDivClick(jsonData.emailLink)} className="animate-icons" style={{ display: 'inline-block' }} />



            <div className='personal-info-container'>
                <div className="color font-subtext">{jsonData.about1}</div>

                <div className="color font-subtext">{jsonData.about2}</div>
                <div className="color font-subtext">{jsonData.about3}</div>
            </div>
        </div>
    )
}