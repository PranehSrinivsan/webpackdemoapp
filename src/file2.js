import {op} from './index';
import {getItems} from './file1';

export function list(){//Helpers
  var template = Handlebars.compile(op);
  
    var elements=template(getItems);
      /*{
      task: Listitem.task,
      cat: Listitem.cat,
      date: Listitem.date});
       */
    document.getElementById('todolist').innerHTML += elements;
    alert("works");
}