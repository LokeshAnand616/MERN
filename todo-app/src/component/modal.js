import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Input from "../component/input";
import Select from "../component/select";
import CustomButton from "../component/button";
import { addTask, updateTask } from "../api/CRUD";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Modal } from "bootstrap";

function TaskModal({ show, handleClose, editTask }) {
  const [task, setTask] = useState(editTask?.Task || "");
  const [priority, setPriority] = useState(editTask?.Priority || "");
  const priorityList = ["high", "medium", "low"];
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  const modalInstance = useRef(null);

  // Initialize the Bootstrap modal instance
  useEffect(() => {
    if (modalRef.current) {
      modalInstance.current = new Modal(modalRef.current, {
        backdrop: "static",
        keyboard: false,
      });
    }
  }, []);

  // Show or hide modal based on `show` prop
  useEffect(() => {
    if (modalInstance.current) {
      if (show) {
        modalInstance.current.show();
      } else {
        modalInstance.current.hide();
        removeBackdrop();
      }
    }
  }, [show]);

  // Reset state when `editTask` changes
  useEffect(() => {
    setTask(editTask?.Task || "");
    setPriority(editTask?.Priority || "");
  }, [editTask]);

  // Handle removing Bootstrap modal backdrop
  function removeBackdrop() {
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((backdrop) => backdrop.remove());
  }

  // Handle form input changes
  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSelect(e) {
    setPriority(e.target.value);
  }

  // Handle submitting form (Add / Update Task)
  function handleSubmit() {
    if (task && priority) {
      if (editTask) {
        dispatch(updateTask({ id: editTask.id, task, priority }));
      } else {
        dispatch(addTask({ task, priority }));
      }

      // Reset form fields
      setTask("");
      setPriority("");

      closeModal();
    }
  }

  // Close modal and remove backdrop
  function closeModal() {
    if (modalInstance.current) {
      modalInstance.current.hide();
    }
    removeBackdrop();
    handleClose();
  }

  return (
    <div className="modal fade" ref={modalRef} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {editTask ? "Edit Task" : "Add Task"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
          </div>

          <div className="modal-body">
            <Input task={task} onHandleChange={handleChange} />
            <Select
              props={priorityList}
              onChangeSelect={handleSelect}
              value={priority}
            />
          </div>

          <div className="modal-footer">
            <CustomButton
              props="Close"
              variant="secondary"
              onHandleClick={closeModal}
            />
            <CustomButton
              props={editTask ? "Update" : "Add"}
              onHandleClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
