import styled, { keyframes } from 'styled-components'
import Man from "../../Assets/man.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Background = styled.div`
    @media (min-width: 1100px){
        flex: 1;
        background: url(${Man})  no-repeat center, var(--black);
        background-size: contain;
    }

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 700px;
`

const appearFromLeft = keyframes `

    from{
        opacity: 0;
        transform: translateX(-50px)
    }

    to {
        opacity: 1;
        transform: translateX(0px)
    }

`

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    animation: ${appearFromLeft} 1s;

    form{
        margin: 88px 0;
        width: 340px;
        text-align: center;
    

    h1{
        margin-bottom: 32px;
        color: white;
    }

    >div{
        margin-top: 16px;
    }

    p{
        margin-top: 8px;
        color: white;

        a{
            font-weight: bold;
            color: grey;
        }
    }
}
`