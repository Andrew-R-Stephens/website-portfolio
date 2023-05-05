import React, {Fragment} from "react";
import {useNavigate} from "react-router-dom";

function Projects() {

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
                <div id={'projects-anchor'} className={'scroll-anchor'}/>
                <div className={'projects-body'}>
                    <div className={'text-blurb-label'}>
                        <label>Past Projects</label>
                    </div>
                    <div className={'text-blurb-body'}>
                        <ul>
                            <li>10+ years of experience in 𝐉𝐚𝐯𝐚, and deep understanding of OOP concepts</li>
                            <li>2+ years of experience in mobile 𝐀𝐧𝐝𝐫𝐨𝐢𝐝 app development</li>
                            <li>𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤𝐬: ReactJS</li>
                            <li>𝐅𝐫𝐨𝐧𝐭-𝐞𝐧𝐝: Typescript / Javascript / HTML5 / CSS3 / XML / JSON</li>
                            <li>𝐁𝐚𝐜𝐤-𝐞𝐧𝐝: Java / PHP / Python</li>
                            <li>𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: MySQL</li>
                            <li>𝐖𝐞𝐛𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬: AWS / Apache / Ubuntu / Node.js</li>
                            <li>Roles as 𝐓𝐞𝐚𝐦 𝐥𝐞𝐚𝐝𝐞𝐫 utilizing 𝐀𝐠𝐢𝐥𝐞 / 𝐒𝐜𝐫𝐮𝐦 methodologies in 𝐏𝐫𝐨𝐣𝐞𝐜𝐭 𝐦𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭</li>
                            <li>Experienced in 𝐆𝐢𝐭 / 𝐆𝐢𝐭𝐡𝐮𝐛</li>
                            <li>Since graduating, I've been working projects in other technologies such as ASP.NET,
                            Chrome Extensions, Angular, Go, and Kotlin. I have also been in pursuit of a number of recognized
                                relevant Certifications.</li>
                        </ul>
                        <p>
                            𝐏𝐮𝐛𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬:
                            <ul>
                                <li>𝘗𝘩𝘢𝘴𝘮𝘰𝘱𝘩𝘰𝘣𝘪𝘢 𝘌𝘷𝘪𝘥𝘦𝘯𝘤𝘦 𝘛𝘰𝘰𝘭 for Android on the Google Play Store</li>
                            </ul>
                            𝐏𝐫𝐨𝐣𝐞𝐜𝐭𝐬:
                            <ul>
                                <li>Deployed a fully realized 2D platformer game</li>
                                <li>"Pom20" Chrome Extension for time management</li>
                                <li>Perlin Noise generator / visualizer website</li>
                            </ul>

                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Projects;