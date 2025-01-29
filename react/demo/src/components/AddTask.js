import React, { useState } from "react";
function AddTask({onClickAdd}){
    const [text,setText]=useState('');
    return(
        <>
            <input
            type="text"
            name="add-task"
            value={text}
            onChange={(event)=>setText(event.target.value)}
            ></input>
            <button onClick={()=>{
                setText('');
                onClickAdd(text);
            }}>
                add task
            </button>
        </>
    );
}
export default AddTask;