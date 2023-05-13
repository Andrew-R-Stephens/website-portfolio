import React, {Fragment, useEffect, useRef, useState} from "react";
import {ReactComponent as SiteLogo} from './../assets/vectors/logo.svg'

function Header() {

    const [resize, forceResize] = useState(0);

    useEffect(() =>{
        window.addEventListener('orientationchange', (event) => {
            const val = (resize + 1) % 1;
            forceResize(val)
            console.log(resize);

            const smallMedia = window.matchMedia('only screen and (max-width: 600px)').matches;
            if(smallMedia) {
                initBurger();
            }
        })

        onCeilingUnfocused();
        initHero();

    }, [])

    function initHero() {
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
            linkElements[i].setAttribute("role", "hidden")
        }

        const siteInnerLinkWrapper = document.getElementsByClassName('hero-link-item');
        for (let i = 0; i < siteInnerLinkWrapper.length; i++) {
            siteInnerLinkWrapper[i].setAttribute("role", "hidden")
        }

        const siteLogoElement = document.getElementById('site-logo');
        siteLogoElement?.setAttribute("role", "inactive");
        siteLogoElement?.addEventListener("click", (event)=> {
            const logoState = siteLogoElement.getAttribute("role");
            const siteInnerLinkWrapper = document.getElementsByClassName('hero-link-item');
            const masterLink = document.getElementById('hero-link-master')

            if(logoState === "active") {

                siteLogoElement.setAttribute("role", "inactive");

                if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                    masterLink?.setAttribute("role", "inactive");
                } else {
                    masterLink?.removeAttribute("role");
                }

                for (let i = 0; i < siteInnerLinkWrapper.length; i++) {
                    siteInnerLinkWrapper[i].setAttribute("role", "hidden")
                }

            } else {
                siteLogoElement.setAttribute("role", "active");

                masterLink?.setAttribute("role", "active");
                for (let i = 0; i < siteInnerLinkWrapper.length; i++) {
                    siteInnerLinkWrapper[i].setAttribute("role", "shown")
                }
            }

            for(let inner of siteInnerLinkWrapper) {
                inner.setAttribute("role", logoState === "active" ? "hidden": "shown");
            }

            for (let i = 0; i < linkElements.length; i++) {
                linkElements[i].setAttribute("role", logoState === "active"?"hidden":"shown")
            }
        })
    }


    function onCeilingUnfocused() {
        window.addEventListener("scroll", (event)=> {

            const siteLogoElement = document.getElementById('site-logo');
            siteLogoElement?.setAttribute("role", "inactive");


            const siteInnerLinkWrapper = document.getElementsByClassName('hero-link-item');
            for (let i = 0; i < siteInnerLinkWrapper.length; i++) {
                siteInnerLinkWrapper[i].setAttribute("role", "hidden")
            }

            const siteLinks = document.getElementsByClassName('hero-link');
            for(let link of siteLinks) {
                link.setAttribute("role", "hidden");
            }

            const masterLink = document.getElementById('hero-link-master')
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                masterLink?.setAttribute("role", "inactive");
            } else {
                masterLink?.removeAttribute("role");
            }
        })
    }

    function goToAnchor(anchorElementID:string) {
        const anchor = document.getElementById(anchorElementID)
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

    function createLinkLabel(url: string, label: string, tabIndex?:number) {
        return (
            <Fragment>
                <div tabIndex={tabIndex} id={'hero-link-href'+label} onClick={(event)=>goToAnchor(url)}>
                    <label>{label}</label>
                </div>
                <div id={'hero-link-square-wrapper'}>
                    <div id={'hero-link-square-underline'}/>
                    <div id={'hero-link-square'}/>
                </div>
            </Fragment>
        )
    }

    return (
        <Fragment>
            <div className={'header-links'}>
                <div id={'hero-link-master'} className={'hero-link-master'}>
                    <div className={'hero-link-wrapper-parent'}>
                        <div className={'site-logo-wrapper'}>
                            <SiteLogo id={'site-logo'} className={'site-logo'} />
                        </div>
                        <div className={'site-link-wrapper-inner'}>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-0'} className={'hero-link'}>
                                    {createLinkLabel("about-anchor", "about")}
                                </div>
                            </div>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-1'} className={'hero-link'}>
                                    {createLinkLabel("projects-anchor", "projects")}
                                </div>
                            </div>
                            {/*<div className={'hero-link-item'}>
                                <div id={'hero-link-2'} className={'hero-link'}>
                                    {createLinkLabel("cvitae-anchor", "curriculum vitae")}
                                </div>
                            </div>*/}
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-3'} className={'hero-link'}>
                                    {createLinkLabel("contact-anchor", "contact me")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;