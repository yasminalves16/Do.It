import axios from "axios"

const api = axios.create({
    baseUrl: "https://api-nodejs-todolist.herokuapp.com/",
})

export default api