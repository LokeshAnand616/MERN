//27th january
import React, { useState, useEffect } from "react";

// Simulate user data
const fetchUserData = () => {
  return Array.from({ length: 1000 }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));
};

function Users({ users }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch user data on mount
  useEffect(() => {
    setUsers(fetchUserData());
  }, []);

  // Callback function for Profiler
  const onRenderCallback = (
    id, // Profiler tree id
    phase, // "mount" or "update"
    actualDuration, // Time spent rendering the Profiler and its descendants
    baseDuration, // Estimated time to render without memoization
    startTime, // When React started rendering this update
    commitTime, // When React committed this update
    interactions // Interactions involved in this update
  ) => {
    console.log(`Profiler ID: ${id}`);
    console.log(`Phase: ${phase}`);
    console.log(`Actual Duration: ${actualDuration}ms`);
    console.log(`Base Duration: ${baseDuration}ms`);
    console.log(`Start Time: ${startTime}ms`);
    console.log(`Commit Time: ${commitTime}ms`);
    console.log(`Interactions:`, interactions);
  };

  // Filter users based on search input
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Profiler Example</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          fontSize: "16px",
          marginBottom: "10px",
          width: "100%",
        }}
      />
      <React.Profiler id="Dashboard" onRender={onRenderCallback}>
        <Users users={filteredUsers} />
      </React.Profiler>
    </div>
  );
}

export default Dashboard;
