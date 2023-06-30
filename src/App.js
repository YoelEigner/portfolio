import './App.css';
import './Custom.css';
import './Button.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { gradientStyle } from './utils/Util';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { DeleteAll, SaveAboutData, SaveProjectseData, SaveResumeData } from './utils/ReduxMiddleware';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event) => { setCursorPosition({ x: event.clientX + window.scrollX, y: event.clientY + window.scrollY, }); };
    document.addEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const getData = async () => {
      await dispatch(SaveAboutData())
      await dispatch(SaveResumeData())
      await dispatch(SaveProjectseData())
    }
    getData()
  }, []);

  return (
    <>
      <Router>
        <div className="App" style={gradientStyle(cursorPosition)}>
          <AnimatedRoutes />
        </div>
      </Router>
    </>

  );
}

export default App;
