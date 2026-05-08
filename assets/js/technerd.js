const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-navigation');

if (menuButton && nav) {
  menuButton.onclick = function () {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open');
  };
}
