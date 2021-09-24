function HandleEvent(e){//Handlers
    e.preventDefault();
  
    Listitem.task = document.getElementById('todotask').value;
    Listitem.cat = document.getElementById('selectedcategory').value;
    Listitem.date = document.getElementById('duedate').value;
    if(Listitem.task.value!='')
      list();
    document.getElementById("list").reset();
}