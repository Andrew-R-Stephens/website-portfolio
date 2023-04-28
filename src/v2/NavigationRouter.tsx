import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Hero from "./Hero";
import Contact from "./Contact";
import CVitae from "./CVitae";

function NavigationRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Hero/>}></Route>
                <Route index path="/contact" element={<Contact/>}></Route>
                <Route index path="/curriculum-vitae" element={<CVitae/>}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default NavigationRouter