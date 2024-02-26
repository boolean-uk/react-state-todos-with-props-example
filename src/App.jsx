import { useState } from "react";
import "./App.css";
const initialTodos = [
  {
    text: "Go shopping",
    completed: true,
  },
  {
    text: "Buy food",
    completed: false,
  },
  {
    text: "Cook dinner",
    completed: false,
  },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const [todoInput, setTodoInput] = useState("");
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);

  const addTodo = (text) => {
    if (todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase())) {
      alert("That todo already exists");
      return;
    }
    setTodos([...todos, { text, completed: false }]);
  };

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  const removeTodo = (target) => {
    setTodos(todos.filter((todo) => todo !== target));
  };

  const toggleCompleted = (target) => {
    const updatedTodos = todos.map((todo) =>
      todo === target ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const incompleteTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="App">
      <main>
        <section>
          <h2 className="title">OPTIONS</h2>
          <label>
            Show Completed
            <input
              className="show-completed"
              onChange={(e) => setShowCompletedTodos(e.target.checked)}
              type="checkbox"
              checked={showCompletedTodos}
            />
          </label>
        </section>
        <section>
          <h2 className="title">ADD ITEM</h2>
          <form className="add-item" onSubmit={handleSubmit}>
            <input
              className="text-input"
              type="text"
              name="text"
              required
              minLength="3"
              onChange={handleChange}
              value={todoInput}
            />
            <button type="submit">Add</button>
          </form>
        </section>
        <section className="todo-list-section">
          <h2 className="title">TODO</h2>
          <ul className="todo-list">
            {incompleteTodos.map((todo, index) => (
              <li className="todo" key={index}>
                <div className="completed-section">
                  <input
                    className="completed-checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    value={todo.completed}
                    onChange={() => toggleCompleted(todo)}
                  />
                </div>
                <div className="text-section">
                  <p className="text">{todo.text}</p>
                </div>
                <div className="button-section">
                  <button className="delete" onClick={() => removeTodo(todo)}>
                    🗑
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        {showCompletedTodos ? (
          <section className="completed-list-section">
            <h2 className="title">COMPLETED</h2>
            <ul className="completed-list">
              {completedTodos.map((todo, index) => (
                <li className="todo" key={index}>
                  <div className="completed-section">
                    <input
                      className="completed-checkbox"
                      type="checkbox"
                      checked={todo.completed}
                      value={todo.completed}
                      onChange={() => toggleCompleted(todo)}
                    />
                  </div>
                  <div className="text-section">
                    <p className="text">{todo.text}</p>
                  </div>
                  <div className="button-section">
                    <button className="delete" onClick={() => removeTodo(todo)}>
                      🗑
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </div>
  );
}
export default App;
