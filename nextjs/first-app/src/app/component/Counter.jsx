'use client'
import { useState } from "react";

const Counter =()=>{
    const[count, setCount]=useState(0);
    return(
        <>
        <button onClick={()=>setCount(prev=>prev+1)}>counter</button>
        {count}
        </>
    )
}
export default Counter;