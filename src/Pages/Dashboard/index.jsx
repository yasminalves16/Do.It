import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import { Container, InputContainer, TasksContainer } from "./styles";
import { FiEdit2 } from "react-icons/fi";
import { toast } from "react-toastify";

import Input from "../../Components/Input";
import Button from "../../Components/Button";
import Card from "../../Components/Card";
import api from "../../services/api";

const Dashboard = ({ authenticated }) => {
    const [tasks, setTasks] = useState([]);
    const [token] = useState(
        JSON.parse(localStorage.getItem("@Doit:token")) || ""
    );

    const { register, handleSubmit } = useForm();

    const loadTasks = () => {
        api
            .get("/task", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: {
                    completed: false,
                },
            })
            .then((response) => {
                const apiTasks = response.data.data.map((task) => ({
                    ...task,
                    createdAt: new Date(task.createdAt).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    }),
                }));
                setTasks(apiTasks);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadTasks();
    });

    const onSubmit = ({ task }) => {
        if (!task) {
            return toast.error("Complete o campo para enviar uma tarefa");
        }

        api
            .post("/task",
                {
                    description: task,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                loadTasks();
                return toast.success("Tarefa Adicionada");
            });
    };

    const handleCompleted = (id) => {
        const newTask = tasks.filter((task) => task.id !== id);

        api
            .put(
                `/task/${id}`,
                { completed: true },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then((response) => {
                setTasks(newTask);
                return toast.success("Tarefa Concluida");
            });
    };

    const d = new Date();
    const today = d.toLocaleString();

    if (!authenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <Container>
            <InputContainer onSubmit={handleSubmit(onSubmit)}>
                <p>{today}</p>
                <section>
                    <Input
                        icon={FiEdit2}
                        placeholder="Nova Tarefa"
                        register={register}
                        name="task"
                        error=""
                    />
                    <Button type="submit"> Adicionar </Button>
                </section>
            </InputContainer>
            <TasksContainer>
                {tasks.map((task) => (
                    <Card
                        key={task._id}
                        title={task.description}
                        date={task.createdAt}
                        onClick={() => handleCompleted(task._id)}
                    />
                ))}
            </TasksContainer>
        </Container>
    );
};

export default Dashboard;
