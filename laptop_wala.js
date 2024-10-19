document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Validation logic goes here
  
  // Example: Display form data in console
  const formData = new FormData(this);
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  
  // Send form data to the server
  fetch('your_server_url', {    // replace the srver url with actual server.
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // assuming server returns JSON
  })
  .then(data => {
      console.log('Server response:', data);
      // Handle server response if needed
  })
  .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
      // Handle errors
  });
});
