import { useRef } from "react";
import SearchButton from "./SearchButton";
import SearchComponent from "./SearchComponent";
function RefComponent(){
    const searchInput = useRef(null);
    return(
        <>
            <SearchComponent refvalue={searchInput}/>
            <SearchButton onClick={()=>{searchInput.current.focus()}} />
        </>
    );
}

export default RefComponent;