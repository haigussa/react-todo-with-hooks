import React, { useContext, useState } from 'react'
import { TodoContext } from './contexts/TodoContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons'
import StyledTodoItem, { StyledTodoItemForm } from './styles/StyledTodoItem'

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
            <StyledTodoItem>
                <div className="todoTaskContainer">
                    {todo}
                </div>
                <div className="iconContainer">
                    <FontAwesomeIcon icon={faPen} onClick={handleIsEditing} className="faIcons editIcon" />
                    <FontAwesomeIcon icon={faTrash} onClick={handleDelete} className="faIcons deleteIcon" />
                </div>
            </StyledTodoItem>
        ) : (
                <StyledTodoItemForm onSubmit={handleSubmit}>
                    <input type="text" value={editText} onChange={handleChange} required />
                    <div className="edit-btn">
                        <button id="save-btn" type="submit" >Save</button>
                        <button id="cancel-btn" onClick={handleCancel}>Cancel</button>
                    </div>
                </StyledTodoItemForm>
            )
    )
}

export default TodoItem
