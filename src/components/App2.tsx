import React, {Fragment, useEffect} from "react";
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
import axios from "axios";

function App2() {

    useEffect(() => {
        axios.get("https://api.tritium-studios.com/pilot", {
        }).then(r=>{
            console.log(r)
        }).catch(r=>{
            console.log(r)
        })
    }, [])

    return (
        <Fragment>
            <Header/>
            <Hero/>
            <Body/>
        </Fragment>
    )
}

export default App2;