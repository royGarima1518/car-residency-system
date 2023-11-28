const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = form.elements['username'].value;
  const password = form.elements['password'].value;
  
  
  // If the credentials are not valid, you can display an error message
  const errorMessage = document.createElement('p');
  errorMessage.classList.add('error');
  errorMessage.textContent = 'Invalid username or password';
  form.appendChild(errorMessage);
});
