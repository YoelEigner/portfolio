import { useEffect, useState } from "react";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";
import { gradientStyle } from "../utils/Util";


export const Home = () => {

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (event) => { setCursorPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY, }); };
        document.addEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className='row home-container' style={gradientStyle(cursorPosition)}>
            <div className='col left-pane'><LeftPane /></div>
            <div className='col right-pane'><RightPane /></div>
        </div>

    );
}