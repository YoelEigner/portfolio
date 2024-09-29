import { About } from "../components/About";
import { Home } from "../components/Home";
import { Globe } from "../components/Globe/Globe";
import { Resume } from "../components/Resume";
import { Experience } from "../components/Experience";
import { Projects } from "../components/Projects";

export const BASE_URL = 'portfolio';
export const routes = [
    {
        path: `/${BASE_URL}`,
        component: <Globe />,
    },
    {
        path: '*',
        component: <Globe />,
    },
    {
        path: `/${BASE_URL}/home`,
        component: <Home />,
    },
    {
        path: `/${BASE_URL}/resume`,
        component: <Resume />,
    },
    {
        path: `/${BASE_URL}/experience`,
        component: <Experience />,
    },
    {
        path: `/${BASE_URL}/projects`,
        component: <Projects />,
    },
    {
        path: `/${BASE_URL}/about`,
        component: <About />,
    },
];
