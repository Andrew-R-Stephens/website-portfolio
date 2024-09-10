import React, {Fragment, useEffect, useState} from "react";
import json from './../../../assets/data/projects.json';
import ProjectBouy from "./ProjectBouy";
import {Project} from "./ProjectModel";

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

        const orderedTechnologies: string[] = technologies.sort();
        const finalList: string[] = orderedTechnologies.filter((item:string)=>{
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
            return <ProjectBouy
                id={"bouy"+index}
                projectData={project}
                technologyData={technologiesData}
                role={currentTechnology?.length == 0 || project.tech.includes(currentTechnology) ?
                    'active' : 'inactive'}/>
        })
    }

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

}

export default ProjectGallery;