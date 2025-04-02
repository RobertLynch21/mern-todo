import axios from "axios";

const API = axios.create({
    baseURL: "https://to-do-backend.onrender.com", // Backend URL
});

export default API