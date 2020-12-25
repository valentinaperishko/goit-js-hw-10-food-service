import menu from './menu.json';
import templates from './templates/templates.hbs'
import './theme.js';
import './styles.css';

const menuList = document.querySelector('.js-menu');

const makeMenu = templates(menu);
menuList.insertAdjacentHTML('beforeend', makeMenu);
