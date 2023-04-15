import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";
import './App.css'

function Home() {

    //const navigate = useNavigate()

    return (
        <Fragment>
            <div className={'page-main'}>
                <div className={'page-top'}>
                    <div className={'page-header'}>
                        <div className={'header-label'}>
                            <div className={'label-container'}>
                                <label className={'simple-label'}>Hello, my name is Andrew Stephens</label>
                            </div>
                        </div>
                        <div className={'header-label'}>
                            <div className={'label-container'}>
                                <label className={'simple-label.reduced-font'}>Full-stack Web Developer</label>
                            </div>
                            <div className={'label-container'}>
                                <label className={'simple-label.reduced-font'}>Native Android Engineer</label>
                            </div>
                        </div>
                        <div className={'header-input'}>
                            <input className={'input-button'} type={'button'} value={'Enter'}/>
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
                    <div className={'greeting'}>

                    </div>
                    <div className={''}></div>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;