import React, {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import './App.css'
import {render} from "react-dom";

function Home() {

    //const navigate = useNavigate()

    const [isEntered, setIsEntered] = useState(false);

    function onEnterClick(event:any) {
        event.preventDefault()

        if(isEntered) {
            goToGreetingAnchor();
        }

        setIsEntered(true);
    }

    function goToGreetingAnchor() {
        const greetingAnchor = document.getElementById('greeting-anchor')
        greetingAnchor?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    }

    function animateEnterHeroLinks() {
        const linkElements = document.getElementsByClassName('hero-link');
        for (var i = 0; i < linkElements.length; i++) {
            console.log("found")

            linkElements[i].animate([
                { offset: 0, transform: "translateX(-50svw)", opacity: 0, pointerEvents:"none" },
                { offset: .99, transform: "translateX(0)", opacity: 1, pointerEvents:"none" },
                { offset: 1, transform: "translateX(0)", opacity: 1, pointerEvents:"auto" }
            ], {
                duration: 300,
                iterations: 1,
                direction: "normal",
                easing: "ease-out",
                delay: 1500 + (200 * i),
                fill: "forwards"
            });

            console.log(linkElements[i].getAnimations())
        }
    }

    function createLinkLabel(url:string, label:string) {
        return (
            <a href={url}>
                <label>{label}</label>
            </a>
        )
    }

    useEffect(() =>{
        const documentHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', documentHeight)
        documentHeight()

        animateEnterHeroLinks()

        const squareFall = document.getElementsByClassName('square-fall-1').item(0)
        squareFall?.addEventListener("animationend", (event) => {
            goToGreetingAnchor();
        });

    }, [])

    return (
        <Fragment>
            <div className={'page-head'}>
                <div style={{position: "absolute", top:0, width:"100%", height: "100svh", zIndex: 0, overflow: "hidden"}}>
                    {/*
                    <canvas id={'head-canvas'} width={"100%"} height={"100%"}
                            style={{display: "block", margin:"auto", width:"100%", height:"100%"}}/>
                    */}
                    <div id={'square-fall'} className={'square-wrapper square-fall-1'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-3'}/>
                    </div>
                    <div id={'square-fall'} className={'square-wrapper square-fall-2'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-5'}/>
                    </div>
                    <div id={'square-fall'} className={'square-wrapper square-fall-3'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-2'}/>
                    </div>
                    <div id={'square-fall'} className={'square-wrapper square-fall-4'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-4'}/>
                    </div>
                    {/*
                    <div id={'square-fall'} className={'square-wrapper square-fall-5'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-1'}/>
                    </div>
                    */}
                    {/*<div className={'gradient-wrapper'}>
                        <div className="gradient"></div>
                    </div>*/}

                </div>
                <div className={'head-header'}>
                    <div className={'header-links'}>
                        <div style={{marginLeft:"3vmin", marginTop: 32}}>
                            <ul>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "About")}
                                    </li>
                                    <div id={'hero-link-square-wrapper'}>
                                        <div id={'hero-link-square'}></div>
                                    </div>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Projects")}
                                    </li>
                                    <div id={'hero-link-square-wrapper'}>
                                        <div id={'hero-link-square'}></div>
                                    </div>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Curriculum Vitae")}
                                    </li>
                                    <div id={'hero-link-square-wrapper'}>
                                        <div id={'hero-link-square'}></div>
                                    </div>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Contact")}
                                    </li>
                                    <div id={'hero-link-square-wrapper'}>
                                        <div id={'hero-link-square'}></div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={'header-label'}>
                        <div className={'label-container transition-fade-in'}
                             style={{animationDuration: "1s", animationDelay: "200ms", paddingBottom:32}}>
                            <label className={'simple-label hero-label-intro'}>Hello, my name is </label>
                            <label className={'simple-label hero-label-name'}>Andrew Stephens</label>
                        </div>
                    </div>
                    <div className={'header-label'}>
                        <div className={'label-container transition-fade-in'}
                             style={{animationDelay: "1s"}}>
                            <label className={'simple-label reduced-font'}>Full-stack Developer</label>
                        </div>
                        <div className={'label-container transition-fade-in'}
                             style={{animationDelay: "1300ms"}}>
                            <label className={'simple-label reduced-font'}>Native Android Engineer</label>
                        </div>
                    </div>
                    <div className={'header-input'}>
                        <input className={'input-button'} type={'button'} value={'Enter'}
                               onClick={onEnterClick}/>
                    </div>

                </div>
                {/*<div className={'page-navigation'}>
                    <ul>
                        <li onClick={() => navigate("/contact")}>Contact Me</li>
                        <li onClick={() => navigate("/curriculum-vitae")}>Curriculum Vitae</li>
                        <li onClick={() => navigate("/curriculum-vitae")}>Contact</li>
                    </ul>
                </div>*/}
            </div>
            <div className={'page-body'} style={{background: "snow"}}>
                <div id={'greeting-anchor'} className={'greeting'}>
                    <label>Hello from label</label>
                    <div className="parent">
                        <div className="my-element-to-clip"></div>
                    </div>
                    <svg width="0" height="0">
                        <defs>
                            <clipPath id="myCurve" clipPathUnits="objectBoundingBox"/>
                        </defs>
                    </svg>
                </div>
                <div className={''}></div>
            </div>
        </Fragment>
    )
}

export default Home;