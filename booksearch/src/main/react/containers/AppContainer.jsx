import Nav from "../components/Nav.jsx";
import React from "react";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const AppContainer = () => {
    const location = useLocation();
    return (
        <>
            <Nav locationUrl={location.pathname} />
            <Outlet/>

        </>
        
    )
}

export default AppContainer;