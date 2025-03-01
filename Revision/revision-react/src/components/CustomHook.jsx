import React from "react";
import useFetch from "./useFetch";

const CustomHook = () => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div>
      <h1>Custom Hook: useFetch</h1>

      {loading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <ul>
        {data &&
          data.slice(0, 5).map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default CustomHook;
