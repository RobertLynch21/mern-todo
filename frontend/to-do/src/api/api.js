import axios from "axios";

const API = axios.create({
    baseURL: "https://mern-todo.onrender.com", // Backend URL
});

export default API