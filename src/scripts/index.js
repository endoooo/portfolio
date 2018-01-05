const bodyEl = document.body;
const menuOpenButtonEl = document.getElementById('menu-open-button');
const menuCloseButtonEl = document.getElementById('menu-close-button');

const toggleMenu = (e) => {
  e.preventDefault();
  bodyEl.classList.toggle('has-menu-active');
};

menuOpenButtonEl.addEventListener('click', toggleMenu);
menuCloseButtonEl.addEventListener('click', toggleMenu);
