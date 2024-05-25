import React from 'react'
import { Outlet, Navigate } from "react-router-dom";


const publicLayout = () => {
    return (
        <div>
            {/* navbar */}

            <>
                <h3>outlet content</h3>
            </>

            <h3>Footer</h3>
        </div>
    )
}

export default publicLayout;