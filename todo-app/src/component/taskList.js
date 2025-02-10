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
  const [completedTasks, setCompletedTasks] = useState({});

  const handleEdit = (task) => {
    setEditTask(task);
    setShowModal(true);
  };

  const handleCheckboxChange = (taskId) => {
    setCompletedTasks((prev) => ({
      ...prev,
      [taskId]: !prev[taskId],
    }));
  };
  console.log(completedTasks);

  return (
    <>
      <div>
        <table
          className="table table-hover table-responsive"
          style={{ borderCollapse: "collapse" }}
        >
          <thead className="table-dark">
            <tr>
              <th>Task</th>
              <th>Priority</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((item, index) => (
              <tr key={index}>
                <td
                  style={
                    completedTasks[item.id]
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  {item.Task}
                </td>
                <td
                  style={
                    completedTasks[item.id]
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  {item.Priority}
                </td>
                <td>
                  <Button
                    disabled={completedTasks[item.id]}
                    variant="danger"
                    onClick={() => dispatch(deleteTask({ id: item.id }))}
                  >
                    Delete
                  </Button>
                  &nbsp;
                  <Button
                    disabled={completedTasks[item.id]}
                    variant="warning"
                    onClick={() => handleEdit(item)}
                  >
                    Modify
                  </Button>
                </td>
                <td>
                  <input
                    type="checkbox"
                    id={`completed-${item.id}`}
                    name="completed"
                    value="Completed"
                    checked={completedTasks[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                  <label htmlFor={`completed-${item.id}`}> Completed</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <TaskModal
          show={showModal}
          handleClose={() => setShowModal(false)}
          editTask={editTask}
        />
      )}
    </>
  );
}

export default TaskList;
