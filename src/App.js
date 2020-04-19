import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoListContextProvider from './contexts/TodoContext'
import AddTodoForm from './AddTodoForm';
import StyledApp from './styles/StyledApp';

function App() {
  return (
    <StyledApp>
      <TodoListContextProvider>
        <div className="App">
          <AddTodoForm />
          <TodoList />
        </div>
      </TodoListContextProvider>
    </StyledApp>
  );
}

export default App;
