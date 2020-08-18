import React, { useState, useContext } from 'react'
import { TodoContext } from './contexts/TodoContext'
import StyledAddTodoForm from './styles/StyledAddTodoForm'

const AddTodoForm = () => {
    const { addTodo } = useContext(TodoContext)
    const [todo, setTodo] = useState("")
    const handleChange = (e) => {
        setTodo(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }
    return (
        <StyledAddTodoForm onSubmit={handleSubmit}>
            <input id="inputText" type="text" onChange={handleChange} value={todo} required placeholder="Add a new task..." />
            <input id="inputButton" type="submit" value="Add" />
        </StyledAddTodoForm>
    )
}

export default AddTodoForm
