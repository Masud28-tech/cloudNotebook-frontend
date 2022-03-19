import React from 'react'
import { Routes, Route } from "react-router-dom";
import About from '../pages/aboutPage/About';
import HomePage from '../pages/homePage/HomePage';

const AllRoutes = () => {
    return (
        <div className='container'>
                <Routes>
                    <Route exact path="/"
                        element={<HomePage />} />

                    <Route exact path="/about"
                        element={<About />} />
                </Routes>
        </div>
    )
}

export default AllRoutes;