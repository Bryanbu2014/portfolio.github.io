document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

function playVideo() {
    var iframe = document.querySelector('.responsive-iframe-vert');
    var thumbnail = document.querySelector('.video-thumbnail');
    
    // Update the iframe src to force autoplay. Adjust the URL as needed for your platform
    iframe.src += "&autoplay=1";
    
    // Hide the thumbnail
    thumbnail.style.display = 'none';
  }
  