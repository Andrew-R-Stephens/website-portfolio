import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import CVitae from "./CVitae";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home/>}></Route>
                <Route index path="/contact" element={<Contact/>}></Route>
                <Route index path="/curriculum-vitae" element={<CVitae/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;