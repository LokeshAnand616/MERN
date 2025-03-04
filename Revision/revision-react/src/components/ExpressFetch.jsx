import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000";

function ExpressFetch() {
  const [response, setResponse] = useState("");
  const [cookie, setCookie] = useState("");

  // GET request
  const fetchData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/data`, { withCredentials: true });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // POST request
  const sendData = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/data`,
        { name: "React User", age: 22 },
        { withCredentials: true }
      );
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // PUT request
  const updateData = async () => {
    try {
      const res = await axios.put(`${API_BASE_URL}/data/1`, {}, { withCredentials: true });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // DELETE request
  const deleteData = async () => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/data/1`, { withCredentials: true });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Set Cookie
  const setCookieData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/set-cookie`, { withCredentials: true });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Read Cookie
  const getCookieData = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/read-cookie`, { withCredentials: true });
      setCookie(res.data.cookie);
    } catch (error) {
      console.error(error);
    }
  };

  // Protected route with Basic Authentication
  const getProtectedData = async () => {
    try {
      const credentials = btoa("admin:password123"); // Encode Basic Auth
      const res = await axios.get(`${API_BASE_URL}/protected`, {
        headers: { Authorization: `Basic ${credentials}` },
        withCredentials: true
      });
      setResponse(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>React + Express API Integration</h1>

      <button onClick={fetchData}>GET Data</button>
      <button onClick={sendData}>POST Data</button>
      <button onClick={updateData}>PUT Data</button>
      <button onClick={deleteData}>DELETE Data</button>
      <button onClick={setCookieData}>Set Cookie</button>
      <button onClick={getCookieData}>Read Cookie</button>
      <button onClick={getProtectedData}>Protected Route</button>

      <h3>Response:</h3>
      <pre>{JSON.stringify(response, null, 2)}</pre>

      <h3>Cookie:</h3>
      <pre>{cookie}</pre>
    </div>
  );
}

export default ExpressFetch;
