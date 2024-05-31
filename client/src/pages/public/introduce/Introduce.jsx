import React from 'react'
import "./introduce.css";

import { SideList } from '../../../components';

const Introduce = () => {
    return (
        <div className='introduce-container'>

            <div>
                <SideList />
            </div>
            
            <div>
                Content of page
            </div>
            
        </div>
    )
}

export default Introduce