import styled from "styled-components"

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 38px;

    p{
        color: var(--white);
        font-size: 1.3rem;
    }

`

export const InputContainer = styled.form`
    flex:1;
    margin-top: 32px;
    padding: 0 38px;

    section{
        display:flex;
        align-items: center;

        > div {
            max-width: 60%;
            flex: 1;
            margin-right: 16px;
        }

        button{
            max-width: 260px;
            height: 60px;
            margin: 0;
        }
    }

`

export const TasksContainer = styled.div`
    margin-top: 32px;
    padding: 0 38px;
    display: flex;
    flex-wrap: wrap;

    div{
        margin-top: 16px;
        margin-right: 32px;
    }
`

