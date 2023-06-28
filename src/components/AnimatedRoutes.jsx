import { Route, Routes, useLocation } from "react-router-dom"
import { routes } from "../utils/routes"
import { AnimatePresence } from 'framer-motion'

export const AnimatedRoutes = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                {routes.map(route => <Route key={route.path} exact element={route.component} path={route.path} />)}
            </Routes>
        </AnimatePresence>
    )
}