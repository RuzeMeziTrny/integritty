'use strict';

const showHideNav = () => {
  const navBar = document.querySelector('#nav-bar');
  navBar.classList.toggle("hidden")
}

const navMenu = document.querySelector('#nav-menu');
navMenu.addEventListener('click', showHideNav);
