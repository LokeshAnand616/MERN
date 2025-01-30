import { useState, useTransition } from "react";

function ReactUseTransition(){
    const items = Array.from({length:10000},((_,i)=>`items ${i+1}`));
    const [filteredItems,setFilteredItems]=useState(items);
    const [isPending,startTransition]=useTransition();
        function handleSearch(e){
            const query = e.target.value.toLowerCase();
            startTransition(()=>{
                setFilteredItems(items.filter(x=>x.toLowerCase().includes(query)))
        })
        }
    
    return(
        <>
        <input type="text" onChange={handleSearch}/>
        <ul>
            {isPending&& <h1>Loading</h1>}
            {filteredItems.map((x,i)=>{
              return  <>
                    <li key={i}>{x}</li>
                </>
})}
        </ul>
        </>
    );
}

export default ReactUseTransition;