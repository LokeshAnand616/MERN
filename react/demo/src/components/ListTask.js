    import { useState } from "react";

    export default function ListTask( {task,ondispatch} ) {
        return (
            <ul>
            {task.map((curr,index)=>(
                <AddDeleteTask key={index} curtask={curr} curDispatch={ondispatch}/>
            ))}
            </ul>
        );
    }
    function AddDeleteTask({curtask,curDispatch}){
        const[isEditing,setEditing]=useState(false);
        const[curname,setName]=useState('');
        return(
            <>
            <input
            type="checkbox"
            value={curtask.name}
            ></input>
            {curtask.name}
            {
                isEditing?
                <>  
                    <input
                    type="text"
                    value={curname}
                    onChange={(e)=>setName(e.target.value)}
                    />
                    <button onClick={() => {
                        curDispatch({ type: 'edit', payload: { id:curtask.id,name: curname } });
                        setEditing(false);
                    }}>save</button>
                </>:
                <>
                    <button onClick={()=>setEditing(true)}>Edit</button>
                </>
            }
            <button onClick={()=>curDispatch({type:'delete',payload:{id:curtask.id}})}>delete</button>
            </>
        );
    }


