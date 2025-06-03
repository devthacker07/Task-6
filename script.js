const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission

  // Clear messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  successMessage.textContent = '';

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    valid = false;
  }

  // Email validation
  if (emailInput.value.trim() === '') {
    emailError.textContent = 'Email is required.';
    valid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim() === '') {
    messageError.textContent = 'Message cannot be empty.';
    valid = false;
  }

  if (valid) {
    successMessage.textContent = 'Form submitted successfully!';
    form.reset(); // Reset fields
  }
});
