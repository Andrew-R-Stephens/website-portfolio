import React, {Fragment, ReactNode, useEffect, useState} from "react";
import json from './../assets/data/about-me.json';

function About() {

    const [rawData, setRawData] = useState<any>();
    const [parsedData, setParsedData] = useState<ParsedData>()

    useEffect(() => {
        setRawData(json)
    }, [json])

    useEffect(() => {
        setParsedData(new ParsedData(rawData));
    }, [rawData])

    function parseRawDataToHTML(parentID:string): any {
        const nodeClass= 'custom-node';
        const parentElement = document.getElementById(parentID);

        parsedData?.entries?.map((entry:ParsedDataEntry, index:number)=>{
            const nodeType= (entry.type ? entry.type : "div");
            const fullNode = "<" + nodeType +
                " class = "+ nodeClass +">" + entry.content +  "</" + nodeType + ">";

            let getNodes = (fullNodes:string) => new DOMParser().parseFromString(fullNodes, 'text/html').body.childNodes;

            getNodes(fullNode).forEach((node:ChildNode)=> {
                parentElement?.appendChild(node);
            });
        });
    }

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
                        <div className={'text-blurb-body-inner'} id={'text-blurb-body-inner'}>
                            { parseRawDataToHTML('text-blurb-body-inner') }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

class ParsedData {

    entries:ParsedDataEntry[] = [];

    constructor(data:any) {
        if(data == undefined)
            return;

        const {aboutme} = data;
        const {entries} = aboutme;

        this.entries = []
        entries.map((entry:any) => {
            this.entries.push(new ParsedDataEntry(entry));
        });
    }
}

class ParsedDataEntry {
    type:string = "";
    content:string = "";

    constructor(data:any) {
        this.type = data.type;
        this.content = data.content;
    }
}

export default About;