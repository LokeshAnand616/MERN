import React, { useState } from "react";
import LiftingStateUp from "./LiftingStateUp";

const DisplayText=()=>{
    const[text, setText] = useState();
    return(
        <>
            <LiftingStateUp value={text} onText={setText}/>
            {text}
        </>
    );
}

export default DisplayText;