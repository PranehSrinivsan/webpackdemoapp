import {list} from './jsfile2';

const Listitem = {};
 
function  getItems()
{
  Listitem.task = document.getElementById('todotask').value;
  Listitem.cat = document.getElementById('selectedcategory').value;
  Listitem.date = document.getElementById('duedate').value;

  list();
}
export {Listitem,getItems}