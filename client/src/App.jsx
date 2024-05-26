import { useState } from 'react'


import './App.css';

import path from './utils/path';

import { Routes, Route } from "react-router-dom";

//  import page
import { 
    HomePage, 
    PublicLayout,
    Introduce,
    ServicePage,
    ContactPage,
    PriceListPage,
    TechniquePage,
} from "./pages/public";




function App() {
    // const [count, setCount] = useState(0)

    return (
        <>
            {/* 
            <Slider />
            <Footer /> */}

            <Routes>
                {/* route public */}
                <Route path={path.PUBLIC_LAYOUT} element={<PublicLayout />}   >
                    <Route path={path.HOME} element={<HomePage />} />
                    <Route path={path.GIOI_THIEU} element={<Introduce />} />
                    <Route path={path.DICH_VU} element={<ServicePage />} />
                    <Route path={path.KY_THUAT} element={<TechniquePage />} />
                    <Route path={path.BANG_GIA} element={<PriceListPage />} />
                    <Route path={path.THONG_TIN_TU_VAN} element={<ContactPage />} />

                </Route>

            </Routes>
        </>
    )
}

export default App
