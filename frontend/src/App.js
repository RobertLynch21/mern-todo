import { useEffect, useState } from "react";
import API from "./api/api"

function App(){
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.get("/")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return(
    <div>
      <h1>Todo App</h1>
      <h2>This is an ongoing project. Check back daily for updates.</h2>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;