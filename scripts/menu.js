const MENU_OPEN_CLASS = 'open';
const MENU_CLOSE_CLASS = 'close';
const NAVBAR_OPEN_CLASS = 'open';

const $menu = document.querySelector('[data-js="menu"]');
const $navbar = document.querySelector('[data-js="navbar"]');

function handleClick() {
  const isOpen = $menu.classList.contains(MENU_OPEN_CLASS);

  const classToAddInMenu = isOpen ? MENU_CLOSE_CLASS : MENU_OPEN_CLASS;
  const classToRemoveInMenu = isOpen ? MENU_OPEN_CLASS : MENU_CLOSE_CLASS;

  $navbar.classList.toggle(NAVBAR_OPEN_CLASS);
  $menu.classList.add(classToAddInMenu);
  $menu.classList.remove(classToRemoveInMenu);
}

$menu.addEventListener('click', handleClick);
