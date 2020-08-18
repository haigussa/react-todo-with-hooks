import styled from 'styled-components'

const StyledAddTodoForm = styled.form`
display: flex;
flex-direction: column;
width: 100%;
#inputText{
    padding: 1rem;
    font-size: 1.1rem;
    outline: none;
}
#inputButton{
    padding: 1rem;  
    background-color: #FF6666;
    width: 70%;
    margin: 1rem auto 0;
    color: white;
    font-size:1.3rem;
    font-weight: bold;
    transition: all ease .5s;
    border:1px solid white;
    &:hover{
        cursor: pointer;
        background-color: #cc5151;
    }
}
`
export default StyledAddTodoForm