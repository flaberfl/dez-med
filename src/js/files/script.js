// Подключение функционала "Чертогов Фрилансера"
import {
  isMobile
} from "./functions.js";
// Подключение списка активных модулей
import {
  flsModules
} from "./modules.js";



let mql = window.matchMedia('(max-width: 600px)');

document.querySelector(".mq-value").innerText = mql.matches;

console.log(mql);