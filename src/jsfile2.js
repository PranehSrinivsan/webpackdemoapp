import {op} from './index';
import {Listitem} from './jsfile1';

export function list(){//Helpers
  var template = Handlebars.compile(op);
  
    var elements = template(Listitem);
      /*{
      task: Listitem.task,
      cat: Listitem.cat,
      date: Listitem.date});
       */
    document.getElementById('todolist').innerHTML += elements;
    alert("works");
}