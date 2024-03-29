document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting (default behavior)
  
    // Get form values
    var name = document.querySelector('input[name="full-name"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var subject = document.querySelector('input[name="subject"]').value;
    var message = document.querySelector('textarea[name="message"]').value;
  
    // Check if all required fields are filled
    if (name && email && subject && message) {
      // Display SweetAlert with the captured information
      Swal.fire({
        icon: 'success',
        title: 'Message Sent',
        html:
          '<strong>Name:</strong> ' + name + '<br>' +
          '<strong>Email:</strong> ' + email + '<br>' +
          '<strong>Subject:</strong> ' + subject + '<br>' +
          '<strong>Message:</strong> ' + message,
        customClass: {
          popup: 'swal-custom-font'
        }
      }).then((result) => {
        if (result.isConfirmed) {
          // Reset the form
          document.getElementById('contactForm').reset();
        }
      });
    } else {
      // Display an error message if any required field is missing
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please fill in all required fields.',
        customClass: {
          popup: 'swal-custom-font',
          title: 'swal-custom-font',
          content: 'swal-custom-font',
          text: 'swal-custom-font',
        }
      });
    }
  })