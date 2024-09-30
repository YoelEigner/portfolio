import './Fallback.c    ss';

export const Fallback = ({ children }) => {
    return (
        <div className="rocket-loader">
            <div className="rocket">
                <div className="rocket-extras"></div>
                <div className="jet"><span></span></div>
            </div>
        </div>
    )
}