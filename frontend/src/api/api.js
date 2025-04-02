import axios from "axios";

const API = axios.create({
    baseURL: "https://mern-todo-backend-syas.onrender.com", // Backend URL
});

export default API