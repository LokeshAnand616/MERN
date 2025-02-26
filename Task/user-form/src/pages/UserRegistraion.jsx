import React, {useState } from "react";
import { validateForm } from "./validateForm";
import InputField from "../components/InputField";
import Button from "../components/ButtonField";
import ProgressBar from "../components/ProgressBar";
import "/home/asplap1006/Documents/MERN/Task/user-form/src/assets/UserRegistration.css";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  console.log(formData)

  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    const { error, strength } = validateForm(name, value, formData);

    setErrors({ ...errors, [name]: error });

    if (name === "password") {
      setPasswordStrength(strength || 0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).some((err) => err)) {
      alert("Form has errors, please fix them");
      return;
    } else {
      alert("The form is submitted successfully");
    }
    console.log(formData);
    setFormData({ userName: "", email: "", password: "", confirmPassword: "" });
    setErrors({});
    setPasswordStrength(0);
  };

  return (
    <div className='form'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label='User Name'
          type='text'
          value={formData.userName}
          onChange={handleChange}
          name='userName'
          error={errors.userName}
        />
        <InputField
          label='Email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          name='email'
          error={errors.email}
        />
        <InputField
          label='Password'
          type='password'
          value={formData.password}
          onChange={handleChange}
          name='password'
          error={errors.password}
        />
        {passwordStrength ? (
          <ProgressBar strength={passwordStrength} />
        ) : (
          ""
        )}{" "}
        <InputField
          label='Confirm Password'
          type='password'
          value={formData.confirmPassword}
          onChange={handleChange}
          name='confirmPassword'
          error={errors.confirmPassword}
        />
        <Button text='Login' />
      </form>
    </div>
  );
};

export default UserRegistration;
