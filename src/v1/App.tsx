import React, {Fragment} from "react";
import Hero from "./Hero";
import Body from "./Body";
import Header from "./Header";
import "./App.css";

function App() {
    return (
        <Fragment>
            <Header/>
            <Hero/>
            <Body/>
        </Fragment>
    )
}

export default App;