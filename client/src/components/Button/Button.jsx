import React from 'react'

import "./button.css";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";



const Button = ({
    children,
    name,
    handleOnClick, 
    style, 
    iconsBefore, 
    iconsAfter, 
    hover,
    fw, 
    type = 'button',
    disabled
}) => {
    return (
        <button 
            className='btn-main'
            >
            {children}
        </button>
    )
}

export default Button