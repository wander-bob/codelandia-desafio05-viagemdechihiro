const button_back = document.querySelector('button.back');
button_back.addEventListener('click', () => {
   console.log('back');
   window.location.pathname = '/';
});
