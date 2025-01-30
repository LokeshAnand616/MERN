import { useReducer } from "react";
import taskReducer from "./taskReducer";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
function Reducer(){
    const[state,dispatch]=useReducer(taskReducer,[])
    return(
        <>
            <AddTask onAdd={dispatch}/>
            <ListTask task={state} ondispatch={dispatch}/>
        </>
    );
}
export default Reducer;