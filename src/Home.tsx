import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function Home() {

    const navigate = useNavigate()

    return (
        <Fragment>
            <div className={'page-main'}>
                <div className={'page-top'}>
                    <div className={'page-header'}>
                        <label>Andrew Stephens</label>
                    </div>
                    <div className={'page-navigation'}>
                        <ul>
                            <li onClick={() => navigate("/contact")}>Contact Me</li>
                            <li onClick={() => navigate("/curriculum-vitae")}>Curriculum Vitae</li>
                        </ul>
                    </div>
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