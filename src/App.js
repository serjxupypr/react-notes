import React from 'react';
import AddTodoForm from './containers/add-todo-form';
import TodoList from './containers/TodoList';

function App() {

  return (
    <div className="App">
      <h1
      style={{
        textAlign: "center"
      }}
      >
      Reaaaactttt
      </h1>
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
