import Modal from "./Modal";
import { useState } from "react";
function Modalpage(){
    const [viewer , setModal] = useState(false);
    function handleClick(){
        setModal(!viewer);
    }
    return(
        <>
            <button onClick={handleClick}>modal </button>
            {viewer?<Modal value={'welcome'} fn={setModal}/>:<h1>click the button</h1>}
        </>
    );
}

export default Modalpage