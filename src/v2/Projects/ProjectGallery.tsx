import React, {Fragment, useEffect, useRef, useState} from "react";
const rawProjectDataRes = (await fetch('src/assets/data/projects.json'));

function ProjectGallery() {

    const [rawData, setRawData] = useState<any>({});
    const [projects, setProjects] = useState<Project[]>([]);
    const [allTechnologies, setTechnologies] = useState<string[]>([]);
    const [currentProject, setCurrentProject] = useState<number>(0);
    const [currentTechnology, setCurrentTechnology] = useState<string>("");

    const handleNext = () => setCurrentProject((current) => {
        return (current +1) > projects.length -1 ? 0 : current +1;
    });
    const handlePrevious = () => setCurrentProject((current) => {
        return Math.max(0, (current -1) < 0 ? projects.length -1 : current -1);
    });
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

        const orderedTechnologies = technologies.sort();
        const finalList = orderedTechnologies.filter((item:string)=>{
            return data.selector_whitelist.includes(item)
        })
        setTechnologies(finalList);
    }

    const handleTechnologySelect = (tech:string) => {
        setCurrentTechnology(tech===currentTechnology?"":tech);
    }

    useEffect(() => {
        (rawProjectDataRes.json())
            .then(r => {
                setRawData(r);
            });
    }, [rawProjectDataRes])

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
                    allTechnologies.map((technology:string)=>{
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
                data={project}
                role={currentTechnology?.length == 0 || project.tech.includes(currentTechnology) ?
                    'active' : 'inactive'}/>
        })
    }

}

function BouyDisplay(data:any) {

    const[project, setProject] = useState<Project>();

    useEffect(() => {
        setProject(data.data);
    }, [data])

    function getImage1Property(data: any[]) {
        console.log(data)
        if(data === undefined || data == null || data.length == 0) {
            return "";
        }
        let cssProperty:any = {};
        data.map((item:any)=>{
            cssProperty[item.variable] = item.value;
        })

        return cssProperty;
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
                                        getImage1Property(
                                            [{variable:'--bg-color', value:project?.images?.at(0)?.color},
                                            {variable:'--filter', value:project?.images?.at(0)?.filter}]
                                        )
                                }>
                                    <div className={'project-bouy-inner-wrapper-head-image'}>
                                        <img src={project?.images?.at(0)?.url}/>
                                    </div>
                                </div>
                                <div className={'project-bouy-inner-wrapper-head-image-wrapper'}
                                    style={
                                        getImage1Property(
                                            [{variable:'--bg-color', value:project?.images?.at(1)?.color},
                                                {variable:'--filter', value:project?.images?.at(1)?.filter}]
                                        )
                                }>
                                    <div className={'project-bouy-inner-wrapper-head-image'}>
                                        <img src={project?.images?.at(1)?.url}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'project-bouy-inner-wrapper-body'}>
                            <div className={'project-bouy-inner-wrapper-body-inner'}>
                                <div className={'project-bouy-inner-wrapper-body-inner-item-wrapper'}>
                                    <label className={'project-bouy-title'}>{project?.title}</label>
                                        <label className={'project-bouy-title-alt'}>{project?.altTitle}</label>
                                        <label className={'project-bouy-genre'}>{project?.genre}</label>
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

        console.log(data)
    }
}

export default ProjectGallery;