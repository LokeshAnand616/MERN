import React, { useState } from "react";

const UseStateScenario=()=>{
    const [data, setData] = useState({name:"",age:""});
    const handleChange=(e)=>{
        const {name, value} = e.target;
        setData(prev=>({...prev,[name]:value}));
        console.log(data)
    }
    console.log(data)
    return(
        <>
            <input type="text" value={data.name} name="name" onChange={handleChange}/>
            <input type="text" value={data.age} name="age" onChange={handleChange}/>
        </>
    );
}

export default UseStateScenario;