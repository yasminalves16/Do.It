import { Link, useHistory, Redirect } from "react-router-dom";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { AnimationContainer, Background, Container, Content } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { toast } from "react-toastify";

import api from "../../services/api";

import Button from "../../Components/Button";
import Input from "../../Components/Input";


const Login = ({ authenticated, setAuthenticated }) => {
    const history = useHistory();

    const schema = yup.object().shape({
        email: yup.string().required("Campo Obrigatório").email("Email inválido"),
        password: yup
            .string()
            .required("Campo Obrigatório")
            .min(8, "Minimo 8 caracteres!")
            .matches(/^(?=.*[0-9])(?=.{8,})/, "Senha pode conter apenas numeros"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) => {
        api.post("/user/login", data).then((response) => {

            const { token } = response.data;

            localStorage.setItem("@Doit:token", JSON.stringify(token));

            setAuthenticated(true)

            return history.push("/dashboard");
        })
            .catch((err) => {
                toast.error("Email ou Senha inválidos")
            })
    };

    if(authenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <Container>
            <Content>
                <AnimationContainer>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Login</h1>
                        <Input
                            icon={FiMail}
                            type="email"
                            label="Email"
                            placeholder="Seu melhor email"
                            register={register}
                            name="email"
                            error={errors.email?.message}
                        ></Input>
                        <Input
                            icon={FiLock}
                            type="password"
                            label="Senha"
                            placeholder="Uma senha segura"
                            register={register}
                            name="password"
                            error={errors.password?.message}
                        ></Input>

                        <Button type="submit">Enviar</Button>
                        <p>
                            Ainda não tem uma conta? Faça seu{" "}
                            <Link to="/signup">cadastro</Link>
                        </p>
                    </form>
                </AnimationContainer>
            </Content>
            <Background />
        </Container>
    );
};

export default Login;
