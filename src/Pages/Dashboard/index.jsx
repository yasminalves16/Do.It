import { Container } from "./styles";

import { Redirect } from "react-router-dom"

const Dashboard = ({ authenticated }) => {

    if(!authenticated){
        return <Redirect to="/login" />
    }

    return(
        <Container>
            <p>dashboard</p>
        </Container>
    )
}

export default Dashboard