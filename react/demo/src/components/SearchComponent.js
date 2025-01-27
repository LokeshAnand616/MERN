//27th january
function SearchComponent({refvalue}){
    return(
        <>  
            <label htmlFor="search">Search</label>

            <input type="search" id="search" ref={refvalue}></input>
        </>
    );
}

export default SearchComponent;