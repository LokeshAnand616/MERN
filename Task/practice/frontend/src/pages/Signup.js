import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { CREATE_USER } from "../api/graphql/mutations/signupMutation";
import { v4 as uuidv4 } from "uuid";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [createUser, { data, loading, error: mutationError }] =
    useMutation(CREATE_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await createUser({
        variables: {
          userData: {
            id: uuidv4(), 
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword, 
          },
        },
      });

      console.log("Form Submitted:", formData);
      alert("Signup successful!");
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
      setError("");
    } catch (err) {
      console.error("Mutation Error:", err);
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "300px", margin: "50px auto", textAlign: "center" }}>
      <h2>Sign Up</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {mutationError && <p style={{ color: "red" }}>{mutationError.message}</p>}
      {loading && <p>Loading...</p>}
      {data && <p style={{ color: "green" }}>Signup successful!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{ width: "100%", margin: "5px 0", padding: "8px" }}
        />
        <button type="submit" style={{ width: "100%", padding: "10px", background: "blue", color: "white", border: "none" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
