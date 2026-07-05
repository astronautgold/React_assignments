import { useState } from "react";

const Task_sixteen = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

  // Add Todo
  const addTodo = () => {
    if (todo.trim() === "") return;

    setTodos([...todos, todo]);
    setTodo("");
  };

  // Delete Todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Search Filter
  const filteredTodos = todos.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {/* Add Todo */}
      <input
        type="text"
        placeholder="Enter Todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <br />
      <br />

      {/* Search */}
      <input
        type="text"
        placeholder="Search Todo"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      {/* Display Todos */}
      {filteredTodos.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Task_sixteen;