import React, {Fragment, useEffect, useState} from "react";
import {Project} from "./ProjectModel";

function ProjectBouy(data:any) {

    const[project, setProject] = useState<Project>();

    useEffect(() => {
        setProject(data.projectData);
    }, [data])

    function getCSSProperties(data: any[]) {
        if(data === undefined || data == null || data.length == 0) {
            return "";
        }
        let cssProperty:any = {};
        data.map((item:any)=>{
            cssProperty[item.variable] = item.value;
        })

        return cssProperty;
    }

    function getTechURLS() {
        const filteredList:any[] = [];
        data?.technologyData?.icon_data?.map((generalTech:any) => {
            project?.tech?.map((projectTech:any) => {
                if(generalTech.name === projectTech) {
                    filteredList.push(generalTech)
                }
            })
        })
        return filteredList;
    }

    function lazyImage(url: string, alt: string) {
        return <img src={url} alt={alt} loading={"lazy"}/>
    }

    return (
        <Fragment>
            <div className={'project-bouy'} role={data.role}>
                <div className={'project-bouy-inner'}>
                    <div className={'project-bouy-inner-wrapper'}>
                        <div className={'project-bouy-inner-wrapper-head-wrapper'}>
                            <div className={'project-bouy-inner-wrapper-head'}>
                                <div className={'project-bouy-inner-wrapper-head-image-wrapper'}
                                     style={
                                         getCSSProperties(
                                             [{variable:'--bg-color', value:project?.images?.at(0)?.color},
                                                 {variable:'--filter', value:project?.images?.at(0)?.filter}]
                                         )
                                     }>
                                    <div className={'project-bouy-inner-wrapper-head-image'}>
                                        { lazyImage(project?.images?.at(0)?.url, 'Technology Image') }
                                        {/*<img src={project?.images?.at(0)?.url} alt={'Technology Image'}/>*/}
                                    </div>
                                </div>
                                <div className={'project-bouy-inner-wrapper-head-image-wrapper'}
                                     style={
                                         getCSSProperties(
                                             [{variable:'--bg-color', value:project?.images?.at(1)?.color},
                                                 {variable:'--filter', value:project?.images?.at(1)?.filter}]
                                         )
                                     }>
                                    <div className={'project-bouy-inner-wrapper-head-image'}>
                                        { lazyImage(project?.images?.at(1)?.url, 'Project Image') }
                                        {/*<img src={project?.images?.at(1)?.url} alt={'Project Image'}/>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'project-bouy-inner-wrapper-body'}>
                            <div className={'project-bouy-inner-wrapper-body-inner'}>
                                <div className={'project-bouy-inner-wrapper-body-inner-item-wrapper'}>
                                    <div className={'project-bouy-title'}>
                                        <label className={'project-bouy-title'}>{project?.title}</label>
                                    </div>
                                    <div className={'project-bouy-body'}>
                                        <div className={'project-bouy-title-alt'}>
                                            <label>{project?.altTitle}</label>
                                        </div>
                                        <div className={'project-bouy-genre'}>
                                            <label>{project?.genre}</label>
                                        </div>
                                        <div className={'project-bouy-technologies-wrapper'}>
                                            {
                                                getTechURLS().map((generalTech:any) => {
                                                    return (
                                                        <div className={'project-bouy-technology-wrapper'}
                                                             style={
                                                                 getCSSProperties(
                                                                     [{variable:'--bg-color', value:generalTech.color},
                                                                         {variable:'--filter', value:generalTech.filter}]
                                                                 )
                                                             }>
                                                            <div className={'project-bouy-technology'}>
                                                                <img src={generalTech.url} alt={'Project Image'}/>
                                                            </div>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'project-bouy-inner-wrapper-links-wrapper'}>
                        {project?.githubUrl!?.length > 0 ?<div className={'project-bouy-githubUrl'}>
                            <a href={project?.githubUrl} target={'_blank'}>Source</a>
                        </div>:<Fragment/>}
                        {project?.demoUrl!?.length > 0 ?<div className={'project-bouy-demoUrl'}>
                            <a href={project?.demoUrl} target={'_blank'}>Demo</a>
                        </div>:<Fragment/>}
                    </div>
                </div>
            </div>
        </Fragment>
    );

}

export default ProjectBouy;