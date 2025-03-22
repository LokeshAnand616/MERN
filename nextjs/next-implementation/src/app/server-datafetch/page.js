
export default async function UserData(){
    await new Promise((resolve)=>setTimeout(resolve,3000))
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    return(
        <>
            <ul>
                {data.map((todo)=>(
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}