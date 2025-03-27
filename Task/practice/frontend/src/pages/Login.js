import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../api/graphql/queries/loginData";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginUser, { data, loading, error }] = useMutation(LOGIN_USER);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await loginUser({
        variables: {
          loginData: {
            email: formData.email,
            password: formData.password
          }
        }
      });

      console.log("Login Successful:", result.data);

      if (result.data && result.data.loginUser.token) {
        localStorage.setItem("token", result.data.loginUser.token);
      }
    } catch (err) {
      console.error("Login Error:", err);
    }
  };

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type='submit' disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {error && <p className='error'>Error: {error.message}</p>}
      {data && data.loginUser && (
        <p className='success'>
          Login Successful! Welcome {data.loginUser.user.name}
        </p>
      )}
    </div>
  );
};

export default Login;
