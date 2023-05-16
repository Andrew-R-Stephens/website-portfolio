import About from "./About";
import CVitae from "./CVitae";
import React, {Fragment, useEffect} from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function Body() {

    useEffect(() => {
        const heroLinkMasterHeight = getElementTotalHeightByID('hero-link-master')
        console.log(heroLinkMasterHeight)
        const scrollElements = document.getElementsByClassName('scroll-anchor');
        for(let e of scrollElements) {
            (e as any).style.scrollMarginTop = "calc(" + heroLinkMasterHeight + "px + 3svh)";
        }
    }, [])


    function getElementTotalHeightByID(id:string):number {
        const element = document.getElementById(id);
        if(!element) {
            return 0;
        }

        const list = [
            'margin-top',
            'margin-bottom',
            'border-top',
            'border-bottom',
            'padding-top',
            'padding-bottom',
            'height'
        ]

        const style = window.getComputedStyle(element)
        console.log("returning height")
        return (list
            .map(k => parseInt(style.getPropertyValue(k), 10))
            .reduce((prev, cur) => prev + cur))
    }

    return (
        <div className={'all-body'}>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Body;

