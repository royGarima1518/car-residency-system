// const express = require('express');
// const app = express();

// app.get('/check-availability', (req, res) => {
//   const name = req.query.name;
//   const slot = req.query.slot;

//   // Check if the parking slot is available or not
//   // ...

//   // Return a response in JSON format
//   res.json({ available: true });
// });

// app.listen(3000, () => {
//   console.log('Server listening on port 3000');
// });


// function checkAvailability() {
//   const name = document.getElementById("name").value;
//   const slot = document.getElementById("slot").value;

//   // Make an HTTP request to the server to check the availability of the parking slot
//   fetch(`/check-availability?name=${name}&slot=${slot}`)
//     .then(response => response.json())
//     .then(data => {
//       if (data.available) {
//         alert("Parking slot is available!");
//       } else {
//         alert("Parking slot is not available!");
//       }
//     })
//     .catch(error => {
//       console.error(error);
//       alert("An error occurred while checking the availability of the parking slot.");
//     });
// }


function getAvailability() {
  fetch('/parking-availability/A1')
    .then(response => response.json())
    .then(data => updateStatus(data));
}

function updateStatus(status) {
  const availabilityEl = document.getElementById('availability');
  if (status === 'available') {
    availabilityEl.textContent = 'Available';
    availabilityEl.classList.add('available');
    availabilityEl.classList.remove('unavailable');
  } else {
    availabilityEl.textContent = 'Unavailable';
    availabilityEl.classList.add('unavailable');
    availabilityEl.classList.remove('available');
  }
}

// Call getAvailability() when the page loads
window.addEventListener('load', getAvailability);

