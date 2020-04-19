import React, { useState, useContext } from 'react'
import { TodoContext } from './contexts/TodoContext'

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
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={todo} required placeholder="Add New Task"/>
            <input type="submit" value="Add" />
        </form>
    )
}   

export default AddTodoForm
