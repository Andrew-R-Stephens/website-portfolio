import React, {Fragment} from "react";
import Hero from "./Hero";
import Body from "./Body";
import Header from "./Header";
import "./App2.css";
import './../assets/fonts/Esprit/Esprit.ttf'
import './../assets/fonts/Oldtimer/Oldtimer.ttf'
import './../assets/fonts/TT Severs/TT-Severs-Regular.otf'
import './../assets/fonts/TT Severs/TT-Severs-Bold.otf'
import './../assets/fonts/TT Severs/TT-Severs-Medium.otf'
import Footer from "./Footer";

function App2() {

    return (
        <Fragment>
            <Header/>
            <Hero/>
            <Body/>
        </Fragment>
    )
}

export default App2;