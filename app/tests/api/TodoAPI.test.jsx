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

});
