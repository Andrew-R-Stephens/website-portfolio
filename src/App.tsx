import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import CVitae from "./CVitae";

function App() {
    return (
        <Fragment>
            <Home/>
        </Fragment>
    )
}

export default App;