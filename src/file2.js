const Listitem = {};

function list(){//Helpers
    var template = Handlebars.compile(op);
  
    var elements=template({
      task: Listitem.task,
      cat: Listitem.cat,
      date: Listitem.date
      });
  
    document.getElementById('todolist').innerHTML += elements;
}