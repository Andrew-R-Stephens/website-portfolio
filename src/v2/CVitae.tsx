import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function CVitae() {

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
                <div className={'greeting'} style={{zIndex:0}}>
                    <div id={'cvitae-anchor'} className={'scroll-anchor'}/>
                    <div style={{padding: '3svw', zIndex:0, color:"white"}}>Curriculum Vitae</div>
                </div>
                <div className={''} style={{zIndex:0}}></div>
            </div>
        </Fragment>
    )
}

export default CVitae;