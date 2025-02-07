function Select({props,onChangeSelect}) {
  return (
    <>
      <select name="priority" id="priority" onChange={onChangeSelect}>
        {props.map((item)=>(
            <option value={item}>{item}</option>
        ))}
      </select>
    </>
  );
}
export default Select;
