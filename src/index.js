import './styles/main.css';
import './styles/button.css';

document.addEventListener("submit",HandleEvent);//Selectors

var op =" <ul><li class='in'>{{task}} {{cat}} {{date}}<i class='fas ballot-check'></i> <input type='checkbox'> </li></ul>"//innerHTML
const Listitem = {};