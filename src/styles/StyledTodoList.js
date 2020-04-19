import styled from 'styled-components'

const StyledTodoList = styled.div`
max-width: 750px;
margin: auto;
background-color: #222831;
ul{
    background-color: #222831;
    margin: 1rem auto;
    text-align: center;
    padding: 1rem 5px;
    color: white;
    li{
        margin: auto;
        font-size: 1.3rem;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        text-align: justify;
        list-style: none;
        border-bottom: 2px dashed gray;
        .todoTaskContainer{
            width: 75%;
        }
        button{
            padding: 10px;
            margin: auto 10px;
            border-radius: 5px;
            align-self:center;
            background-color:black;
            color: #ececec;
            font-size: 1.1rem;
        }
    }
}
`

export default StyledTodoList