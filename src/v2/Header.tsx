import React, {Fragment, useEffect, useRef, useState} from "react";
import {ReactComponent as SiteLogo} from './../assets/vectors/logo.svg'

function Header() {

    useEffect(() =>{
        const documentHeight = () => {
            const doc = document.documentElement
            doc.style.setProperty('--doc-height', `${window.innerHeight}px`)
        }
        window.addEventListener('resize', documentHeight)
        documentHeight()

        onCeilingUnfocused();

        const squareFall = document.getElementsByClassName('square-fall-1').item(0)
        squareFall?.addEventListener("animationend", (event) => {
            goToAnchor('about-anchor');
        });

    }, [])

    function onCeilingUnfocused() {
        window.addEventListener("scroll", (event)=> {

            const siteLogoElement = document.getElementById('site-logo');
            let logoState = siteLogoElement?.getAttribute("role");

            const siteInnerLinkWrapper = document.getElementsByClassName('hero-link-item');
            for(let inner of siteInnerLinkWrapper) {
                inner.setAttribute("role", "hidden");
            }

            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

                const masterLink = document.getElementById('hero-link-master')
                masterLink?.setAttribute("role", "active");

                siteLogoElement?.setAttribute("role", "inactive");

                const linkElements = document.getElementsByClassName('hero-link');
                for (let i = 0; i < linkElements.length; i++) {
                    linkElements[i].setAttribute("role", "hidden")
                }

            } else {

                const masterLink = document.getElementById('hero-link-master')
                masterLink?.removeAttribute("role");
                masterLink?.setAttribute("role", "inactive");

                const siteLogoElement = document.getElementById('site-logo');
                siteLogoElement?.setAttribute("role", "inactive");

                const linkElements = document.getElementsByClassName('hero-link');
                for (let i = 0; i < linkElements.length; i++) {
                    linkElements[i].setAttribute("role", "hidden")
                }
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
            <div className={'header-links'} style={{zIndex:1000}}>
                <div id={'hero-link-master'} className={'hero-link-master'}>
                    <div className={'hero-link-wrapper-parent'}>
                        <div className={'site-logo-wrapper'}>
                            <SiteLogo id={'site-logo'} className={'site-logo'}/>
                        </div>
                        <div className={'site-link-wrapper-inner'}>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-0'} className={'hero-link'}>
                                    {createLinkLabel("about-anchor", "About")}
                                </div>
                            </div>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-1'} className={'hero-link'}>
                                    {createLinkLabel("projects-anchor", "Projects")}
                                </div>
                            </div>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-2'} className={'hero-link'}>
                                    {createLinkLabel("cvitae-anchor", "Curriculum Vitae")}
                                </div>
                            </div>
                            <div className={'hero-link-item'}>
                                <div id={'hero-link-3'} className={'hero-link'}>
                                    {createLinkLabel("contact-anchor", "Contact")}
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