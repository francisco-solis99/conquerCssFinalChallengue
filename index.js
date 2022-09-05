const btnOpen = document.querySelector('.btn__nav');
const menuToToggle = document.querySelector('.nav__list-primary');

btnOpen.addEventListener('click', () => menuToToggle.classList.toggle('active'));
