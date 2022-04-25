import { Link, useHistory } from "react-router-dom"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { AnimationContainer, Background, Container, Content } from "./styles";

import Button from "../../Components/Button"
import Input from "../../Components/Input"

import { FiUser, FiMail, FiLock } from "react-icons/fi"

const Signup = () => {

    const history = useHistory()

    const schema = yup.object().shape({

        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(6, "Minimo 6 caracteres!")
        .matches(
            /^(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
            "Sua senha precisa ter ao menos uma letra, um numero e um caracter especial!"
        ),
        confirmPassword: yup
            .string()
            .required("Senhas não são iguais")
            .oneOf([yup.ref("password")], "Senhas não são iguais"),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = (data) => {
        console.log(data)
        history.push("/login")
    }

    return(
        <Container>
            <Background/>
                <Content>
                    <AnimationContainer>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1>Cadastro</h1>
                            <Input icon={FiUser} type="text" label="Nome" placeholder="Seu nome" register = {register} name="name" error = {errors.name?.message}></Input>
                            <Input icon={FiMail} type="email" label="Email" placeholder="Seu melhor email" register = {register} name="email" error = {errors.email?.message} ></Input>
                            <Input icon={FiLock} type="password" label="Senha" placeholder="Uma senha segura" register = {register} name="password" error = {errors.password?.message}></Input>
                            <Input icon={FiLock} type="password" label="Confirmação de Senha" placeholder="Repita a senha" register = {register} name="confirmPassword" error = {errors.confirmPassword?.message} ></Input>

                        <Button type="submit">Enviar</Button>
                        <p>Já tem uma conta ? Faça seu <Link to="/login">login</Link></p>
                        </form>
                    </AnimationContainer>
                </Content>
        </Container>
    )
}

export default Signup