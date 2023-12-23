import { About } from "../components/About";
import { Home } from "../components/Home";
import { Resume } from "../components/Resume";

export const BASE_URL = 'portfolio';
export const routes = [
    {
        path: `/${BASE_URL}`,
        component: <About />,
    },
    {
        path: '*',
        component: <About />,
    },
    {
        path: '/',
        component: <About />,
    },
    {
        path: `/${BASE_URL}/home`,
        component: <Home />,
    },
    {
        path: `/${BASE_URL}/resume`,
        component: <Resume />,
    }
];
