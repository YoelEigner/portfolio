import { Route, Routes, useLocation } from "react-router-dom"
import { BASE_URL, routes } from "../utils/routes"
import { AnimatePresence } from 'framer-motion'
import { NavigationMenu } from "./Navbar"
import { useMemo } from "react"

export const AnimatedRoutes = () => {
    const location = useLocation()
    const hideNav = useMemo(() => location.pathname === BASE_URL || location.pathname === '/', [location.pathname])
    return (
        <AnimatePresence>
            {!hideNav && <NavigationMenu />}

            {<Routes location={location} key={location.pathname}>
                {routes.map((route, idx) => <Route key={idx} exact element={route.component} path={route.path} />)}
            </Routes>}
        </AnimatePresence>
    )
}