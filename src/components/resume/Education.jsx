import { handleDivClick } from "../../utils/Util"
import jsonData from '../../data/resume.json'


export const Education = () => {
    const fontSize = '20px'

    return (
        <div>
            <h3 className="color font-subtext" id='experience'>Education</h3>
            <div class="line"></div>
            <nav className="custom-list">
                <li key={1} className="color" style={{ fontSize: fontSize }} type="button" onClick={() => handleDivClick(jsonData.emailLink)}>
                    <a href="#about" className="font-subtext">{jsonData.email}</a>
                </li>
                <li key={2} className="color" style={{ fontSize: fontSize }} onClick={() => handleDivClick(jsonData.github)} type="button" >
                    <a href="#about" className="font-subtext">{'GitHub'}</a>
                </li>
                <li key={3} className="color" style={{ fontSize: fontSize }} onClick={() => handleDivClick(jsonData.linkedin)} type="button" >
                    <a href="#about" className="font-subtext">{'LinkedIn'}</a>
                </li>
            </nav>
        </div>
    )
}