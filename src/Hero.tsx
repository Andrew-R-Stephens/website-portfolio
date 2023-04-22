import React, {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import './App.css'
import {render} from "react-dom";
import {ReactComponent as SiteLogo} from './assets/vectors/AndrewStephensLogo.svg'

function Hero() {

    //const navigate = useNavigate()

    const [isEntered, setIsEntered] = useState(false);

    function onEnterClick(event:any) {
        event.preventDefault()

        if(isEntered) {
            goToAnchor('about-anchor');
        }

        setIsEntered(true);
    }

    function goToAnchor(anchorElementID:string) {
        const anchor = document.getElementById(anchorElementID)
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function animateEnterHeroLinks() {
        const linkElements = document.getElementsByClassName('hero-link');

        const element = document.getElementById('label-container-last');
        (element as Element).addEventListener("animationend", (event) => {
            for (let i = 0; i < linkElements.length; i++) {
                linkElements[i].animate([
                    { offset: 0, transform: "translateX(-50svw)", opacity: 0, pointerEvents:"none" },
                    { offset: .99, transform: "translateX(0)", opacity: 1, pointerEvents:"none" },
                    { offset: 1, transform: "translateX(0)", opacity: 1, pointerEvents:"auto" }
                ], {
                    duration: 300,
                    iterations: 1,
                    direction: "normal",
                    easing: "ease-out",
                    delay: 500 + (-200 * i),
                    fill: "forwards"
                });
            }
        });
    }

    function createLinkLabel(url: string, label: string) {
        return (
            <Fragment>
                <a id={'hero-link-href'} href={url}>
                    <label>{label}</label>
                </a>
                <div id={'hero-link-square-wrapper'}>
                    <div id={'hero-link-square-underline'}/>
                    <div id={'hero-link-square'}/>
                </div>
            </Fragment>
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
            goToAnchor('about-anchor');
        });

    }, [])

    return (
        <Fragment>
            <div className={'page-head'}>
                <div style={{position: "absolute", top:0, width:"100%", height: "100svh",
                    zIndex: 0, overflow: "hidden"}}>
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
                    {/*<div id={'square-fall'} className={'square-wrapper square-fall-3'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-2'}/>
                    </div>*/}
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
                        <div style={{marginLeft:"3vmin", marginTop: 32, marginRight: "3vmin"}}>
                            <ul className={'hero-link-wrapper-parent'}>
                                <div className={'site-logo-wrapper'}>
                                    <SiteLogo className={'site-logo'}/>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "About")}
                                    </li>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Projects")}
                                    </li>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Curriculum Vitae")}
                                    </li>
                                </div>
                                <div className={'hero-link-wrapper'}>
                                    <li className={'hero-link'}>
                                        {createLinkLabel("./", "Contact")}
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className={'hero-label'}>
                        <div className={'label-container hero-label-wrapper'}
                             style={{paddingBottom:32}}>
                            <div><label className={'simple-label hero-label-intro'}>Hello, my name is&nbsp;</label></div>
                            <div><label className={'simple-label hero-label-name'}>Andrew Stephens</label></div>
                        </div>
                    </div>
                    <div className={'hero-label'}>
                        <div className={'label-container transition-fade-in'}
                             style={{animationDelay: "1s"}}>
                            <label id={'label-description'}  className={'simple-label reduced-font'}>Full-stack Developer</label>
                        </div>
                        <div id={'label-container-last'}
                             className={'label-container transition-fade-in'}
                             style={{animationDelay: "1300ms"}}>
                            <label id={'label-description'} className={'simple-label reduced-font'}>Native Android Engineer
                            </label>
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
        </Fragment>
    )
}

export default Hero;