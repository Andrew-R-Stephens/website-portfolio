import React, {Fragment, useEffect, useState} from "react";
import json from './../../assets/data/projects.json';

function ProjectGallery() {

    const [rawData, setRawData] = useState<any>({});
    const [projects, setProjects] = useState<Project[]>([]);
    const [technologiesData, setTechnologyData] = useState<any>();
    const [usedTechnologies, setUsedTechnologies] = useState<string[]>([]);
    const [currentTechnology, setCurrentTechnology] = useState<string>("");

    const handleLoadProjects = (data:any) => {
        const tempList:Project[] = [];
        data?.map((item:Project)=>{
            tempList.push(new Project(item));
        })

        setProjects(tempList);
    }

    const handleLoadTechnologies = (data:any) => {
        const technologies:string[] = []

        projects?.map((project:Project)=>{
            project?.tech.map((technology:string)=>{
                if(technologies?.indexOf(technology) == -1) {
                    technologies?.push(technology);
                }
            })
        })

        setTechnologyData(data);

        const orderedTechnologies = technologies.sort();
        const finalList = orderedTechnologies.filter((item:string)=>{
            return data.selector_whitelist.includes(item)
        })
        setUsedTechnologies(finalList);
    }

    const handleTechnologySelect = (tech:string) => {
        setCurrentTechnology(tech===currentTechnology?"":tech);
    }

    useEffect(() => {
        setRawData(json)
    }, [json])

    useEffect(() => {
        handleLoadProjects(rawData?.projects);
    }, [rawData])

    useEffect(() => {
        handleLoadTechnologies(rawData?.technologies);
    }, [projects])

    return <Fragment>
        <div style={{display:"block"}}>
            <div style={{display:"inline-flex", width: "100%", height:"fit-content"}}>
                <div className={'carousel-technology-wrapper'}>
                {
                    usedTechnologies.map((technology:string)=>{
                        return (
                            <div className={'carousel-technology-item-wrapper'}
                                 onClick={()=>handleTechnologySelect(technology)}
                                 role={technology === currentTechnology?'active':"inactive"}>
                                <div className={'carousel-technology-item'}>
                                    <label>{technology}</label>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
            </div>
            {renderBouys()}
        </div>
    </Fragment>

    function renderBouys() {
        return (
            <div className={'projects-display'}>
                <div className={'projects-display-inner'}>
                {
                    renderTechInclusiveBouys()
                }
                </div>
            </div>
        )
    }

    function renderTechInclusiveBouys():any {
        return projects?.map((project:any, index:number)=>{
            return <BouyDisplay
                id={"bouy"+index}
                projectData={project}
                technologyData={technologiesData}
                role={currentTechnology?.length == 0 || project.tech.includes(currentTechnology) ?
                    'active' : 'inactive'}/>
        })
    }

}

function BouyDisplay(data:any) {

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
                                        <img src={project?.images?.at(0)?.url} alt={'Technology Image'}/>
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
                                        <img src={project?.images?.at(1)?.url} alt={'Project Image'}/>
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

class Project {

    title:string = "";
    altTitle:string = "";
    genre:string = "";
    isPublication:boolean = false;
    details:string = "";
    tech:string[] = [];
    images:any[] = [];
    githubUrl:string = "";
    demoUrl:string = "";

    constructor(data:any) {
        this.title = data.title;
        this.altTitle = data.altTitle;
        this.genre = data.genre;
        this.isPublication = data.publication;
        this.details = data.details;
        this.tech = data.tech;
        this.images = data.images;
        this.githubUrl = data.githubUrl;
        this.demoUrl = data.demoUrl;
    }
}

export default ProjectGallery;