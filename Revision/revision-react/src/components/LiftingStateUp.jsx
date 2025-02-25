import React from "react";

const LiftingStateUp = ({value,onText})=>{
    return(
        <>
            <input value={value} onChange={(e)=>onText(e.target.value)}/>
        </>
    )
}

export default LiftingStateUp;