import styled from 'styled-components'

const StyledTodoItem = styled.li`
display: flex;
background:rgba(0,0,0,0.1);
color: white;
justify-content: space-between;
margin: 1rem auto;
.todoTaskContainer{
    max-width: 85%;
    margin: 1rem;
    font-size: 1.2rem;
}
.iconContainer{
    display:flex;
    width: 15%;
    padding-right: 1rem;
    justify-content: space-between;
    .faIcons{
        transition: all ease 0.3s;
        align-self:center;
        font-size: 1.3rem;
        padding: 0.5rem;
        border-radius: 3px;
        &:hover{
            cursor: pointer;
            background-color: white;
            color: #FF6666;
        }
    }
    
}
`

export const StyledTodoItemForm = styled.form`
color: white;
margin: 1rem auto;
display: flex;
justify-content: space-between;
input{
    padding: 1rem;
    font-size: 1.1rem;
    outline: none;
    width: 65%;
    border-radius: 5px;
    margin-left:5px;
}
.edit-btn{
    width: 30%;
    display: flex;
    justify-content: space-evenly;
    background-color: #FF6666;
    #save-btn, #cancel-btn{
        transition: all ease 0.3s;
        background:rgba(0,0,0,0.1);
        width: 100%;
        margin: 0 3%;
        color: white;
        font-size: 1.1rem;
        border:none;
        border-radius: 5px;
        &:hover{
            cursor: pointer;
            background-color: white;
            color: #FF6666;
        }
  }
}
`
export default StyledTodoItem