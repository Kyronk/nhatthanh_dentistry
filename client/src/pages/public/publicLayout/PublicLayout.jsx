import React from 'react'
import { Outlet, Navigate } from "react-router-dom";

import { Navbar, Footer } from '../../../components';

const PublicLayout = () => {
    return (
        <>
            {/* navbar */}
            <Navbar />
            <>
                <h3>outlet content</h3>
                <Outlet />
            </>

            <Footer/>
        </>
    )
}

export default PublicLayout;