var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=>{

  beforeEach(()=>{
    localStorage.removeItem('todos');
  });

  it('should exist', ()=>{
    expect(TodoAPI).toExist();
  });

  describe('saveTodos', ()=>{
    it('should set valid todos array', ()=>{
      var todos = [{
        id: 23,
        text: 'test all values',
        completed: false
      }];
      TodoAPI.saveTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });

    it('should not set todos with invalid data', ()=>{
      var badTodos = {a: 'b'};
      TodoAPI.saveTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });

  });

  describe('getTodos', ()=>{
    it('should return empty array for bad localStorage data', ()=>{
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('return todos if valid array in local storage', ()=>{
      var todos = [{
        id: 23,
        text: 'test all values',
        completed: false
      }];

      localStorage.setItem('todos', JSON.stringify(todos));
      var actualTodos = TodoAPI.getTodos();

      expect(actualTodos).toEqual(todos);

    });

  });

  describe('filterTodos', ()=>{
    var todos = [{
        id: 1,
        text: 'some text',
        completed: true
      },
      {
        id: 2,
        text: 'Other text',
        completed: false
      },
      {
        id: 3,
        text: 'Other text',
        completed: true
      }
    ];
    it('should return all items if showCompleted is true', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
    it('should return 1 item if showCompleted is false', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });
    it('should sort by completed status', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should return all todos if searchText is empty', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return the expected todo with searchText', ()=>{
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'some');
      expect(filteredTodos[0].id).toBe(1);
    });

  });

});
