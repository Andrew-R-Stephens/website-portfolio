import React, {Fragment} from "react";
import ProjectGallery from "./ProjectGallery";
import './Projects.css'

function Projects() {

    function titleLabel() {
        return <div className={'projects-body-top'}>
            <div className={'projects-body-top-inner'}>
                <div className={'projects-body-top-label-wrapper'}>
                    <div className={'projects-body-top-label'}>PROJECTS</div>
                </div>
                <div className={'projects-body-top-label-small'}>and</div>
                <div className={'projects-body-top-label-wrapper'}>
                    <div className={'projects-body-top-label'}>PUBLICATIONS</div>
                </div>
            </div>
        </div>;
    }

    function projectList() {
        return <div className={'projects-gallery'}>
            <ProjectGallery/>
        </div>;
    }

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex: 0}}>
                <div id={'projects-anchor'} className={'scroll-anchor'}/>
                <div className={'projects-body'}>
                    {titleLabel()}
                    {projectList()}
                </div>
            </div>
        </Fragment>
    )
}

export default Projects;