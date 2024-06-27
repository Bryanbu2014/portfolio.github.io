document.getElementById('scrollToTop').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('#endresult').scrollIntoView({ behavior: 'smooth' });
});