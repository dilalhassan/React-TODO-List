import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "This is brand new title",
      description: "This is brand new description",
    },
    {
      id: 2,
      title: "This is brand new title 2",
      description: "This is brand new description 2",
    },
    {
      id: 3,
      title: "This is brand new title 3",
      description: "This is brand new description 3",
    },
  ]);

  const [id, setId] = useState("");
  console.log("this is ID =" , id);

  const deleteTodo = (id) => {
    setTodos(todos.filter((d) => d.id != id));
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center"> React To Do List CRUD App</h1>

        {/* <button onClick={()=> deleteTodo(3)} className='btn btn-danger' >Text Deelet</button> */}

        <Form id={id} setId={setId} todos={todos} setTodos={setTodos} />
        <Todos todos={todos} deleteTodo={deleteTodo} setId={setId} />
      </div>
    </>
  );
}

export default App;
