import { useEffect, useState } from "react";
import API from "./api/api"

function App(){
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    API.get("/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => console.error("Error fetching todos:", err));
  }, []);

  const handleSubmit = () => {
    API.post("/todos", { text })
    .then((res) => setTodos([...todos, res.data]))
    .catch((err) => console.err("Error adding todo:", err));
    setText("");
  };

  return(
    <div>
      <h1>Todo App</h1>
      <h2>This is an ongoing project. Check back daily for updates.</h2>
      
      {/*Form to add a todo */}
      <input 
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Add a Todo"
      />
      <button onClick={handleSubmit}>Add</button>
      
      {/*Display todos*/}
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;