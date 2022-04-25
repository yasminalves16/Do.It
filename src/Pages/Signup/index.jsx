import { Link, useHistory } from "react-router-dom"

import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { AnimationContainer, Background, Container, Content } from "./styles";
import { FiUser, FiMail, FiLock } from "react-icons/fi"
import { toast } from "react-toastify"

import api from"../../services/api"

import Button from "../../Components/Button"
import Input from "../../Components/Input"



const Signup = () => {

    const history = useHistory()

    const schema = yup.object().shape({

        name: yup.string().required("Campo Obrigatório"),
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup.string().required("Campo Obrigatório").min(8, "Minimo 8 caracteres!")
        .matches(/^(?=.*[0-9])(?=.{8,})/,"Senha pode conter apenas numeros"),
        confirmPassword: yup
            .string()
            .required("Senhas não são iguais")
            .oneOf([yup.ref("password")], "Senhas não são iguais"),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = ({name, email, password }) => {

        const user = {name, email, password}
        api.post("/user/register", user)
        .then(() => {
            toast.success('Conta criada com sucesso')
            return history.push("/login")
        })
        .catch(() => toast.error('Verifique se os campos foram inseridos corretamente ou tente outro email'))
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