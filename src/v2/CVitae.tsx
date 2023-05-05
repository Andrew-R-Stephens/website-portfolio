import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function CVitae() {

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
                <div id={'cvitae-anchor'} className={'scroll-anchor'}/>
                <div className={'about-body'}>
                    <div className={'text-blurb-label'}>
                        <label>Curriculum Vitae</label>
                    </div>
                    <div className={'text-blurb-body'}>
                        <p>ToDo</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CVitae;