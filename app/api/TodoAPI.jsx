var $ = require('jQuery');

module.exports = {
  saveTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  },
  getTodos: function(todos){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try{
      todos = JSON.parse(stringTodos);
    }
    catch(e){

    }
    return $.isArray(todos) ? todos : [];
  }
}
