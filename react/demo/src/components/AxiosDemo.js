import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

function AxiosDemo() {
  const [listItems, setListItems] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => setListItems(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const newItem = {
      userId: formData.get('userId'),
      title: formData.get('title'),
      completed: formData.get('completed') === 'true'
    };
    
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newItem);
      setListItems([response.data, ...listItems]);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <>
      <h2>Todo List</h2>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor='userId'>UserId</label>
        <input type='text' name='userId' required />
        
        <label htmlFor='title'>Title</label>
        <input type='text' name='title' required />
        
        <label>Status</label>
        <input type='radio' name='completed' value='true' /> Completed
        <input type='radio' name='completed' value='false' /> Not Completed
        
        <button type='submit'>Submit</button>
      </form>
      
      <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>User ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Completed</th>
          </tr>
        </thead>
        <tbody>
          {listItems.map((item, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.userId}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.title}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{item.completed ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AxiosDemo;