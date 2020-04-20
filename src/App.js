import React from 'react';
import TodoList from './TodoList';
import TodoListContextProvider from './contexts/TodoContext'
import AddTodoForm from './AddTodoForm';
import StyledApp from './styles/StyledApp';

function App() {
  return (
    <StyledApp>
      <TodoListContextProvider>
        <div className="App">
          <h1>Todo App</h1>
          <AddTodoForm />
          <TodoList />
        </div>
      </TodoListContextProvider>
    </StyledApp>
  );
}

export default App;
