import React, {Suspense} from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";
import CircularIndeterminate from "../Loading";

const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<CircularIndeterminate/>}>
                <Outlet/>
            </Suspense>
        </>
    );
};

export default Layout;