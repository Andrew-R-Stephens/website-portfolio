import React, {Fragment, useEffect} from "react";
import "./App.css";
import './../assets/fonts/Esprit/Esprit.ttf'
import './../assets/fonts/Oldtimer/Oldtimer.ttf'
import './../assets/fonts/TT Severs/TT-Severs-Regular.otf'
import './../assets/fonts/TT Severs/TT-Severs-Bold.otf'
import './../assets/fonts/TT Severs/TT-Severs-Medium.otf'
import axios from "axios";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Body from "./body/Body";
import "./Fonts.css"

function App() {

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

export default App;