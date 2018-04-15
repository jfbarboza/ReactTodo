var expect = require('expect');
var actions = require('actions');

describe('Actions', () =>{
  it('should generate search text action', ()=>{
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);

  });

  it('should generate Add Todo action', ()=>{
    var action = {
      type: 'ADD_TODO',
      text: 'Testing Todo'
    }

    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);

  });

  it('should generate Toggle Completed Todos action', ()=>{
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    }

    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);

  });

  it('should generate Toggle Todo action', ()=>{
    var action = {
      type: 'TOGGLE_TODO',
      id: 212
    }

    var res = actions.toggleTodo(212);

    expect(res).toEqual(action);

  });

});
