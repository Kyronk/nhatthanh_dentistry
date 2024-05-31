import React from 'react'
import "./sideList.css";
import path from "../../../utils/path";

import { Link } from "react-router-dom";



const SideList = () => {
    return (
        <div className='sideList-container'>
            <h2>Goi thieu</h2>
            <ul>
                <li>
                    <Link>Link 1 content</Link>
                </li>
                <li>list 1</li>
                <li>list 1</li>
                <li>list 1</li>
            </ul>

            <h2>Dich vu</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <h2>Ky thuat</h2>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>


        </div>
    )
}

export default SideList