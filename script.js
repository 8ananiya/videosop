// script.js

// Example of fade in animation on page load

document.addEventListener('DOMContentLoaded', function() {

    let fadeEls = document.querySelectorAll('.fadeIn');
  
    for (let i = 0; i < fadeEls.length; i++) {
      fadeEls[i].classList.add('animated', 'fadeIn');
    }
  
  });
  
  
  // Handle form submission
  
  let signupForm = document.querySelector('#signup-form);
  
  signupForm.addEventListener('submit', function(e) {
  
    e.preventDefault();
    
    // Send form data to server
    // ...
  
    // Redirect to homepage
    window.location = '/index.html';
  
  });