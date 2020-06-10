import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './style.css';
import uniqueId from 'lodash/utility/uniqueId'

class App extends Component {
  [ id ] = useState(() => uniqueId('myprefix-'))
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo) => {
    todo.id = Math.round(Math.random() * 10000000);
    console.log("todo.id: ", todo.id);
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
