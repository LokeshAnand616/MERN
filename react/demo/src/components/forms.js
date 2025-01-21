import React, { useState } from 'react';

const FormPage = () => {
  // State to store form inputs
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agree: false
  });

  // State to store error messages
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle changes for form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Validate form fields
  const validate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.username) {
      formErrors.username = 'Username is required';
      isValid = false;
    }

    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted successfully with data:', formData);
      // Reset the form after successful submission
      setFormData({
        username: '',
        email: '',
        password: '',
        agree: false
      });
    }
  };

  // Reset form fields
  const handleReset = () => {
    setFormData({
      username: '',
      email: '',
      password: '',
      agree: false
    });
    setErrors({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <h1>React Form Exploration</h1>

      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
        </div>

        {/* Agree to Terms Checkbox */}
        <div>
          <label htmlFor="agree">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
            />
            Agree to Terms and Conditions
          </label>
        </div>

        {/* Submit and Reset Buttons */}
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default FormPage;
