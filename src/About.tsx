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

    function animateMiniSquare(element:Element) {
        let transX = "calc(-50svw + (" + (Math.random()*90) +"svw))";
        let transY = Math.random();

        document.getElementById(element.id)?.getAnimations().forEach((item:Animation)=>item.cancel())

       /* Math.random() <= .5 ?*/
            document.getElementById(element.id)?.animate([
                { offset: 0, transform: "translate(" + transX + ", 0) rotate(15deg)", opacity: 0},
                { offset: .20, opacity: 0, width: "1svw" },
                { offset: .25, opacity: .5, width: "1.25svw" },
                { offset: .50, opacity: .8, width: "1.5svw" },
                { offset: 1, transform: "translate(" + transX + ", calc(-10svh + (-50svh * " + transY + "))) rotate(90deg)", opacity: 0, width: "1svw"}
            ], {
                duration: 5000 + (Math.random()*1000),
                iterations: 1,
                direction: "normal",
                easing: "ease-in-out",
                delay: (Math.random()*6000),
                fill: "forwards"
            })
            /*:
            document.getElementById(element.id)?.animate([
                { offset: 0, transform: "translate(" + transX + ", 0)", opacity: 0},
                { offset: .20, opacity: 0, width: "1svw" },
                { offset: .25, opacity: .5, width: "1.25svw" },
                { offset: .50, opacity: .8, width: "1.5svw" },
                { offset: 1, transform: "translate(" + transX +  ", calc(5svh + (10svh * " + transY + ")))", opacity: 0, width: "1svw"}
            ], {
                duration: 5000 + (Math.random()*1000),
                iterations: 1,
                direction: "normal",
                easing: "ease-in-out",
                delay: 2000 + (Math.random()*1000),
                fill: "forwards"
            });*/

        element.getAnimations().map((item)=>{
            const eventListener = (event:AnimationPlaybackEvent, item:Animation) =>
            {
                animateMiniSquare(element)
                item.removeEventListener("finish", (event)=>eventListener(event, item))
            }
            item.addEventListener("finish", (event)=>eventListener(event, item), {once:true})
        })
    }

    return (
        <Fragment>
            <div className={'page-body'} style={{zIndex:0}}>
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
                </div>
                </div>
                <div className={'greeting'} style={{zIndex:0}}>
                    <div id={'about-anchor'} style={{zIndex:0}}/>
                    <div style={{padding: '3svw', zIndex:0}}>Hello!</div>
                </div>
                <div className={''} style={{zIndex:0}}></div>
            </div>
        </Fragment>
    )
}

export default About;