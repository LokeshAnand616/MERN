import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setField, setErrors, resetForm } from "../features/form/formSlice";
import { selectErrors, selectFormData } from "../features/form/formSlice";
import { useFormValidation } from "./useFormValidation";
import InputField from "../components/InputField";
import Button from "../components/ButtonField";
import "../assets/UserForm.css";

const UserRegistrationForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector(selectFormData);
  const errors = useSelector(selectErrors);
  const { validateField } = useFormValidation();
  console.log(formData)

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    dispatch(setField({ field, value }));
    if (errors[field]) {
      dispatch(setErrors({ ...errors, [field]: "" }));
    }
    if (event.type === "blur") {
      const errorMessage = validateField(field, value);
      dispatch(setErrors({ ...errors, [field]: errorMessage }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { location, ...otherFields } = formData;
    if (Object.values(otherFields).some((field) => field.trim() === "")) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }  
    if (Object.values(errors).some((err) => err)) {
      alert("Form has errors, please fix them");
      return;
    } else  {
      alert("The form is submitted successfully");
    }
    dispatch(resetForm())
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <InputField
        label="Full Name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange("fullName")}
        onBlur={handleInputChange("fullName")}
        error={errors.fullName}
      />
      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={handleInputChange("email")}
        onBlur={handleInputChange("email")}
        error={errors.email}
      />
      <InputField
        label="Date of Birth"
        type="date"
        value={formData.dateOfBirth}
        onChange={handleInputChange("dateOfBirth")}
        onBlur={handleInputChange("dateOfBirth")}
        error={errors.dateOfBirth}
      />
      <InputField
        label="Location (Optional)"
        type="text"
        value={formData.location}
        onChange={handleInputChange("location")}
        onBlur={handleInputChange("location")}
        error={errors.location}
      />
      <Button text={"Register"} type="submit" />
    </form>
  );
};

export default UserRegistrationForm;
