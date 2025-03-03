import React, { useState, useEffect } from "react";
import useFetch from "../Hooks/useFetch";

const EmployeeList = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5); 
  const { data, loading, error, fetchPaginatedData, totalPages } = useFetch(
    "http://localhost:5000/users"
  );

  useEffect(() => {
    fetchPaginatedData(page, limit);
  }, [page, limit]); 

  return (
    <div>
      <h2>Users List (Page {page}, Limit {limit})</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <ul>
        {data.length > 0 ? (
          data.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))
        ) : (
          <p>No data available</p>
        )}
      </ul>

      <div>
        <button
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => Math.max(1, prev - 1));
            setLimit((prevLimit) => Math.max(5, prevLimit - 5)); 
          }}
        >
          Previous
        </button>

        <button
          disabled={data.length < limit} 
          onClick={() => {
            setPage((prev) => prev + 1);
            setLimit((prevLimit) => prevLimit + 5); 
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EmployeeList;
