import About from "./About";
import CVitae from "./CVitae";
import React, {Fragment} from "react";

function Body() {
    return (
        <Fragment>
            <About/>
            <CVitae/>
            {/*<Projects/>*/}
        </Fragment>
    );
}

export default Body;

