export default function ListTask( {alltask} ) {

    return (
        <ul>
           {alltask.map((curr,index)=>(
            <AddDeleteTask key={index} curtask={curr}/>
           ))}
        </ul>
    );
}

function AddDeleteTask({curtask}){
    console.log(curtask);

    return(
        <>
        <input
        type="checkbox"
        value={curtask.text}
        ></input>
        {curtask.text}
        </>
    );
}


