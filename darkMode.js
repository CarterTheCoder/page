// These are set to constants, because they should not change
const darkModeButton = document.getElementById('darkModeButton');
const lightModeButton = document.getElementById('lightModeButton');
const body = document.body;

darkModeButton.addEventListener('click', function() {
    console.log('Dark mode event triggered');
    document.body.style.backgroundColor = 'black';
});

lightModeButton.addEventListener('click', function() {
    console.log('Light mode event triggered');
    document.body.style.backgroundColor = 'white';
});