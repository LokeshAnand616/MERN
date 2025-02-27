const validateEmail = (email) => {
  const emailRegex =
    /^(?!.*\.\.)[a-zA-Z0-9._%+-]{1,64}@[a-zA-Z0-9.-]{1,255}\.[a-zA-Z]{2,63}$/;
  return emailRegex.test(email) ? "" : "Invalid email format";
};

const validateAge = (dateOfBirth) => {
  if (!dateOfBirth) return "Date of birth is required";

  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  return age > 18 ||
    (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)))
    ? ""
    : "You must be at least 18 years old";
};

const validateLocation = (location) => {
  if (!location) return "";
  return /^[a-zA-Z\s,]+$/.test(location)
    ? ""
    : "Location must contain only letters, spaces, and commas";
};

const validateFullName = (fullName) => {
  return fullName.trim().length >= 2
    ? ""
    : "Full Name must be at least 2 characters";
};

export const useFormValidation = () => {
  const validateField = (field, value) => {
    let errorMessage = "";
    switch (field) {
      case "fullName":
        errorMessage = validateFullName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "dateOfBirth":
        errorMessage = validateAge(value);
        break;
      case "location":
        errorMessage = validateLocation(value);
        break;
      default:
        errorMessage = "";
    }
    return errorMessage;
  };
  return { validateField};
}; 