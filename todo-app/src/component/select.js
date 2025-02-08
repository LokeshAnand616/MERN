function Select({props,onChangeSelect}) {
  return (
    <>
      <select name="priority" id="priority" onChange={onChangeSelect}>
            <option value={"Priority"} selected disabled>Priority</option>
        {props.map((item)=>(
            <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
}
export default Select;
