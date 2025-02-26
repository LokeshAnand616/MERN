import React, { useEffect, useMemo, useState } from "react";

const UseEffectScenario=()=>{
    const[count,setCount]=useState(0)
    const obj = useMemo(()=>({
        name:'lokesh',
        age:23
    }),[])
    // useEffect(()=>{
    //     console.log("Rendered every time")
    // },[count]);
    
    return(
        <>
            <button onClick={()=>setCount(prev=>prev+1)}>add</button>
        </>
    );
}

export default UseEffectScenario;