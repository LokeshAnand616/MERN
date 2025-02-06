import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { fetchTasks, addTask } from "../feature/task/taskSlice";
import { fetchTasks,addTask } from "../core/api";
function TaskComponent() {
    const dispatch = useDispatch();
    // const tasks = useSelector(selectAllTasks);
    const taskStatus = useSelector((state) => state.tasks.status);
    const error = useSelector((state) => state.tasks.error);

    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");

    useEffect(() => {
        if (taskStatus === "idle") {
            dispatch(fetchTasks());
        }
    }, [taskStatus, dispatch]);

    const handleAddTask = () => {
        if (task && priority) {
            dispatch(addTask({ task, priority: Number(priority) }));
            setTask("");
            setPriority("");
        }
    };

    // const handleDeleteTask = (id) => {
    //     dispatch(deleteTask(id));
    // };

    return (
        <div>
            <h2>Task Manager</h2>

            {/* Input Fields */}
            <div>
                <input
                    type="text"
                    placeholder="Task name"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Priority"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>

            {/* Task List */}
            <h3>Task List</h3>
            {taskStatus === "loading" && <p>Loading tasks...</p>}
            {taskStatus === "failed" && <p>Error: {error}</p>}
            {/* <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <strong>{task.task}</strong> - Priority: {task.priority}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul> */}
        </div>
    );
}

export default TaskComponent;
