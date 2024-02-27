import PropTypes from "prop-types";

function Todo(props) {
  return (
    <li className="todo">
      <div className="completed-section">
        <input
          className="completed-checkbox"
          type="checkbox"
          checked={props.todo.completed}
          value={props.todo.completed}
          onChange={() => props.toggleCompleted(props.todo)}
        />
      </div>
      <div className="text-section">
        <p className="text">{props.todo.text}</p>
      </div>
      <div className="button-section">
        <button className="delete" onClick={() => props.removeTodo(props.todo)}>
          🗑
        </button>
      </div>
    </li>
  );
}

Todo.propTypes = {
  todo: PropTypes.object,
  toggleCompleted: PropTypes.func,
  removeTodo: PropTypes.func,
};

export default Todo;
