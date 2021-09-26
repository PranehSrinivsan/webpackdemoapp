import {op} from './index';
import {Listitem} from './jsfile1';

export function list(){//Helpers
  var template = Handlebars.compile(op);
  
  var elements = template(Listitem);
  
  document.getElementById('todolist').innerHTML += elements;
}