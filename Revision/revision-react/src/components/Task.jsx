import React, { useReducer } from "react";
import AddTask from "./AddTask";
import { TaskReducer } from "./TaskReducer";

const initialState = [
    { id: 0, task: "kannan" }
];

const Task = () => {
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    return (
        <>
            <AddTask taskDispatch={dispatch} />
            <ul>
                {state.map((curr) => (
                    <li key={curr.id}>{curr.task}</li>
                ))}
            </ul>
        </>
    );
};

export default Task;
