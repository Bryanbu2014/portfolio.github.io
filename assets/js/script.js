document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});



// document.getElementById('scrollToCv').addEventListener('click', function(event) {
//   event.preventDefault();
//   document.querySelector('#cv').scrollIntoView({ behavior: 'smooth' });
// });

// document.getElementById('scrollToCvSub').addEventListener('click', function(event) {
//   event.preventDefault();
//   document.querySelector('#cv-sub').scrollIntoView({ behavior: 'smooth' });
// });

document.getElementById('emailLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link action
    var email = this.getAttribute('data-email'); // Get the email address from data attribute
    navigator.clipboard.writeText(email).then(function() {
      // On success
      alert('Email address copied: ' + email);
    }, function(err) {
      // On failure
      console.error('Could not copy text: ', err);
    });
});  
