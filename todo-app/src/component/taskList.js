import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllTasks } from "../feature/task/taskSlice";
import { Button } from "react-bootstrap";
import { deleteTask } from "../api/CRUD";
import TaskModal from "./modal";

function TaskList() {
    const tasks = useSelector(selectAllTasks);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [editTask, setEditTask] = useState(null);

    const handleEdit = (task) => {
        setEditTask(task);
        setShowModal(true);
    };

    return (
        <>
            <div>
                <table className="table table-hover table-responsive" style={{ borderCollapse: "collapse" }}>
                    <thead className="table-dark">
                        <tr>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((item, index) => (
                            <tr key={index}>
                                <td>{item.Task}</td>
                                <td>{item.Priority}</td>
                                <td>
                                    <Button variant="danger" onClick={() => dispatch(deleteTask({ id: item.id }))}>
                                        Delete
                                    </Button>
                                    &nbsp;
                                    <Button variant="warning" onClick={() => handleEdit(item)}>
                                        Modify
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {showModal && <TaskModal show={showModal} handleClose={() => setShowModal(false)} editTask={editTask} />}
        </>
    );
}

export default TaskList;
