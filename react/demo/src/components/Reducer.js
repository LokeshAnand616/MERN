import { useReducer } from "react";
import AddTask from "./AddTask";
import taskReducer from './taskReducer.js'
import ListTask from "./ListTask.js";
function Reducer(){
    let nid=3;
    const initialTask = [
        {id:0,text:'study react',done:true},
        {id:1,text:'study redux',done:false},
        {id:2,text:'study mongodb',done:false}
    ]
    const[tasks,dispatch]=useReducer(taskReducer,initialTask);
    function handleTaskAdd(text){
        dispatch({
            type:'added',
            id:nid++,
            text:text,
    })
    }
    return(
        <>
        <AddTask onClickAdd={handleTaskAdd}/>
        <ListTask alltask={tasks}/>
        </>
    );
}
export default Reducer;