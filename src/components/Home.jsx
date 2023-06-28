import { motion } from "framer-motion";
import { LeftPane } from "./LeftPane";
import { RightPane } from "./RightPane";

export const Home = () => {

    return (
        <motion.div className='row home-container'
            initial={{ height: 0 }}
            animate={{ height: '100%' }}
            exit={{y: window.innerHeight, transition: { duration: 1 } }}
        >
            <div className='col left-pane'><LeftPane /></div>
            <div className='col right-pane'><RightPane /></div>
        </motion.div>

    );
}