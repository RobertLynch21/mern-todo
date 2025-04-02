import { useEffect, useState } from "react";
import API from "./api/api"

function App(){
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
    fetch("https://mern-todo-backend-syas.onrender.com")
    .then((res) => res.text())
    .then((data) => setMessage(data));
  }, []);

  return(
    <div>
      <h1>Todo App</h1>
      <h2>This is an ongoing project. Check baily daily for updates.</h2>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;