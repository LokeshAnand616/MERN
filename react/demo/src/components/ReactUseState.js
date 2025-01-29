import {useState} from 'react';
function ReactUseState(){
    const [value,setValue]=useState('');
    const [list,setList] = useState([]);
    function handleChange(e){
        setValue(e.target.value);
    }
    function handleClick(e){
        setList([...list,value]);
    }
    return(
        <>
        <input
        type='text'
        value={value}
        onChange={handleChange}
        />
        <button onClick={handleClick}>add</button>
        <ul>
            {list.map((curr,index)=>(
                <li key={index}>{curr}</li>
            ))}
        </ul>
        </>
    );
}
export default ReactUseState;