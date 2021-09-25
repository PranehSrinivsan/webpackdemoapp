import './styles/main.css';
import './styles/button.css';
import './styles/div.css';
import {getItems} from './file1';

export var op =" <ul><li class='in'>{{task}} {{cat}} {{date}}<i class='fas ballot-check'></i> <input type='checkbox'> </li></ul>"//innerHTML

document.addEventListener("submit",HandleEvent);//Selectors

function HandleEvent(e){//Handlers
    e.preventDefault();

    getItems();

    document.getElementById("list").reset();
}