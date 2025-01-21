// Regex Patterns for Validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, with letters and numbers
const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

// Sign Up Validation
document.getElementById('signUpForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission for validation

  let name = document.getElementById('signUpName').value;
  let email = document.getElementById('signUpEmail').value;
  let password = document.getElementById('signUpPassword').value;
  let confirmPassword = document.getElementById('signUpConfirmPassword').value;
  let genderMale = document.getElementById('genderMale');
  let genderFemale = document.getElementById('genderFemale');
  
  let valid = true;

  // Clear previous error messages
  document.getElementById('signUpNameError').innerText = '';
  document.getElementById('signUpEmailError').innerText = '';
  document.getElementById('signUpPasswordError').innerText = '';
  document.getElementById('signUpConfirmPasswordError').innerText = '';

  // Full Name validation
  if (!name) {
    document.getElementById('signUpNameError').innerText = 'Full name is required.';
    valid = false;
  } else if (!nameRegex.test(name)) {
    document.getElementById('signUpNameError').innerText = 'Full name should only contain letters and spaces.';
    valid = false;
  }

  // Email validation
  if (!email) {
    document.getElementById('signUpEmailError').innerText = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('signUpEmailError').innerText = 'Please enter a valid email.';
    valid = false;
  }
  
  //Gender validation
  if (!(genderMale.checked || genderFemale.checked)) {
    document.getElementById('genderError').innerText = 'Please select a gender';
    valid = false;
  }

  // Password validation
  if (!password) {
    document.getElementById('signUpPasswordError').innerText = 'Password is required.';
    valid = false;
  } else if (!passwordRegex.test(password)) {
    document.getElementById('signUpPasswordError').innerText = 'least 6 characters and contain both letters and numbers.';
    valid = false;
  }

  // Confirm Password validation
  if (!confirmPassword) {
    document.getElementById('signUpConfirmPasswordError').innerText = 'Please confirm your password.';
    valid = false;
  } else if (confirmPassword !== password) {
    document.getElementById('signUpConfirmPasswordError').innerText = 'Passwords do not match.';
    valid = false;
  }

  // If all validations pass, submit form
  if (valid) {
    alert('Sign Up Successful');
  }
});
