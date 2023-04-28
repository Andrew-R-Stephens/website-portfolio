import React, {Fragment, useEffect, useRef, useState} from "react";
import {ReactComponent as SiteLogo} from './assets/vectors/logo.svg'
import Header from "./Header";

function Hero() {

    //const navigate = useNavigate()

    const [isEntered, setIsEntered] = useState(false);

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

        const smallMedia = window.matchMedia('only screen and (max-width: 600px)').matches;
        if(smallMedia) {
            initBurger();
        }
        else {
            const element = document.getElementById('label-container-last');
            (element as Element).addEventListener("animationend", (event) => {
                for (let i = 0; i < linkElements.length; i++) {
                    linkElements[i].animate([
                        {offset: 0, transform: "translateX(-50svw)", opacity: 0, pointerEvents: "none"},
                        {offset: .99, transform: "translateX(0)", opacity: 1, pointerEvents: "none"},
                        {offset: 1, transform: "translateX(0)", opacity: 1, pointerEvents: "auto"}
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
    }

    function initBurger() {

        const linkElements = document.getElementsByClassName('hero-link');
        for (let i = 0; i < linkElements.length; i++) {
            linkElements[i].setAttribute("role", "shown")
        }

        const siteLogoElement = document.getElementById('site-logo');
        siteLogoElement?.setAttribute("role", "active");
        siteLogoElement?.addEventListener("click", (event)=> {
            let logoState = siteLogoElement.getAttribute("role");

            const siteInnerLinkWrapper = document.getElementsByClassName('hero-link-item');

            logoState === "active"?
                siteLogoElement.setAttribute("role", "inactive") :
                siteLogoElement.setAttribute("role", "active");
            for(let inner of siteInnerLinkWrapper) {
                inner.setAttribute("role", logoState === "active" ? "hidden": "shown");
            }

            for (let i = 0; i < linkElements.length; i++) {
                linkElements[i].setAttribute("role", logoState === "active"?"hidden":"shown")
            }


        })

    }

    return (
        <Fragment>
            <div className={'page-head'}>
                <div className={'hero-background'}>
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
                    <div id={'square-fall'} className={'square-wrapper square-fall-4'}
                         role={isEntered? 'active-square-fall' : ''}>
                        <div className={'square-wrapper'}
                             id={'square-4'}/>
                    </div>
                </div>
                <div className={'head-header-wrapper'}>
                    <div className={'head-header'}>
                        <div className={'hero-label'}>
                            <div className={'label-container hero-label-wrapper'}
                                 style={{paddingBottom:"1.6svh"}}>
                                <div style={{}}>
                                    <label className={'simple-label hero-label-intro'}>
                                        Hello, my name is&nbsp;
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
                        <div className={'header-input'}>
                            <input className={'input-button'} type={'button'} value={'Enter'} tabIndex={0}
                                   onClick={onEnterClick}/>
                        </div>

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