import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskList from "../component/taskList";
import TaskModal from "../component/modal";
import Button from "../component/button";
import { fetchTasks } from "../api/CRUD";

function TaskComponent() {
  const taskStatus = useSelector((state) => state.tasks.status);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false); 

  useEffect(() => {
    if (taskStatus === "idle") {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  return (
    <>
      <Button props="Add Task" onHandleClick={() => setShowModal(true)} />  
      <TaskModal show={showModal} handleClose={() => setShowModal(false)} />
      <TaskList />
    </>
  );
}

export default TaskComponent;
