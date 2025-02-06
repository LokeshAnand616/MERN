import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addTask } from './taskSlice';
function Task(){
    const [task,setTask] = useState("");
    const [priority, setPriority] = useState("");
    const dispatch = useDispatch();
    function handleClick(){
        dispatch(addTask(task,priority));
    }
    return(
        <>
            <label htmlFor='task'>Task</label>
            <input
                type='text'
                name='task'
                value={task}
                onChange={(e)=>setTask(e.target.value)}
            />
            <label htmlFor='priority'>Priority</label>
            <input
                type='text'
                name='priority'
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
            />
            <button onClick={handleClick}>Save</button>
        </>
    );
}

export default Task;