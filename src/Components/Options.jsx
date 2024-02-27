import PropTypes from "prop-types";

function Options(props) {
  return (
    <section>
      <h2 className="title">OPTIONS</h2>
      <label>
        Show Completed
        <input
          className="show-completed"
          onChange={(e) => props.setShowCompletedTodos(e.target.checked)}
          type="checkbox"
          checked={props.showCompletedTodos}
        />
      </label>
    </section>
  );
}

Options.propTypes = {
  setShowCompletedTodos: PropTypes.func,
  showCompletedTodos: PropTypes.bool,
};

export default Options;
