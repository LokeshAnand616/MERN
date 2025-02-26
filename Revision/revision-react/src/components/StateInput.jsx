import React,{useState} from "react";

const StateInput = ()=>{
    const [num,setNum] = useState(0);
    const handleChange=(e)=>{
        setNum(e.target.value +1)
        console.log("Old value increment",num)
    }
    console.log("current value",num)
    return(
        <>
            <input type="number" value={num} onChange={handleChange}/>
            {num}
        </>
    );
}

export default StateInput;