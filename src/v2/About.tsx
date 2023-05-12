import React, {Fragment, useEffect} from "react";

function About() {

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
                <div id={'about-anchor'} className={'scroll-anchor'}/>
                <div className={'about-body'}>
                    <div className={'about-body-top'}>
                        <div className={'about-body-top-label'}>
                            ABOUT ME
                        </div>
                    </div>
                    <div className={'text-blurb-body'}>
                        <p>
                            Hello, my name is Andrew! I'm a full stack engineer and mobile app developer from
                            Long Island, New York.
                        </p>
                        <p>
                            I'm both highly motivated and curious, which has been demonstrated through my use of a multitude
                            of different technologies over the last decade!
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;