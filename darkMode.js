const body = document.body;
const toggleButton = document.getElementById('darkModeButton');

toggleButton.addEventListener('click', function() {
    
    if (body.style.backgroundColor === 'white') {
        body.style.backgroundColor = 'teal';
        toggleButton.innerText = 'Switch to Light Mode'
    } else {
        body.style.backgroundColor = 'white';
        toggleButton.innerText = 'Switch to Dark Mode'
    }
  });