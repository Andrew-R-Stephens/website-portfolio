import React, {Fragment, useEffect} from "react";

function About() {

    useEffect(() => {
        animateMiniSquares()
    }, [])

    function animateMiniSquares() {
        const linkElements:HTMLCollectionOf<Element> =
            document.getElementsByClassName('mini-square') as HTMLCollectionOf<Element>;

        for (let i = 0; i < linkElements.length; i++) {
            const element = linkElements[i];
            element.id = "mini-square-" + i;

            animateMiniSquare(element);
        }
    }

    function animateMiniSquare(element:Element):Element {
        console.log("Sent over")

        let transX = "calc(-50svw + (" + (Math.random()*90) +"svw))";
        let transY = Math.random();

        Math.random() <= .5 ?
            document.getElementById(element.id)?.animate([
                { offset: 0, transform: "translate(" + transX + ", 0)", opacity: 0},
                { offset: .20, opacity: 0, width: "1svw" },
                { offset: .25, opacity: 1, width: "1.25svw" },
                { offset: .50, opacity: 1, width: "1.5svw" },
                { offset: 1, transform: "translate(" + transX + ", calc(-5vh + (-10vh * " + transY + ")))", opacity: 0, width: "1svw"}
            ], {
                duration: 2000 + (Math.random()*1000),
                iterations: 1,
                direction: "normal",
                easing: "ease-in-out",
                delay: (Math.random()*1000),
                fill: "forwards"
            })
            :
            document.getElementById(element.id)?.animate([
                { offset: 0, transform: "translate(" + transX + ", 0)", opacity: 0},
                { offset: .20, opacity: 0, width: "1svw" },
                { offset: .25, opacity: 1, width: "1.25svw" },
                { offset: .50, opacity: 1, width: "1.5svw" },
                { offset: 1, transform: "translate(" + transX +  ", calc(5vh + (10vh * " + transY + ")))", opacity: 0, width: "1svw"}
            ], {
                duration: 2000 + (Math.random()*1000),
                iterations: 1,
                direction: "normal",
                easing: "ease-in-out",
                delay: (Math.random()*1000),
                fill: "forwards"
            });

        (document.getElementById(element.id) as Element).getAnimations().map((item)=>{
            item.onfinish = (event) => {
                animateMiniSquare(element)
            }
        })

        return element
    }

    return (
        <Fragment>
            <div className={'page-body'}>
                <div id={'page-body-multisquares'}>
                    <div className={'mini-square-wrapper'}>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                        <div className={'mini-square'}/>
                </div>
                </div>
                <div className={'greeting'}>
                    <div id={'about-anchor'}/>
                    <div style={{padding: '3svw'}}>Hello!</div>
                </div>
                <div className={''}></div>
            </div>
        </Fragment>
    )
}

export default About;