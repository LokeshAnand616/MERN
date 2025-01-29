import { useEffect, useState } from "react";

function ReactUseEffect() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const userData = await response.json();
                setUsers(userData); // Now correctly sets the state
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        }
        fetchUsers();
        return()=>{
            setUsers([]);
        }
    }, []); // Runs only on component mount

    return (
        <>
            {users.map((curr) => (
                <p key={curr.id}>{curr.name}</p> // Displaying user name instead of object
            ))}
        </>
    );
}

export default ReactUseEffect;
