import PropTypes from "prop-types";
import Todo from "./Todo.jsx";

function TodoList(props) {
  const incompleteTodos = props.todos.filter((todo) => !todo.completed);

  return (
    <section className="todo-list-section">
      <h2 className="title">TODO</h2>
      <ul className="todo-list">
        {incompleteTodos.map((todo) => (
          <Todo
            key={todo.text}
            todo={todo}
            removeTodo={props.removeTodo}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </ul>
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  removeTodo: PropTypes.func,
  toggleCompleted: PropTypes.func,
};

export default TodoList;
