import React, {Fragment, useEffect, useRef, useState} from "react";
import {ReactComponent as SiteLogo} from './assets/vectors/logo.svg'
import Header from "./Header";

function Hero() {

    useEffect(() =>{
        const documentHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', documentHeight)
        documentHeight()

        animateMiniSquares()
    }, [])

    function animateMiniSquares() {
        const linkElements:HTMLCollectionOf<Element> =
            document.getElementsByClassName('mini-square') as HTMLCollectionOf<Element>;

        for (let i = 0; i < linkElements.length; i++) {
            const element = linkElements[i];
            element.id = "mini-square-" + i;

            animateMiniSquare(element);
        }
    }

    function animateMiniSquare(element:Element) {

        let transX = "calc(-50svw + (" + (Math.random() * 100) + "svw))";
        let transY = Math.random();

        document.getElementById(element.id)?.getAnimations().forEach((item: Animation) => item.cancel())

        document.getElementById(element.id)?.animate([
            {offset: 0, transform: "translate(" + transX + ", 0) rotate(15deg)", opacity: 0},
            {offset: .20, opacity: 0, width: "calc(1svw)"},
            {offset: .25, opacity: .5, width: "calc(1.25svw"},
            {offset: .50, opacity: .8, width: "calc(1.5svw"},
            {
                offset: 1,
                transform: "translate(" + transX + ", calc(-5svh + (-35svh * " + transY + "))) rotate(calc(" + Math.random() + " * 90deg))",
                opacity: 0,
                width: "calc(1svw"
            }
        ], {
            duration: 5000 + (Math.random() * 1000),
            iterations: 1,
            direction: "normal",
            easing: "ease-in-out",
            delay: (Math.random() * 6000),
            fill: "forwards"
        })

        element.getAnimations().map((item) => {
            const eventListener = (event: AnimationPlaybackEvent, item: Animation) => {
                animateMiniSquare(element)
                item.removeEventListener("finish", (event) => eventListener(event, item))
            }
            item.addEventListener("finish", (event) => eventListener(event, item), {once: true})
        })
    }


    function onEnterClick(event:any) {
        event.preventDefault()

        goToAnchor('about-anchor');
    }

    function goToAnchor(anchorElementID:string) {
        const anchor = document.getElementById(anchorElementID)
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    return (
        <Fragment>
            <div className={'page-head'}>
                <div className={'head-header-wrapper'}>
                    <div className={'head-header'}>
                        <div className={'hero-label'}>
                            <div className={'label-container hero-label-wrapper'}
                                 style={{paddingBottom:"1.6svh"}}>
                                <div style={{display:"flex"}}>
                                    <label className={'simple-label hero-label-intro'}>
                                        Hello, my name is
                                    </label>
                                </div>
                                <div>
                                    <label className={'simple-label hero-label-name'}>
                                        Andrew Stephens
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={'hero-label'}>
                            <div className={'label-container transition-fade-in'}
                                 style={{animationDelay: "1s"}}>
                                <label id={'label-description'}  className={'simple-label reduced-font'}>
                                    Full-stack Developer
                                </label>
                            </div>
                            <div id={'label-container-last'}
                                 className={'label-container transition-fade-in'}
                                 style={{animationDelay: "1300ms"}}>
                                <label id={'label-description'} className={'simple-label reduced-font'}>
                                    Native Android Engineer
                                </label>
                            </div>
                        </div>
                        {/*<div className={'header-input'}>
                            <input className={'input-button'} type={'button'} value={'DIVE IN'} tabIndex={0}
                                   onClick={onEnterClick}/>
                        </div>*/}
                    </div>
                    <div className={'godrays'}>
                        <div className={'godray-beam-wrapper'}>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                            <div className={'godray-beam'}/>
                        </div>
                    </div>
                </div>
                <div id={'page-body-multisquares'}>
                    <div className={'mini-square-wrapper'}>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'med-square square-vite'}/>
                        <div className={'med-square square-nodejs'}/>
                        <div className={'med-square square-php'}/>
                        <div className={'med-square square-typescript'}/>
                        <div className={'med-square square-react'}/>
                        <div className={'med-square square-android'}/>
                        <div className={'med-square square-java'}/>
                        <div className={'med-square square-mysql'}/>
                        <div className={'med-square square-aws'}/>
                        <div className={'med-square square-git'}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Hero;