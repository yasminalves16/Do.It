import { useHistory, Redirect } from "react-router-dom"

import { Container, Content } from "./styles";

import Button from "../../Components/Button"

const Home = ({ authenticated }) => {

    const history = useHistory()

    const handleNavigation = (path) => {
        return history.push(path)
    }

    if(authenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <Container>
            <Content>
                <h1>Do<span>.</span>It</h1>
                <p>Organize-se de forma facil e efetiva</p>
                <div>
                    <Button onClick={() => handleNavigation("/signup")} whiteSchema>Cadastre-se</Button>
                    <Button onClick={() => handleNavigation("/login")}>Login</Button>
                </div>
            </Content>
        </Container>
    );
};

export default Home;
