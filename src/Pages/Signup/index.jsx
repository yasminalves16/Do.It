import { AnimationContainer, Background, Container, Content } from "./styles";

import { Link } from "react-router-dom"

import Button from "../../Components/Button"
import Input from "../../Components/Input"

import { FiUser, FiMail, FiLock } from "react-icons/fi"

const Signup = () => {


    return(
        <Container>
            <Background/>
                <Content>
                    <AnimationContainer>
                        <form>
                            <h1>Cadastro</h1>
                            <Input icon={FiUser} type="text" label="Nome" placeholder="Seu nome"></Input>
                            <Input icon={FiMail} type="email" label="Email" placeholder="Seu melhor email"></Input>
                            <Input icon={FiLock} type="password" label="Senha" placeholder="Uma senha segura"></Input>
                            <Input icon={FiLock} type="password" label="Confirmação de Senha" placeholder="Repita a senha"></Input>

                        <Button>Enviar</Button>
                        <p>Já tem uma conta ? Faça seu <Link to="/login">login</Link></p>
                        </form>
                    </AnimationContainer>
                </Content>
        </Container>
    )
}

export default Signup