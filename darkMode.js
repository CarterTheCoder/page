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
    // Confirmation window for light mode (I am not responsible for eye damage)
    confirmWindow = window.confirm('Are you sure you want to enable light mode? By continuing you agree that I cannot be held liable for spontaneous combustion of the eyes.')
    if (confirmWindow) {
        document.body.style.backgroundColor = 'white';
    } else {
        window.alert('Good choice.');
    }
});