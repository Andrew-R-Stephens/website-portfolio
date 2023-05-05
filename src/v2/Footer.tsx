import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SiteLogo} from './../assets/vectors/logo.svg'

function Footer() {

    function goToAnchor(anchorElementID:string) {
        const anchor = document.getElementById(anchorElementID)
        anchor?.scrollIntoView({
            behavior: "smooth",
            block: "end"
        });
    }

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
                <div id={'footer-anchor'} className={'scroll-anchor'}/>
                <div className={'footer-body-wrapper'}>
                    <div className={'footer-body'}>
                        <div className={'footer-body-inner-wrapper'}>
                            <div className={'footer-icon-wrapper'}>
                                <div className={'site-logo-wrapper-plain'}>
                                    <SiteLogo id={'site-logo'} className={'site-logo-footer'} />
                                </div>
                                <label className={'footer-logo-label'}>Andrew Stephens</label>
                            </div>
                        </div>
                        <div className={'footer-body-inner-wrapper'}>
                            <div className={'footer-content-wrapper'}>
                                <div className={'footer-content-label-wrapper'}>
                                    <a href={"https://github.com/Andrew-R-Stephens"}>
                                        <label className={'footer-content-label'}>Github</label></a>
                                </div>
                                <div className={'footer-content-label-wrapper'}>
                                    <a href={"https://www.linkedin.com/in/andrew-stephens-/"}>
                                        <label className={'footer-content-label'}>LinkedIn</label></a>
                                </div>
                                <div className={'footer-content-label-wrapper'}>
                                    <a href={"https://tritium-studios.com/"}>
                                        <label className={'footer-content-label'}>Tritium Studios</label></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;