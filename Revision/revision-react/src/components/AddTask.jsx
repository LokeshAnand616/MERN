import React, { useState } from "react";

const AddTask=({taskDispatch})=>{
    const[task,setTask]=useState('');
    const handleDispatch=()=>{
        taskDispatch({ type: "add", id: Date.now(), task:task });
        setTask('');
    }
    return(
        <>
         <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>
         <button onClick={handleDispatch}>add</button>
        </>
    );
}

export default AddTask;

