const container = document.getElementById('container');
const button_primary = document.querySelector('button.primary');
const button_secondary = document.querySelector('button.secondary');

button_primary.addEventListener('click', () => {
   window.location.pathname = '/pages/not-found.html';
});

button_secondary.addEventListener('click', () => {
   window.location.pathname = '/pages/not-found.html';
});
