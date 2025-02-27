import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: {
      fullName: "",
      email: "",
      dateOfBirth: "",
      location: "",
    },
    errors: {}, 
  },
  reducers: {
    setField: (state, action) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    setErrors: (state, action) => {
      state.errors = { ...state.errors, ...action.payload }; 
    },
    resetForm: (state) => {
      state.formData = { fullName: "", email: "", dateOfBirth: "", location: "" };
      state.errors = {}; 
    },
  },
});

export const selectFormData = (state) => state.form.formData;
export const selectErrors = (state) => state.form.errors;

export const { setField, setErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
