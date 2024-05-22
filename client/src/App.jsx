import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';


function App() {
    const [count, setCount] = useState(0)

    return (
        <div>

            <Navbar />
            <Slider />
            <Footer />
                {/* route public */}
            {/* <Routes>

                
                <Route path='/'>

                </Route>

            </Routes> */}
        </div>
    )
}

export default App
