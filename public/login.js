const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const residencyStatus = document.querySelector('input[name="residency"]:checked').value;
  
  if (residencyStatus === 'resident') {
    window.location.href = 'login_existing.html';
  } else if (residencyStatus === 'non-resident') {
    window.location.href = 'create_account.html';
  }
});


let attempts = 0;
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "Neil" && password === "1234") {
      alert("Login successful!");
      window.location.href = "residentuser.html";
    
    } else {
      // increment the number of attempts
      attempts++;
      // check if the user has exceeded the maximum number of attempts
      if (attempts >= 3 && attempts <= 5) {
        // redirect to session expired page
        window.location.href = 'session-expired.html';
      } else if (attempts > 5) {
        // redirect to create account page
        window.location.href = 'create-account.html';
      } else {
        // show error message
        alert('Invalid username or password.');
      }
    }
  } 


  // Add event listener for form submission
document.querySelector('form').addEventListener('submit', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
  
    // Get form data
    const formData = new FormData(event.target);
  
    // Make AJAX request to server to handle form submission
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/register');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      // Handle server response
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        if (response.success) {
          // Redirect to success page
          window.location.href = '/success';
        } else {
          // Display error message
          const errorElement = document.querySelector('.error');
          errorElement.innerText = response.message;
        }
      } else {
        // Display error message
        const errorElement = document.querySelector('.error');
        errorElement.innerText = 'An error occurred while submitting the form. Please try again later.';
      }
    };
    xhr.send(JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      vehicle_make: formData.get('vehicle_make'),
      vehicle_model: formData.get('vehicle_model'),
      license_plate: formData.get('license_plate'),
      parking_slot: formData.get('parking_slot'),
      date: formData.get('date'),
      time: formData.get('time')
    }));
  });
  
  