import { About } from "../components/About";
import { Home } from "../components/Home";
import { Resume } from "../components/Resume";

export const routes = [
    {
        path: '/portfolio/',
        component: <About />,
    },
    {
        path: '/',
        component: <About />,
    },
    {
        path: '/home',
        component: <Home />,
    },
    {
        path: '/portfolio/home',
        component: <Home />,
    },
    {
        path: '/resume',
        component: <Resume />,
    },
    {
        path: '/portfolio/resume',
        component: <Resume />,
    }
];
