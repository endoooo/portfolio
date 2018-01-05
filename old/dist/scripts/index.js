'use strict';

var bodyEl = document.body;
var menuOpenButtonEl = document.getElementById('menu-open-button');
var menuCloseButtonEl = document.getElementById('menu-close-button');

var toggleMenu = function toggleMenu(e) {
  e.preventDefault();
  bodyEl.classList.toggle('has-menu-active');
};

menuOpenButtonEl.addEventListener('click', toggleMenu);
menuCloseButtonEl.addEventListener('click', toggleMenu);