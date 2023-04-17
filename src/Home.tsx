import React, {Fragment, useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import './App.css'

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

    useEffect(() =>{
        const squareFall = document.getElementsByClassName('square-fall-1').item(0)
        squareFall?.addEventListener("animationend", (event) => {
            goToGreetingAnchor();
        });
    })

    function goToGreetingAnchor() {
        const greetingAnchor = document.getElementById('greeting-anchor')
        greetingAnchor?.scrollIntoView({
            behavior: 'smooth',
            block: "start"
        });
    }

    return (
        <Fragment>
            <div className={'page-head'}>
                <div style={{position: "absolute", top:0, width:"100%", height: "100svh", zIndex: 0, overflow: "hidden"}}>
                    {/*<canvas id={'head-canvas'} width={"100%"} height={"100%"}
                            style={{display: "block", margin:"auto", width:"100%", height:"100%"}}/>*/}
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

                </div>
                <div className={'head-header'}>
                    <div className={'header-links'}>
                        <div style={{marginLeft:"3vmin", marginTop: 32}}>
                            <ul>
                                <li>About</li>
                                <li>Projects</li>
                                <li>Curriculum Vitae</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                    <div className={'header-label'}>
                        <div className={'label-container'}
                             style={{opacity: 0, animation:"fade-in 1s forwards",
                                 animationDelay: "200ms", paddingBottom:32}}>
                            <label className={'simple-label'} style={{fontFamily:"TTSSevers-Medium"}}>Hello, my name is Andrew Stephens</label>
                        </div>
                    </div>
                    <div className={'header-label'}>
                        <div className={'label-container transition-fade-in'}
                             style={{opacity: 0, animation:"fade-in 400ms forwards", animationDelay: "1s"}}>
                            <label className={'simple-label reduced-font'}>Full-stack Web Developer</label>
                        </div>
                        <div className={'label-container transition-fade-in'}
                             style={{opacity: 0, animation:"fade-in 400ms forwards", animationDelay: "1300ms"}}>
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
            <div className={'page-body'}>
                <div id={'greeting-anchor'} className={'greeting'}>
                    <label>Hello from label</label>
                </div>
                <div className={''}></div>
            </div>
        </Fragment>
    )
}

export default Home;