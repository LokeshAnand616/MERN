// Regex Patterns for Validation
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; 
const nameRegex = /^[A-Za-z\s]+$/; // Only letters and spaces

// Sign In Validation
document.getElementById('signInForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  let email = document.getElementById('signInEmail').value;
  let password = document.getElementById('signInPassword').value;
  let valid = true;

  // Clear previous error messages
  document.getElementById('signInEmailError').innerText = '';
  document.getElementById('signInPasswordError').innerText = '';

  // Email validation
  if (!email) {
    document.getElementById('signInEmailError').innerText = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById('signInEmailError').innerText = 'Please enter a valid email.';
    valid = false;
  }

  // Password validation
  if (!password) {
    document.getElementById('signInPasswordError').innerText = 'Password is required.';
    valid = false;
  } else if (!passwordRegex.test(password)) {
    document.getElementById('signInPasswordError').innerText = 'Password must be at least 6 characters and contain both letters and numbers.';
    valid = false;
  }

  if (valid) {
    alert('Sign In Successful');
  }
});

