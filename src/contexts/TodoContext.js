import React, { createContext, useState } from 'react'
import { v4 } from 'uuid'

export const TodoContext = createContext()

const TodoContextProvider = (props) => {

    const [todos, setTodos] = useState([
        { id: 1, todoText: "Learn Coding", isEditing: false },
        { id: 2, todoText: "Study JavaScript", isEditing: false },
        { id: 3, todoText: "Master Hooks", isEditing: false },
        { id: 4, todoText: "Have Fun", isEditing: false }
    ])

    const addTodo = (todoText) => {
        setTodos([
            ...todos,
            { id: v4(), todoText, isEditing: false }
        ])
    }

    const editTodo = (id, editedTodo) => {

        const updatedTodo = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoText: editedTodo }
            } else {
                return todo
            }
        })
        setTodos(updatedTodo)
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo, }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider

