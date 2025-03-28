'use client'
import { SIGNUP_USER } from "@/graphql/Mutation/signupMutation";
import { useMutation } from "@apollo/client";
import { useState } from "react";

const SignupForm = () => {
  const [formData, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [createUser, { data, loading, error }] = useMutation(SIGNUP_USER);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error occurred while signing up</h1>;

  const handleChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await createUser({
        variables: {
          userData: {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirmPassword: formData.confirmPassword,
            role: formData.role,
          },
        },
      });
      console.log("User created successfully:", response.data);
      alert("Signup successful!");

      setData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
      });
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>User Name</label>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor='password'>Password</label>
      <input
        type='password'
        name='password'
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label htmlFor='confirmPassword'>Confirm Password</label>
      <input
        type='password'
        name='confirmPassword'
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <label htmlFor='role'>Role</label>
      <select
        name='role'
        value={formData.role}
        onChange={handleChange}
        required
      >
        <option value=''>Select a role</option>
        <option value='ADMIN'>Admin</option>
        <option value='USER'>User</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default SignupForm;
