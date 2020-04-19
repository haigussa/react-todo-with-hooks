import React, { useContext, useState } from 'react'
import { TodoContext } from './contexts/TodoContext'

const TodoItem = ({ todo, id }) => {
    const { deleteTodo, editTodo } = useContext(TodoContext)
    const [editText, setEditText] = useState("")
    const [isEditing, setIsEditing] = useState(false)

    const handleIsEditing = (e) => {
        setIsEditing(!isEditing)
        setEditText(todo)
    }

    const handleDelete = () => {
        deleteTodo(id)
    }

    const handleChange = (e) => {
        setEditText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(id, editText)
        setIsEditing(!isEditing)
    }

    const handleCancel = () => {
        setIsEditing(false)
    }

    return (
        !isEditing ? (
            <li>
                <div className="todoTaskContainer">
                    {todo}
                </div>
                <div>
                    <button onClick={handleIsEditing}>Edit</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </li>
        ) : (
                <form onSubmit={handleSubmit}>
                    <input type="text" value={editText} onChange={handleChange} required />
                    <button type="submit" >Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </form>
            )
    )
}

export default TodoItem
