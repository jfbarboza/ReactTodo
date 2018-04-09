var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
var TodoApp = require('TodoApp');

describe('TodoApp', ()=>{
  it('should exist', ()=>{
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', ()=>{
    var todoText = 'Buy paper';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe('Buy paper');
    // Expect Created at to be a number
    it('should have set createdAt to a number', ()=>{
      expect(todoApp.state.todos[0].createdAt).toBeA('number');
    })

  });

  it('should toggle completed value when handleToggle called', ()=>{
    var todoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);

    // expect completed at to be a number
  });

  it('should add createdAt when Added', ()=>{
    var todoText = 'Trying to test this app';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.handleAddTodo(todoText);
    expect(todoApp.state.todos[0].createdAt).toBeA('number');


  });

  it('should add completeAt when completed', ()=>{
    var todoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');


  });

  it('should removed completedAt when completed toggle to false', ()=>{
    var todoData = {
      id: 11,
      text: 'Test Features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completedAt).toNotExist();


  });

  // text that when toggle from true to false completedAt gets removed

});
