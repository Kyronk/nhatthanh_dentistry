import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

import { Navbar_1, Footer } from '../../../components';

const PublicLayout = () => {
    return (
        <>
            {/* navbar */}
            <Navbar_1 />
            <>
                <h3>outlet content</h3>
                <Outlet />
            </>

            {/* <Footer/> */}
        </>
    )
}

export default PublicLayout;