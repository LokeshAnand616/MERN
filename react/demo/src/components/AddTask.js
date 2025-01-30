import React, { useState } from "react";
function AddTask({onAdd}){
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
                onAdd({
                    type:'add',
                    payload:{name:text}
                });
            }}>
                add task
            </button>
        </>
    );
}
export default AddTask;