function Input({ onHandleChange, task }) { 
    return (
      <>
        <label htmlFor="task">Task:</label>
        <input type="text" id="task" onChange={onHandleChange} value={task} />
      </>
    );
  }
  
  export default Input;
  