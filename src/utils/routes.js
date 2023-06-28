import { About } from "../components/About";
import { Home } from "../components/Home";

export const routes = [
    {
        path: '/',
        component: <About />,
    },
    {
        path: '/home',
        component: <Home />,
    },
];
