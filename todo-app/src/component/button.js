function CustomButton({ props, onHandleClick, variant = "primary" }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onHandleClick}>
      {props}
    </button>
  );
}

export default CustomButton;
