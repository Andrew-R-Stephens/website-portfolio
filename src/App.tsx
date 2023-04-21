import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from "./Hero";
import Contact from "./Contact";
import CVitae from "./CVitae";
import './App.css'
import About from "./About";
import Body from "./Body";

function App() {
    return (
        <Fragment>
            <Hero/>
            <Body/>
        </Fragment>
    )
}

export default App;