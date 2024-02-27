import { useState } from "react";
import "./App.css";
import Options from "./Components/Options";
import AddItem from "./Components/AddItem";
import TodoList from "./Components/TodoList";
import CompletedTodoList from "./Components/CompletedTodoList";

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
  const [showCompletedTodos, setShowCompletedTodos] = useState(true);

  const addTodo = (text) => {
    if (todos.some((todo) => todo.text.toLowerCase() === text.toLowerCase())) {
      alert("That todo already exists");
      return;
    }
    setTodos([...todos, { text, completed: false }]);
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

  return (
    <div className="App">
      <main>
        <Options
          showCompletedTodos={showCompletedTodos}
          setShowCompletedTodos={setShowCompletedTodos}
        />

        <AddItem addTodo={addTodo} />

        <TodoList
          todos={todos}
          toggleCompleted={toggleCompleted}
          removeTodo={removeTodo}
        />

        {showCompletedTodos && (
          <CompletedTodoList
            todos={todos}
            toggleCompleted={toggleCompleted}
            removeTodo={removeTodo}
          />
        )}
      </main>
    </div>
  );
}

export default App;
