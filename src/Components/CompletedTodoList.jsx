import PropTypes from "prop-types";

import Todo from "./Todo.jsx";
function CompletedTodoList(props) {
  const completedTodos = props.todos.filter((todo) => todo.completed);
  return (
    <section className="completed-list-section">
      <h2 className="title">COMPLETED</h2>
      <ul className="completed-list">
        {completedTodos.map((todo) => (
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

CompletedTodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  removeTodo: PropTypes.func,
  toggleCompleted: PropTypes.func,
};

export default CompletedTodoList;
