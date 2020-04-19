import React, { useContext } from 'react'
import { TodoContext } from './contexts/TodoContext'
import TodoItem from './TodoItem'
import StyledTodoList from './styles/StyledTodoList'


const TodoList = () => {
  
    const { todos } = useContext(TodoContext)
    return (
        <StyledTodoList>
        {todos.length ? (
            <ul>
                {todos.map(todo => <TodoItem todo={todo.todoText} key={todo.id} id={todo.id} />)}
            </ul>

        ) : (<h3>No Tasks Left</h3>)
        }
        </StyledTodoList>
    )
    
        

      
     
}

export default TodoList
